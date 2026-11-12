# 🎨 Creative Frame

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-12.0.7-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.1.6-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Creative Frame** is a modern, high-performance web development and creative design portfolio studio website built with **React**, **Next.js**, **Tailwind CSS**, and **TypeScript**.

[Explore Live Demo](https://creativeframe.io/) · [Get In Touch](mailto:contact@creativeframe.io) · [View Showcase](#-features)

</div>

---

## 🌟 Overview

**Creative Frame** showcases digital products, creative visual designs, and front-end craftsmanship. Designed with vibrant aesthetics, dynamic micro-animations, hand-drawn vector doodles, and a sleek dark theme, the website offers visitors an engaging and interactive experience.

---

## ✨ Features

- **⚡ Modern Tech Stack**: Powered by Next.js with server-side rendering and static site generation for ultra-fast load times.
- **🎨 Rich Visual Aesthetics**: Curated neon accent palette (`#00c7ff`, `#ff4b72`), smooth gradients, and playful hand-drawn vector doodles.
- **✨ Interactive Micro-Animations**:
  - Animated letter hover effects in the navigation header.
  - Interactive rotate-and-scale brand mark.
  - Floating and staggered animated doodles across the hero section.
- **📱 Fully Responsive Design**: Seamless layout scaling from mobile viewports to ultra-wide desktop monitors, including a smooth animated mobile drawer menu.
- **💼 Projects Portfolio**: Filterable project gallery with detailed tags, descriptions, live demo links, and GitHub repositories.
- **🖌️ Creative Designs Showcase**: Dedicated visual design gallery showcasing UI/UX mockups, brand assets, and creative explorations.
- **🛠️ Tech Skills Matrix**: Categorized tech stack grid displaying core languages, frameworks, libraries, and design software.
- **💬 Testimonials Slider / Grid**: Client testimonials and social proof cards.
- **📬 Contact Integration**: Direct email call-to-action (`contact@creativeframe.io`) and connected social platforms.
- **🔍 SEO & Social Previews**: Open Graph metadata, Twitter Cards, dynamic page titles, and web app manifest configurations.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js](https://nextjs.org/)** | React Framework for SSR & SSG |
| **[React](https://reactjs.org/)** | Declarative Component-Based UI |
| **[TypeScript](https://www.typescriptlang.org/)** | Static Type Safety and Developer Ergonomics |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-First Responsive Styling |
| **[React Scroll](https://www.npmjs.com/package/react-scroll)** | Smooth Scrolling Animations |
| **[PostCSS / Autoprefixer](https://postcss.org/)** | CSS Post-Processing and Vendor Prefixing |

---

## 🚀 Getting Started

Follow these steps to run the **Creative Frame** project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14.x, v16.x, or later recommended)
- **Yarn** or **npm** package manager

### 1. Clone the Repository

```bash
git clone https://github.com/creativeframe/creative-frame.git
cd creative-frame
```

### 2. Install Dependencies

Using Yarn (recommended):
```bash
yarn install
```

Or using npm:
```bash
npm install
```

### 3. Start the Development Server

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application. The page will reload automatically as you edit files.

### 4. Build for Production

To create an optimized production build:

```bash
yarn build
# or
npm run build
```

To preview the production build locally:

```bash
yarn start
# or
npm run start
```

---

## 📁 Project Structure

```text
Creative-Frame/
├── components/          # Reusable UI components
│   ├── designs/         # Design showcase components (Designs, Heading, More)
│   ├── global/          # Global layout components (Navbar, MobileNavbar, Footer)
│   ├── home/            # Home sections (Hero, Projects, Skills, Testimonials, CTA)
│   ├── projects/        # Project showcase components (Projects, Heading, More)
│   └── utility/         # Utility wrappers (Page layout, SEO Head tags)
├── data/                # Site configuration and content data
│   ├── content/         # Page-specific content (home, projects, designs)
│   └── global.ts        # Routes, social channels, contact details, support info
├── pages/               # Next.js file-system routing
│   ├── _app.tsx         # Next.js custom application wrapper
│   ├── _document.tsx    # Custom HTML Document with meta fonts and scripts
│   ├── index.tsx        # Homepage
│   ├── projects.tsx     # Projects gallery page
│   ├── designs.tsx      # Designs gallery page
│   └── 404.tsx          # Custom 404 error page
├── public/              # Static public assets
│   └── static/          # Favicons, icons, doodles, and logos
│       ├── doodles/     # Hand-drawn SVG hero & skill doodles
│       ├── icons/       # Social and tech stack SVG icons
│       └── logos/       # Brand mark and vector logos
├── styles/              # Global CSS stylesheets and Tailwind imports
├── tailwind.config.js   # Tailwind design tokens, colors, and animations
├── tsconfig.json        # TypeScript compiler configuration
└── package.json         # Project scripts and dependencies
```

---

## ⚙️ Customization

### Updating Contact & Social Details
Edit `data/global.ts` to adjust:
- Navigation routes
- Social profiles (GitHub, LinkedIn, Dribbble, IndieHackers)
- Primary contact email
- Community support links

### Updating Projects & Designs
- **Projects**: Edit `data/content/projects.ts` to add or update projects with titles, descriptions, preview images, tags, and links.
- **Designs**: Edit `data/content/designs.ts` to update creative design gallery items.

---

## 📬 Contact & Connect

- **Brand**: Creative Frame
- **Email**: [contact@creativeframe.io](mailto:contact@creativeframe.io)
- **Website**: [https://creativeframe.io](https://creativeframe.io)
- **GitHub**: [github.com/creativeframe](https://github.com/creativeframe)
- **LinkedIn**: [linkedin.com/company/creativeframe](https://www.linkedin.com/company/creativeframe)
- **Dribbble**: [dribbble.com/creativeframe](https://dribbble.com/creativeframe)

---

## 📄 License & Attribution

This project is licensed under the [MIT License](LICENSE).  
Created with pride by **Creative Frame**. All rights reserved.
