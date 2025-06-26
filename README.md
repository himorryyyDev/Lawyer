## Project description

This project is a modern adaptive website for a law firm, developed using React.js and modern front-end technologies. The site includes all the necessary sections for presenting legal services:

- Hero section (main banner)
- List of company services
- About the company section
- Gallery of the company's lawyers
- Customer reviews section
- Company news section

## Key features of the implementation

### Code architecture and organization
- **Modular structure**: Components, styles, and logic are organized on a modular basis for ease of maintenance and scalability
- **Clean and readable code**: Following React development best practices
- **Optimized build**: Using Vite + SWC for rapid development and production builds

### Technology stack
- **React 18**: Functional components, hooks (useState, useEffect, useRef, etc.)
- **Styling**: Vanilla CSS with CSS Modules for style isolation
- **Responsiveness**: Full desktop-first layout using:
  - CSS Grid for complex layouts
  - Flexbox for components
  - Media queries for all device types
- **Interactivity**:
  - Modal windows (controlled via React portals)
  - Dynamic lists rendered via `map()`

## How to run the project locally

To see the site in action, follow these steps:

1. Make sure you have Node.js (version 16 or higher) installed
2. Clone the repository (or unzip the project archive)
3. Open a terminal in the project root folder and run:

```bash
npm install
npm run dev
```

4. Open your browser and go to the address that appears in the terminal (usually `http://localhost:5173`)

For production builds:

```bash
npm run build
npm run preview
```
