# tbragaf.github.io

Personal site, three pages built by one Vite build: `/` (home), `/cv/` (curriculum vitae) and `/privacy/`. Plain
Vite + React + TypeScript with plain CSS, with a hamburger menu on mobile.

- No third-party requests (decided 25/11/2026): no analytics, cookies, forms or embeds, and nothing loaded from another
  site. Source Sans Pro is self-hosted through Fontsource (`@fontsource/source-sans-pro`, latin subset, 400, 400
  italic, 600, 700), imported at the top of `styles.css`, never from Google Fonts.
- `/privacy/` (linked from the footer only) says the site collects nothing: the theme choice stays in the browser,
  GitHub Pages logs IPs on its side, emails are used only to reply. Keep it true when the site changes.

- Look (decided 18/11/2026, inspired by hgoncalves.uk/cv without copying it): a sticky header with round icon
  buttons; the `Hero` on the page background with a line under it, no band, card or gradient (a teal band, a tint and
  a card were tried and dropped). It holds the photo, name, title, location, "Download CV" and, on the right from
  900 px, the contacts with icons; on a phone everything is centred, with the contacts and download as round icon
  buttons. Sections sit in a 960 px column with a Phosphor icon and an uppercase teal title over a hairline. Source Sans
  Pro, high-contrast text. Tools are teal pills. Icons are Phosphor (`@phosphor-icons/react`, as in the ledger).
- Light and dark (as in the ledger's spending-web): the system decides by default; the header's `ThemeToggle` is a
  two-state toggle (shows the sun when dark, the moon when light; no "automatic" state). `ThemeService` keeps only an
  explicit choice in localStorage (`tbragaf.theme`) and sets `data-theme` on `<html>`; the colours in `styles.css` are `light-dark()` pairs. Services are built in `renderPage` and reach
  components through `useServices()`.
- CV sections: Profile, Work experience, Education, Languages. No side or personal projects (28/11/2026). OutSystems
  is one `ExperienceEntry` with the titles held (`history`) and bullets grouped by theme (`ExperienceGroup`), each
  opening with a bold lead-in.
- "Download CV" prints the page; an `@media print` block hides the header, footer and button and forces light.
  A generated static PDF is future work.
- Highlights (19/11/2026) come from the owner's performance reviews in `private/performance-reviews.md`: git-ignored,
  never committed or published. On the public page: no colleagues', customers' or internal teams' names, no internal
  links, ticket ids, bug titles or ratings; where the self-review and the manager's differ, the manager's (smaller)
  claim; internal jargon translated (1CP is publishing, HLD/LLD a design). Profile ends in a row of four numbers
  (`Highlights`). Hélder (hgoncalves.uk) is on the same team: never claim what his CV claims (he "led the integration of
  Mentor"); say what the owner did.
- No internal money figures (the secrets saving is "substantial daily savings"), and no one-off examples in bullets
  ("greatly reduced memory use", not "fixed a 12 GB spike"); internal names like UI Editor stay out. Still open: the
  English level and any awards.
- The photo (`public/assets/tiago-braga-fernandes.jpg`, 19/11/2026; renamed from profile.jpg so browsers drop the cached old one) is a 440 px head-and-shoulders crop, not rotated, of the owner's own colour-edited
  version, colours untouched, not mirrored; shown at 176 px (128 on a phone).

- `index.html`, `cv/index.html` and `privacy/index.html` are the three entries; `src/home`, `src/cv` and `src/privacy` hold each page, `src/shared` the header, footer, layout and `styles.css`.
- Paths come from the `Route` enum, external URLs from `ExternalLink`; never a path string in a link.
- The header logo reads "tbragaf".
- Navigation is a menu only (no cards). English only. No "Built with" line in the footer.
- CV content is a draft in the owner's voice: reword together before publishing.
- Deploy: `.github/workflows/deploy.yml` builds and publishes `dist` to GitHub Pages on every push to `main` (Settings, Pages, source "GitHub Actions"). The old `cv` repo is archived after.
- Commands: `npm start` (dev), `npm run build` (typecheck + build), `npx prettier --write src`.
