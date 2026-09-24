# Newsletter Sign-up with Success Message

A Frontend Mentor challenge built with **Angular 17 (standalone)** and **Tailwind CSS**. The app collects an email address, validates it, and shows a success screen carrying the submitted email over router state.

## Tech Stack

- **Angular 17** — standalone components, reactive forms, lazy-route-free SPA navigation
- **Tailwind CSS** — utility-first styling to keep custom CSS to a minimum
- **TypeScript / Sass** — typed logic plus a small Sass layer only for the reset and shared component classes

## Project Structure

```
src/app/
├── app.routes.ts           # '' -> main form, 'thanks' -> success view
├── components/
│   ├── main/               # Landing card (text + image columns)
│   ├── forn/               # Email form with validation states
│   ├── thanks/             # Success message + email from router state
│   └── image/              # Responsive picture/source switching
src/styles.sass             # Global reset + reusable component classes
```

## Styling Approach: Global Reset + Tailwind

### Reset

A global reset (`src/styles.sass`) zeroes margins, paddings, borders, outlines, and sets `font-size: 100%` with `vertical-align: baseline` on all elements. This gives a clean slate so Tailwind utilities behave predictably on every browser.

```sass
@tailwind base
@tailwind components
@tailwind utilities

html, body, div, section, img, button
  margin: 0
  padding: 0
  border: 0
  outline: 0
  font-size: 100%
  vertical-align: baseline
  background: transparent

body
  line-height: 1.5
  overflow-x: hidden
```

### Tailwind to Replace Hand-Written CSS

All layout, spacing, typography, colors, and responsive behavior are declared inline with Tailwind utilities. This removes the need for per-component stylesheet files and makes the design system consistent at a glance:

```html
<button
  class="bg-gray-800 text-white p-4 w-full rounded-lg font-bold hover:bg-[#ff6257] active:bg-[#ff6257]"
>
  Dismiss message
</button>
```

- **Arbitrary values** are used for the challenge palette (e.g. `text-[#ff6257]`) instead of editing a config file.
- **Responsive prefixes** (`lg:`) handle the mobile-first switch between the mobile and desktop layouts.
- Reusable component classes are kept in `@layer components` inside the Sass file (e.g. `.screen-center`, `.btn-primary`) to avoid duplicating the same utility list.

## Key Implementation Details

- **Form validation**: `Validators.required` + `Validators.email` on a reactive form. An `errorForm` getter flags the input only after it has been touched (`control.touched && control.invalid`), toggling the error border/background (`#ffe8e6`).
- **State between routes**: the submitted email is passed to the success route via `router.navigate(['/thanks'], { state: { email } })` and read back with `location.getState()`, safely falling back to an empty string.
- **Responsive image**: the illustration swaps between the desktop and mobile SVGs through `<picture>` + `<source media="...">`, with no JavaScript involved.
- **Accessibility touches**: the input is linked to its label and error message via `for`/`aria-describedby`.

## Deploying on Vercel

The project is served as a static site. One deployment gotcha worth remembering:

- Set **`baseHref`** to `/` during the build. A leftover value pointing to a GitHub Pages path makes every asset resolve to `/someUser/repo/assets/...`, which returns 404 and breaks the images in preview — while the text keeps rendering fine.

```json
// angular.json
"options": {
  "baseHref": "/"
}
```

Existing deployments need a fresh rebuild (`ng build`) after changing it.

## Built with opencode

opencode was used as the development tool to guide the construction workflow and speed up delivery:

- **Faster error detection**: after each meaningful change, build and lint checks were run automatically (`npx ng build` + `npx ng lint`), catching issues before they reached the browser.
- **iterative styling flow**: mobile and desktop styles were refined review by review, with visual feedback applied directly to the components (layout, colors, spacing, responsive breakpoints).
- **development-time savings**: what would normally take about a week (including layout polish, validation states, responsive behavior, and the Vercel deployment fix) was delivered in around **two days**, largely by reducing manual debugging and rewrites.

## Development Commands

```bash
npm install        # install dependencies
ng serve          # start the dev server at http://localhost:4200
ng build          # production build into dist/
ng lint           # run ESLint on source files
```