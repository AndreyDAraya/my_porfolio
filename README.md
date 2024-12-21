# My Portfolio Website 🚀

Welcome to my personal portfolio website repository! This modern and responsive portfolio is built using Astro.js and styled with Tailwind CSS.

## 🛠️ Technologies Used

- [Astro.js](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- TypeScript - For type-safe JavaScript development
- Particle.js - For interactive background effects

## 📁 Project Structure

```text
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable components
│   │   ├── Experience.astro
│   │   ├── GitHubStats.astro
│   │   └── ParticleBackground.astro
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Application pages
│   │   └── index.astro
│   └── scripts/        # JavaScript utilities
│       └── reveal.js
└── package.json
```

## ✨ Features

- Responsive design that works on all devices
- Interactive particle background for visual appeal
- GitHub statistics integration
- Experience showcase section
- Smooth reveal animations
- TypeScript for enhanced development experience

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## 🧞 Available Commands

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🔧 Configuration

- `astro.config.mjs` - Configure Astro build settings
- `tailwind.config.mjs` - Customize Tailwind CSS
- `tsconfig.json` - TypeScript configuration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
