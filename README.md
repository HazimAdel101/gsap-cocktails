# JSM GSAP Landing Page

A modern, animated landing page built with React, TypeScript, and GSAP animations.

## 🚀 Technologies Used

### Core Framework
- **React** (v19.2.0) - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** (v7.2.4) - Build tool and development server

### Styling & UI
- **Tailwind CSS** (v4.1.17) - Utility-first CSS framework
- **React Responsive** (v10.0.1) - Responsive design utilities

### Animation
- **GSAP** (v3.13.0) - Professional animation library
- **@gsap/react** (v2.1.2) - React integration for GSAP

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (v10.22.0 or higher) - Package manager

If you don't have pnpm installed, you can install it globally:
```bash
npm install -g pnpm
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jsm_gsap_landing
```

2. Install dependencies:
```bash
pnpm install
```

## 🏃 Running the Project

### Development Mode

Start the development server with hot module replacement (HMR):
```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

Create an optimized production build:
```bash
pnpm build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
pnpm preview
```

### Linting

Run ESLint to check for code issues:
```bash
pnpm lint
```

## 📁 Project Structure

```
jsm_gsap_landing/
├── public/           # Static assets (images, fonts, videos)
├── src/
│   ├── Components/   # React components
│   ├── Constants/    # Constants and configuration
│   ├── app.tsx       # Main app component
│   ├── main.tsx      # Application entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── vite.config.ts    # Vite configuration
└── package.json      # Dependencies and scripts
```

## 🎨 Features

- Smooth GSAP animations
- Responsive design
- Modern UI with Tailwind CSS
- Type-safe development with TypeScript
- Fast development experience with Vite

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
