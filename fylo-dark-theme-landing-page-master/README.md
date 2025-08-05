# Fylo Dark Theme Landing Page - Frontend Mentor Challenge

This is my implementation of the **Fylo Dark Theme Landing Page** from [Frontend Mentor](https://www.frontendmentor.io).  
The challenge was to build the landing page as close to the design as possible, with responsive behavior, reusable styles, and clean code.

---

## 🚀 Live Demo

[Live Site URL](#) <!-- Replace with your deployment link -->

---

## 📌 Features

- **Pixel-perfect layout** matching the Frontend Mentor design.
- **Fully responsive** for desktop, tablet, and mobile.
- **Optimized typography** with `clamp()` for scalable font sizes.
- **Design tokens** for consistent colors, typography, and spacing.
- **SCSS architecture** using mixins, variables, and partials.
- **BEM methodology** for scalable and maintainable class naming.
- **Flexbox & CSS Grid** for modern and flexible layouts.
- **Custom background images** that adapt at different breakpoints.
- **Accessible buttons and links** with hover/focus states.

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure following accessibility best practices.
- **SCSS** – Modular styles with:
  - Variables for colors, fonts, and spacing.
  - Mixins for flexbox, grid, and media queries.
  - Responsive utilities for breakpoints (`@include respond()`).
- **BEM Naming** – Clear, reusable, and scalable CSS classes.
- **Flexbox & Grid** – For layout management.
- **Design Tokens** – Colors, typography, and gradients stored in a dedicated file.
- **Responsive Images** – Different assets for desktop and mobile.

---

## 📂 Project Structure

├── index.html
├── scss
│ ├── abstracts
│ │ ├── \_variables.scss // Colors, fonts, tokens
│ │ ├── \_mixins.scss // Flexbox, media queries, utilities
│ ├── base
│ │ ├── \_reset.scss // CSS reset
│ │ ├── \_typography.scss // Font styles
│ ├── components
│ │ ├── \_navbar.scss
│ │ ├── \_hero.scss
│ │ ├── \_features.scss
│ │ ├── \_testimonials.scss
│ │ ├── \_footer.scss
│ ├── main.scss // Imports all partials
├── images
├── README.md

## 📱 Responsive Design

- **Desktop-first** approach with mobile adjustments via media queries.
- **Breakpoints** managed with `@include respond(phone)`, `@include respond(tab-port)`, and `@include respond(tab-land)`.
- **Layout shifts** from 2-column grids to single-column stacks on mobile.
- **Adaptive background images** for desktop and mobile versions.

## 🎯 Key Learnings

- Structuring SCSS projects with **BEM + modular partials**.
- Using **CSS `clamp()`** for fluid typography.
- Managing **background images** that change at breakpoints.
- Keeping **form elements responsive** with flexible layouts.
- Applying **design tokens** to maintain a consistent theme.

## 📌 Credits

- **Challenge** by [Frontend Mentor](https://www.frontendmentor.io)
- **Design** provided in the challenge assets
- **Development** by Me Louai Khodary💻
