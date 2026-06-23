# Premium UX/UI Book Template

The ultimate template for authoring high-end, award-winning technical books and masterclasses. Built from the ground up with Astro, MDX, and pure Vanilla CSS.

## 🚀 Features

- **Blazing Fast**: Zero-JS baseline layout. 100% Vanilla CSS.
- **Premium Aesthetics**: Curated typography using Inter, low-contrast dark mode, and meticulously calculated line-heights for maximum reading endurance.
- **Micro-interactions**: Subtle spring animations and hover states that make the UI feel alive.
- **MDX Support**: Author your content in Markdown/MDX with auto-styled components like Warnings, Tips, and interactive Code Blocks.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/`     |

## 📖 Content Authoring

All chapters are stored in `src/content/chapters/`.
To add a new chapter:

1. Create a new `.mdx` file.
2. Register it in the `chapters` array inside `src/pages/[slug].astro` and `src/layouts/BookLayout.astro` for sidebar navigation.

## 🎨 Theme & Styling

The core design system is located in `src/styles/global.css`. You can customize the entire color palette by editing the `:root` CSS variables.
