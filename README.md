# ➗ Maths Game

A 60-second multiplication quiz in the browser. A problem appears, four
possible answers are shown as clickable boxes, and you race the clock to pick
the right one as many times as possible. Plain HTML/CSS/JS, no build step.

## How to play

1. Open [`HTML/index.html`](HTML/index.html) in any modern browser (or serve
   the folder — see below).
2. Click **Start Game**.
3. A multiplication problem appears (e.g. `6 x 7`). Click the box with the
   correct product.
   - Correct → score +1, a new problem appears immediately.
   - Wrong → a "Try Again" flash, same problem stays up.
4. You have **60 seconds**. When the clock hits 0, your final score is shown
   and you can start again.

## Running locally

```bash
open HTML/index.html
```

Or serve it with any static file server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/HTML/index.html
```

## Project structure

```
Maths-Game/
├── HTML/
│   └── index.html    # page structure / game HUD
├── CSS/
│   └── style.css      # layout and box styling
└── JAVASCRIPT/
    └── code.js         # game state, countdown, question generation
```

## Notes on this version

- `code.js` previously had near-identical click handlers duplicated four
  times (one per answer box); this is now a single handler shared across all
  boxes, driven by `Array.from`/`forEach`.
- The game shipped without an `index.html`, so it couldn't actually be
  opened — this has been added, wired to the existing CSS/JS.
- A full, unused copy of jQuery (`JQUERY/jqueryfile.js`, ~280KB) was removed;
  the game logic is plain DOM JavaScript and never referenced it.

## Tech

Vanilla JavaScript (ES6) and CSS. No external libraries or network requests.
