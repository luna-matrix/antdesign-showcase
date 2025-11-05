# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript showcase application demonstrating Ant Design UI components. The project uses Create React App with routing via React Router DOM and follows a standard SPA architecture with a sidebar navigation layout.

## Development Commands

```bash
# Start development server (default port 3000)
npm start

# Start on specific port (e.g., 3499)
PORT=3499 npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (one-way operation)
npm run eject
```

## Architecture Overview

### Application Structure
- **Main Layout** (`src/App.tsx`): Ant Design Layout with header, sidebar navigation, and content area
- **Routing**: Client-side routing using React Router DOM with four main routes
- **Pages**: Located in `src/pages/` directory, each demonstrating different aspects of Ant Design
- **Styling**: Combination of Ant Design theming and custom CSS in `src/App.css`

### Key Routes
- `/` and `/dashboard`: Dashboard with statistics cards and activity feeds
- `/components`: Tabbed showcase of Ant Design components organized by category
- `/forms`: Form demonstrations including multi-step wizard with validation

### Component Patterns
- Functional components using React.FC type
- Local state management with useState hooks
- Ant Design Form components for form handling and validation
- Responsive design using Ant Design's Row/Col grid system

### Styling Architecture
- Custom Ant Design theme overrides in `src/App.css`
- Mobile-first responsive design with breakpoint at 768px
- Custom animations, hover effects, and transitions
- Component-specific CSS enhancements for cards, buttons, and forms

### TypeScript Configuration
- Strict mode enabled for type safety
- Functional components with proper prop typing
- Interface definitions for component props
- Event handling with correct React types

## Code Organization

```
src/
├── components/          # Available for reusable components (currently empty)
├── pages/              # Route-level components
│   ├── Dashboard.tsx   # Statistics, metrics, activity feeds
│   ├── Components.tsx  # Component showcase with categorized tabs
│   └── Forms.tsx       # Form demos and multi-step wizard
├── App.tsx             # Main app with routing and layout
├── App.css             # Custom styles and Ant Design overrides
└── index.tsx           # Application entry point
```

## Dependencies

### Core
- React 19.2.0 with TypeScript 4.9.5
- Ant Design 5.28.0 for UI components
- React Router DOM 7.9.5 for routing

### Key Libraries
- @ant-design/icons for iconography
- Create React App 5.0.1 for build tooling

## Development Notes

- Uses Create React App's webpack configuration (hidden unless ejected)
- Development server runs with hot reload
- Production builds are optimized and ready for deployment
- No global state management - uses local component state
- No API integration currently implemented
- Basic testing setup with Jest and React Testing Library

## Common Patterns

- Use Ant Design's Layout components for consistent page structure
- Implement responsive design with Row/Col grid system
- Follow functional component patterns with TypeScript
- Use Ant Design Form components for form handling and validation
- Leverage custom CSS overrides for enhanced styling while maintaining Ant Design consistency