# GitHub Copilot Instructions for Vocabulary Trainer

This document provides guidance for GitHub Copilot when working on the Vocabulary Trainer project. Follow these instructions to maintain code quality, mobile-friendliness, and testability.

## Project Overview

This is a vocabulary trainer web application built with Astro, TypeScript, and Tailwind CSS. It helps students learn English vocabulary through interactive cards with translations, examples, and categorization.

## Tech Stack

- **Astro 5.x** - Static site generator with content collections
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Markdown** - Content management for vocabulary entries

## Code Quality Standards

### TypeScript Usage

- **Always use TypeScript** for all new files (.ts, .astro with type annotations)
- **Define interfaces** for component props using the `interface Props` pattern in Astro components
- **Use Zod schemas** for content collections (see `src/content/config.ts`)
- **Enable strict type checking** - avoid `any` types; use proper type annotations
- **Import types explicitly** when needed (e.g., `import type { CollectionEntry } from 'astro:content'`)

### Type Safety Best Practices

```typescript
// ✅ Good: Proper interface definition
interface Props {
  word: string;
  translation: string;
  example?: string;
  category?: 'verbs' | 'adjectives' | 'nouns' | 'adverbs';
}

// ❌ Bad: Untyped props
const props = Astro.props;
```

### Content Collections

- **All vocabulary content** must be stored in `src/content/vocabulary/` as markdown files
- **Follow the schema** defined in `src/content/config.ts`:
  - `word` (string, required)
  - `translation` (string, required)
  - `category` (enum: verbs/adjectives/nouns/adverbs, optional)
  - `difficulty` (enum: beginner/intermediate/advanced, optional)
- **Use frontmatter** for structured data, markdown body for examples and notes

## Mobile-Friendliness Requirements

### Responsive Design

- **Mobile-first approach** - Design for mobile screens first, then enhance for larger screens
- **Use Tailwind responsive prefixes** (`sm:`, `md:`, `lg:`, `xl:`) for breakpoint-specific styles
- **Test on multiple viewport sizes** - minimum 320px (mobile) to 1920px (desktop)
- **Touch-friendly targets** - ensure interactive elements are at least 44x44px

### Tailwind CSS Best Practices

```html
<!-- ✅ Good: Responsive design with mobile-first approach -->
<div class="p-4 md:p-6 lg:p-8">
  <h2 class="text-xl md:text-2xl lg:text-3xl">Title</h2>
</div>

<!-- ❌ Bad: Desktop-only sizing -->
<div class="p-8">
  <h2 class="text-3xl">Title</h2>
</div>
```

### Performance Considerations

- **Optimize images** - use appropriate formats and sizes
- **Minimize JavaScript** - leverage Astro's static generation
- **Use semantic HTML** - improves accessibility and SEO
- **Lazy load content** when appropriate for large lists

## Component Structure

### Astro Components

- **Create reusable components** in `src/components/`
- **Define clear prop interfaces** at the top of component files
- **Use semantic HTML elements** (header, main, section, article, etc.)
- **Apply proper ARIA labels** for accessibility
- **Keep components focused** - single responsibility principle

### Component Example Template

```astro
---
interface Props {
  title: string;
  description?: string;
  isActive?: boolean;
}

const { title, description, isActive = false } = Astro.props;
---

<article class="component-wrapper" aria-label={title}>
  <h3 class="text-xl font-semibold">{title}</h3>
  {description && <p class="text-gray-600">{description}</p>}
</article>

<style>
  /* Component-specific styles if needed */
</style>
```

## Testability Guidelines

### Write Testable Code

- **Avoid tight coupling** - components should be independent and reusable
- **Use pure functions** where possible for data transformations
- **Separate concerns** - keep business logic separate from presentation
- **Make components mockable** - avoid hard-coded dependencies

### Component Testing Considerations

- **Props-driven components** - behavior should be determined by props
- **Predictable rendering** - same props should always produce same output
- **Clear data flow** - data should flow down through props
- **Document edge cases** - handle empty states, loading states, error states

### Testing Structure

```typescript
// Example of testable utility function
import type { CollectionEntry } from 'astro:content';

export function categorizeWords(
  words: CollectionEntry<'vocabulary'>[],
  category: string
) {
  return words.filter(word => word.data.category === category);
}

// Example of testable component logic (returns Tailwind classes)
export function getDifficultyColor(
  difficulty: 'beginner' | 'intermediate' | 'advanced' | undefined
): string {
  if (!difficulty) return 'bg-gray-100 text-gray-800';
  const colors: Record<'beginner' | 'intermediate' | 'advanced', string> = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };
  return colors[difficulty];
}
```

## File Organization

### Directory Structure

```
src/
├── components/       # Reusable Astro components
│   └── VocabularyCard.astro
├── content/          # Content collections
│   ├── config.ts     # Zod schemas
│   └── vocabulary/   # Markdown vocabulary files
├── layouts/          # Page layouts
│   └── Layout.astro
└── pages/            # Route pages (file-based routing)
    └── index.astro
```

### Naming Conventions

- **Components**: PascalCase (e.g., `VocabularyCard.astro`)
- **Files**: kebab-case for utilities (e.g., `word-helpers.ts`)
- **Variables**: camelCase (e.g., `wordList`, `categoryFilter`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_WORDS_PER_PAGE`)
- **Types/Interfaces**: PascalCase (e.g., `VocabularyWord`, `CardProps`)

## Styling Guidelines

### Tailwind CSS

- **Use utility classes** instead of custom CSS when possible
- **Create component classes** only for complex, repeated patterns
- **Follow spacing scale** - use Tailwind's built-in spacing (p-4, m-2, etc.)
- **Consistent color palette** - stick to indigo for primary, gray for text
- **Use hover and focus states** for interactive elements

### Accessibility (a11y)

- **Use semantic HTML** elements (`<button>` not `<div onclick>`)
- **Add ARIA labels** where needed for screen readers
- **Ensure color contrast** meets WCAG AA standards (4.5:1 for text)
- **Support keyboard navigation** - all interactive elements must be keyboard accessible
- **Provide alt text** for images
- **Use proper heading hierarchy** (h1 → h2 → h3)

## Build and Development

### Scripts

- `npm run dev` - Development server (port 4321)
- `npm run build` - Production build (includes type checking)
- `npm run preview` - Preview production build
- `astro check` - Type check without building

### Build Process

- **Always run `astro check`** before committing to catch type errors
- **Test builds locally** with `npm run build` before deploying
- **Check build output** in `dist/` folder for optimization

## Content Guidelines

### Vocabulary Entries

- **Use clear, simple English** for examples
- **Provide context** in the notes section
- **Categorize appropriately** - verbs, adjectives, nouns, or adverbs
- **Set difficulty levels** - beginner, intermediate, or advanced
- **Include practical examples** that show real-world usage

### Markdown Format

```markdown
---
word: "example"
translation: "Beispiel"
category: "nouns"
difficulty: "beginner"
---

# Example Sentence
This is how you use the word in a sentence.

# Usage Notes
Additional context or tips for using this word correctly.
```

## Error Handling

- **Validate content schema** - Astro will error on invalid frontmatter
- **Handle missing data gracefully** - use optional chaining and default values
- **Provide fallbacks** for optional fields
- **Log errors meaningfully** during development

## Performance Optimization

- **Static generation** - leverage Astro's SSG for fast page loads
- **Minimize bundle size** - avoid unnecessary dependencies
- **Use content collections** efficiently - query only needed data
- **Optimize images** - use modern formats (WebP, AVIF)
- **Implement pagination** for large vocabulary lists

## Code Review Checklist

Before submitting code, ensure:

- [ ] TypeScript types are properly defined
- [ ] Component works on mobile (320px) and desktop (1920px)
- [ ] Code follows the established patterns
- [ ] Accessibility standards are met (WCAG AA)
- [ ] No console errors or warnings
- [ ] Build succeeds (`npm run build`)
- [ ] Type checking passes (`astro check`)
- [ ] Components are reusable and testable
- [ ] Documentation is updated if needed

## Common Patterns

### Fetching Vocabulary Content

```typescript
import { getCollection } from 'astro:content';

const allVocabulary = await getCollection('vocabulary');
const beginnerWords = await getCollection('vocabulary', ({ data }) => {
  return data.difficulty === 'beginner';
});
```

### Responsive Card Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <!-- Cards go here -->
</div>
```

## Additional Notes

- **Keep dependencies minimal** - only add packages when absolutely necessary
- **Document breaking changes** in commit messages
- **Follow conventional commits** format when possible
- **Prioritize user experience** - fast, responsive, accessible
- **Mobile-first mindset** - always consider mobile users first
