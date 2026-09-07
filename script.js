// Hallmark Furnitures — shared behaviour

document.addEventListener("DOMContentLoaded", function () {
  setupNavToggle();
  highlightActiveNav();
  setupYear();
  setupGalleryFilter();
  setupContactForm();
});

function setupNavToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  function setOpen(isOpen) {
    nav.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Toggle menu");
    toggle.innerHTML = isOpen ? "&times;" : "&#9776;";
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });
}

function highlightActiveNav() {
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
}

function setupYear() {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function setupGalleryFilter() {
  var buttons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll("[data-category]");
  if (!buttons.length || !cards.length) return;

  function applyFilter(category) {
    cards.forEach(function (card) {
      var match = category === "all" || card.getAttribute("data-category") === category;
      card.classList.toggle("is-hidden", !match);
    });
    buttons.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === category);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyFilter(btn.getAttribute("data-filter"));
    });
  });

  var params = new URLSearchParams(window.location.search);
  var requested = params.get("category");
  var initial = requested && document.querySelector('.filter-btn[data-filter="' + requested + '"]') ? requested : "all";
  applyFilter(initial);
}

function setupContactForm() {
  var form = document.getElementById("inquiry-form");
  if (!form) return;

  var params = new URLSearchParams(window.location.search);
  var item = params.get("item");
  var messageField = document.getElementById("message");
  if (item && messageField) {
    messageField.value = "Hi, I'm interested in the " + item + ". Could you share more details and pricing?";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var message = messageField.value.trim();

    var subject = encodeURIComponent("Website inquiry from " + (name || "a customer"));
    var body = encodeURIComponent(
      message + "\n\nName: " + name + "\nPhone/Email: " + contact
    );

    window.location.href = "mailto:info@hallmarkfurniture.co.ke?subject=" + subject + "&body=" + body;
  });
}
