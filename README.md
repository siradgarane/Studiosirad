# Studio Sirad

Static marketing site for a brand identity studio for women entrepreneurs. Built on luxury through honesty.

Plain HTML, CSS, and JavaScript. No build step. Desktop-first at 1440px, responsive down to mobile. Deploy the files as-is to Simply.com.

## Structure

```
index.html                  Home
work.html                   Work index
work-ladies-lounge.html     Project — The Ladies Lounge
work-markaz-al-hidayah.html Project — Markaz Al Hidayah
work-wedding-cake.html      Project — Wedding Cake Identity
services.html               Services
about.html                  About
contact.html                Contact
css/styles.css              Design system and all styles
js/main.js                  Mobile nav + Formspree form handling
assets/img/                 Drop project and portrait images here
```

## Design system

- Ink `#1A1714` — page background
- Paper `#FAF8F3` — text
- Sandy Gold `#9A7B3F` — buttons, hover, accents
- Headings and wordmark: Bodoni MT, then Times New Roman, then serif
- Body: Inter, 24px base on desktop, scaling down on smaller screens

## Placeholders to fill before launch

1. **Formspree** — replace `FORM_ID` in the form `action` on `index.html`
   (newsletter) and `contact.html` (enquiry) with your real Formspree form
   IDs, e.g. `https://formspree.io/f/abcdwxyz`. The forms submit over AJAX
   and show an inline confirmation, so no redirect page is needed.
2. **Contact email** — replace every `hello@studiosirad.com` with your real
   address (header/footer form, footer, and contact page).
3. **Social links** — set the real Instagram, Substack, and Threads URLs in
   each footer.
4. **Images** — drop high-resolution images into `assets/img/` and replace the
   placeholder blocks:
   - Featured project cards on `index.html` / `work.html`: swap the
     `ph-1` / `ph-2` / `ph-3` placeholder classes for a real image (set a
     `background-image` on `.project-card__media`, or use an `<img>`).
   - Project galleries: replace each `<div class="gallery__slot">` with an
     `<img src="assets/img/..." alt="...">`. Alt text is already written into
     each `figcaption` as a guide.
   - About portrait: replace the `Portrait image slot` block on `about.html`.
5. **Favicon** (optional) — add a favicon file and link it in each `<head>`.

## Notes

- Bodoni MT is a system font on many machines; the stack falls back to Times
  New Roman then serif where it is not installed. Swap in a hosted Bodoni-style
  face if you want it guaranteed everywhere.
- Motion respects `prefers-reduced-motion`.
