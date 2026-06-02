# ✦ Maison Noir ✦
### Luxury Fine Dining & Sommelier Pairings Web Experience

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic_Layout-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Glassmorphism-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)](https://opensource.org/licenses/ISC)

> **Maison Noir** is an exquisite, highly immersive, gold-and-cream aesthetic web presence crafted for a fictional 3-Michelin-starred fine dining and sommelier pairs restaurant. The project showcases how classical French culinary heritage harmonizes with avant-garde gold-leaf artistry, presenting a visually stunning UI built with modern HTML5, fluid vanilla CSS3, and high-performance vanilla JavaScript.

---

## ⚜️ Visual Aesthetics & Design System

The application represents state-of-the-art responsive design, built upon a carefully curated luxury palette:

*   **Noir Darkness (`#0A0A0A` / HSL darks)**: Evoking the mystery and prestige of late-night Paris salons.
*   **Aura Gold (`#C5A880` / `#E5C494` gradients)**: Delicate, warm, reflective tones reflecting premium gold leaf plating.
*   **Silk Cream (`#F9F6F0` / Soft lights)**: For crisp contrast and comfortable readability.
*   **Typography**: Exquisite serif headers (`Cormorant Garamond`) paired with sleek sans-serif body textures (`Inter` / `Montserrat`) to establish an elite visual hierarchy.

---

## 🍽️ Key Features & Interactivity

The frontend includes sophisticated interactive components engineered in pure vanilla JavaScript for ultra-light page weights and zero dependency bloating:

| Feature | Technical Implementation | User Experience |
| :--- | :--- | :--- |
| **Luxury Navigation Overlay** | Event listeners, scroll thresholds, dynamic `scrolled` class toggles. | Smooth, blurred background glass navigation that adapts as users scroll down. |
| **Voyage Tasting Tabs** | Accessible tabbed system mapped via `aria-controls` & active pane animations. | Seamlessly switch between *Le Voyage (Signature)*, *La Terre (Vegetarian)*, and *La Mer (Seafood)* tasting lists. |
| **Interactive Culinary Cards** | Hover transforms, linear gradient overlays, and micro-interactions. | Users can meet the master chefs and sommelier with responsive, premium animation cards. |
| **Masonry Gallery & Lightbox** | Multi-column grid layout, dynamic DOM modal insertion, ESC close binds. | Stunning masonry display of curated plates that zoom into a premium full-screen Lightbox view. |
| **Luxury Reservation Engine** | Real-time email validation, loading spinner animation, state swap layout. | A seamless validation form that transitions into a dynamic confirmation slip when a table is secured. |
| **Scroll Reveal System** | High-performance `Intersection Observer` API, single-fire unobserve events. | Elegant fading and upward sliding entry motions as user scrolls through the restaurant's philosophy. |

---

## 🛠️ Technology Stack

*   **Markup**: Semantic HTML5 optimized for screen readers (using descriptive `aria` roles and structure).
*   **Styling**: Modern Vanilla CSS featuring custom property design tokens, responsive CSS Grid, Flexbox, custom keyframes, and smooth transition properties.
*   **Logic**: ES6+ Vanilla JavaScript. High-performance, modular, and dependency-free.
*   **Development & Bundling**: **Vite 5.x** providing hot module replacement (HMR) and tree-shaked production builds.

---

## 🚀 Getting Started

Experience the site locally by setting up the development environment in under a minute.

### Prerequisites

You will need **Node.js** (v18+) and **npm** installed on your system.

### Installation & Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/maison-noir-web.git
   cd maison-noir-web
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Local Development Server:**
   ```bash
   npm run dev
   ```
   *The site will be hosted locally at `http://localhost:5173/` with instant hot-reloading.*

4. **Compile for Production:**
   ```bash
   npm run build
   ```
   *This generates an optimized, minified bundle in the `/dist` directory ready for free deployments (Vercel, Netlify, GitHub Pages, etc.).*

---

## 📜 License

This project is licensed under the ISC License. Created by **Maison Noir Concierge**.
