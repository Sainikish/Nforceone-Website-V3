---
description: Generate or add animations/motion to UI components
argument-hint: [description of the animation, or a component/file to animate]
---

The user wants motion/animation work done: $ARGUMENTS

Determine the scope from the request:

## If a target component/file is given (or discoverable in this codebase)
1. Read the target file(s) first to understand the current markup, styling approach (CSS/SCSS, CSS-in-JS, Tailwind, styled-components, etc.), and any existing animation conventions in the codebase (check for a motion library already in use — Framer Motion, GSAP, React Spring, CSS transitions/keyframes — and match it rather than introducing a new one).
2. Implement the animation using that existing stack. Prefer CSS transitions/keyframes for simple state changes (hover, enter/exit, toggles) and reach for a JS animation library only if the codebase already depends on one or the interaction genuinely needs it (physics-based motion, gesture-driven, complex sequencing).
3. Respect `prefers-reduced-motion` — wrap non-essential motion so it degrades gracefully for users who have it set.
4. Keep durations/easing consistent with any existing design tokens in the repo (check for existing transition/easing variables before inventing new ones).

## If no target is given / it's a fresh UI element
Ask what element or interaction should be animated, unless it's clear from context (e.g. right after building a component together in this conversation).

## Scope discipline
Animate only what was asked — don't add motion to unrelated elements "while you're in there."
