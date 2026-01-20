# 📚 Vocabulary Trainer

A modern, responsive web application designed to help students master English vocabulary through interactive learning. Built with cutting-edge web technologies for an optimal learning experience on both mobile and desktop devices.

## ✨ Features

- **📱 Responsive Design**: Fully optimized for mobile phones, tablets, and desktop computers
- **🎨 Modern UI**: Clean, intuitive interface built with Tailwind CSS
- **📝 Markdown-Based Content**: Easy-to-manage vocabulary stored in markdown files
- **🎯 Categorized Learning**: Words organized by type (verbs, adjectives, nouns, adverbs)
- **📊 Difficulty Levels**: Beginner, intermediate, and advanced classifications
- **⚡ Fast Performance**: Static site generation with Astro for lightning-fast load times
- **🔍 Type Safety**: Full TypeScript support for reliable code

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tobiaswittenburg/ATSSummitDemo1.git
cd ATSSummitDemo1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 🏗️ Project Structure

```
/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # Reusable Astro components
│   │   └── VocabularyCard.astro
│   ├── content/         # Content collections
│   │   ├── config.ts    # Content schema definitions
│   │   └── vocabulary/  # Markdown vocabulary files
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   └── pages/           # Route pages
│       └── index.astro
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 📝 Adding New Vocabulary

To add new vocabulary words, create a markdown file in `src/content/vocabulary/`:

```markdown
---
word: "example"
translation: "Beispiel"
category: "nouns"
difficulty: "beginner"
---

# Example
This is an example sentence.

# Notes
Additional notes about the word.
```

### Vocabulary File Format

- **word**: The English word to learn (required)
- **translation**: German translation (required)
- **category**: Word type - `verbs`, `adjectives`, `nouns`, or `adverbs` (optional)
- **difficulty**: Learning level - `beginner`, `intermediate`, or `advanced` (optional)
- **Example section**: Provide a sentence using the word
- **Notes section**: Additional context or usage tips

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. Customize colors, fonts, and other design elements in `tailwind.config.mjs`.

### Layout

Modify the main layout in `src/layouts/Layout.astro` to change the overall page structure, header, footer, or meta tags.

### Components

Add or modify components in `src/components/` to extend functionality or change the appearance of vocabulary cards.

## 🌐 Deployment

The application can be deployed to various hosting platforms:

### Vercel
```bash
npm run build
# Deploy the ./dist folder
```

### Netlify
```bash
npm run build
# Deploy the ./dist folder
```

### GitHub Pages
Configure in `astro.config.mjs` and deploy via GitHub Actions.

## 📚 Tech Stack

- **[Astro](https://astro.build/)** - Modern static site generator
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Markdown** - Content management

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📖 Learning Tips

- **Practice Daily**: Review vocabulary cards for 10-15 minutes each day
- **Use Examples**: Read the example sentences to understand word usage in context
- **Categorize**: Focus on one category at a time (verbs, adjectives, etc.)
- **Progressive Learning**: Start with beginner words and progress to advanced

## 📄 License

This project is licensed under the ISC License.

## 🎓 Educational Purpose

This vocabulary trainer was created to support English language learning for students. The application is designed to make vocabulary acquisition more engaging and accessible through modern web technologies.

---

**Happy Learning! 🚀📚**

For questions or suggestions, please open an issue on GitHub.
