# Images

## Current state: Unsplash stand-ins

Most photos on the site right now (all 10 Gallery product cards, the 4 home "Shop by Room" category tiles, the 6 "Fan Favourites" on the homepage, and the 4 page-header banner photos behind the Home hero and the Gallery/About/Contact page titles) are **free-license stock photos from Unsplash**, not real photos of Hallmark Furnituress' actual pieces or premises. They were used as aesthetic placeholders because:

- The shop doesn't have its own Pinterest board of product photos yet
- Random Pinterest photos are generally unlicensed re-pins, unlike Unsplash (which explicitly licenses photos for free commercial use)
- Pinterest search results also aren't reliably scrapable/automatable

**Product cards and category tiles are mockup content, not real inventory.** Each one should be swapped for the shop's actual product photography before the site is treated as a live, trustworthy catalog — otherwise a customer could inquire about a piece that doesn't match what's really in the showroom.

The 4 **hero/page-header banner photos** (`hero-home.jpg`, `hero-gallery.jpg`, `hero-about.jpg`, `hero-contact.jpg`) are lower-stakes — pure ambiance behind a page title, not tied to a specific product or claim — so they're fine to leave as stock photography longer-term if you like the look. Swap them for real shop photos whenever you have good wide shots to use.

The **About page storefront photo** (`storefront.jpg`, sitting right before the "Our Story" heading, not the hero banner above it) is a generic stock photo of an unrelated storefront — **explicitly not a photo of the real Hallmark Furnitures shop**. This was a judgment call flagged to and confirmed by the user: since this spot specifically claims to depict "the shop," a stock photo here carries real risk of misleading a visitor about what the actual building on Ruaka Road looks like. Its `alt` text says so directly. **Replace this one first**, before the product cards — it's the highest-priority swap in this whole folder.

## Swapping in real photos

1. Add image files to this folder (JPEG/WebP recommended, ideally already sized close to display size to keep the site fast — WebP preferred per the PRD's performance requirement).
2. Replace the `src` of the matching `<img class="img-placeholder" ...>` tag in `index.html`, `gallery.html`, or `about.html`, e.g.:

   ```html
   <img class="img-placeholder" src="images/chesterfield-sofa.jpg" alt="Chesterfield Sofa in the Hallmark Furnitures showroom" loading="lazy" width="400" height="300" />
   ```

3. Keep `loading="lazy"` and explicit `width`/`height` so the layout doesn't jump while images load.
4. Pull from the shop's best TikTok/Facebook photos and videos — that's the content this site was built to centralize.
5. For the About page storefront photo (`storefront.jpg`), use an actual photo of the Ruaka Road storefront — this is the top-priority swap.
6. To swap a banner photo, replace the corresponding file (`hero-home.jpg`, `hero-gallery.jpg`, `hero-about.jpg`, or `hero-contact.jpg`) — the CSS in `styles.css` (`.hero`, `.page-hero-gallery`, `.page-hero-about`, `.page-hero-contact`) references them by that exact filename, so no HTML changes are needed, just replace the file.

## Attribution note

Unsplash doesn't legally require attribution, but crediting photographers is appreciated. Current stand-ins (photographer, via unsplash.com):

**Product cards / category tiles:** Hal Gatewood (sofa), Vlad Patana (coffee table), JALG TV Stand (TV stand), Francesca Tosolini (bed frame), Brian Wangenheim (wardrobe), Holly Stratton (nightstand), Costa Live (dining set), Clay Banks (dining bench, living room + dining category tiles), Martin Katler (executive desk), EFFYDESK (office chair), Spacejoy (bedroom category tile), Matúš Gocman (office category tile).

**Banner photos:** photographer credited on the relevant Unsplash listing for `hero-home.jpg` (modern furniture showroom interior), `hero-gallery.jpg` (Clay Banks — living room with fireplace), `hero-about.jpg` (Minh Đức — carpenter working wood in a workshop), `hero-contact.jpg` (Kailun Zhang — cozy reading nook).

**Storefront photo:** Marcus Loke (`storefront.jpg` — an unrelated black-and-white wooden shop facade, used only as a placeholder).
