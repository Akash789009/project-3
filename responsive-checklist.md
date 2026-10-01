# Responsive Design Proof Checklist

## Required viewport tests

| Viewport | Expected behavior |
|---|---|
| 320px | One-column cards, compact navigation, no horizontal scrollbar |
| 375px | One-column mobile dashboard |
| 768px | Two-column dashboard sections and two-column architecture cards |
| 1024px | Sidebar appears; multi-column dashboard |
| 1440px | Wide desktop spacing and four architecture cards |

## Visual checks

- [ ] No horizontal scrollbar at 320px.
- [ ] No horizontal scrollbar at 375px.
- [ ] No horizontal scrollbar at 768px.
- [ ] No horizontal scrollbar at 1024px.
- [ ] No horizontal scrollbar at 1440px.
- [ ] Cards do not overflow their containers.
- [ ] Navigation remains usable.
- [ ] Text remains readable.
- [ ] Theme button switches light/dark variables.
- [ ] Hover transitions work without breaking layout.
- [ ] `prefers-reduced-motion` is respected.

## Submission screenshots

Capture:
- `screenshots/mobile-320.png`
- `screenshots/mobile-375.png`
- `screenshots/tablet-768.png`
- `screenshots/laptop-1024.png`
- `screenshots/desktop-1440.png`
- `screenshots/dark-theme.png`
