# GetFly WebPage - React Native Web App

## Project Overview
A React Native web application showcasing GetFly's services with interactive metallic-themed UI, internationalization, and dynamic content navigation.

## Key Features
- **Metallic Theme System**: Custom theming with realistic metallic gradients, shadows, and glow effects
- **Interactive Cards**: Hover/press states with visual feedback and content switching
- **Internationalization**: English/Swedish language support with flag switching
- **Responsive Design**: Works across web and mobile platforms
- **Dynamic Navigation**: Card-based navigation with persistent selection states

## Tech Stack
- React Native for Web
- TypeScript
- React Native Paper (Material Design 3)
- Expo Router
- Linear Gradients
- Custom theme system

## Development Commands

### Start Development Server
```bash
npm run web
# Starts on http://localhost:8081 (or 8082 if 8081 is busy)
```

### Build Commands
```bash
npm run build
```

### Linting/Type Checking
```bash
npm run lint
npm run typecheck
```

## Project Structure

### Core Files
- `app/index.tsx` - Main application entry point with Card components and navigation
- `assets/theme/theme.tsx` - Metallic theme system with colors, gradients, and effects
- `assets/language/language.ts` - Internationalization system (English/Swedish)

### Key Components
- `Card` - Reusable card component with metallic effects, variants, and interaction states
- `Main` - Primary app layout with navigation and theme switching
- `AboutCard`, `ProjectCard`, `PortfolioCard` - Content-specific card layouts

## Theme System

### Variants
- `default` - Standard metallic appearance
- `active` - Highlighted state with glow effects
- `success` - Success state styling
- `error` - Error state with red metallic gradient
- `disabled` - Grayed out appearance

### Effects
- `metallic={true}` - Adds shadows, borders, and metallic styling
- `gradient={true}` - Applies dramatic 7-color metallic gradients
- `glow={true}` - Adds glowing shadow effects

## Navigation System
- Hover over cards to preview content
- Click cards to pin content (stays visible until another card is selected)
- Interactive states with visual feedback
- Dynamic page switching based on selection

## Language Support
- English (🇬🇧) / Swedish (🇸🇪) toggle
- Comprehensive translations for all content
- Unicode flag emojis for language indicators

## Development Notes
- Uses Metro bundler for web compilation
- Custom metallic gradients create realistic metal surface effects
- TypeScript strict mode enabled
- React Compiler enabled for optimization