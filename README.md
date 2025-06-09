# React + TypeScript + Vite + Tailwind CSS + Shadcn/UI

A modern, high-performance React application built with cutting-edge web development technologies. This project demonstrates the integration of React 19, TypeScript, Vite 6, Tailwind CSS v4, and Shadcn/UI components to create a scalable and maintainable frontend application.

**🚀 Prepared as a ready-to-use development kit by Yilmaz Emre Pala**

## 🚀 Features

- ⚡ **Lightning Fast**: Powered by Vite 6 for instant development and optimized builds
- 🛡️ **Type Safety**: Full TypeScript support with strict mode enabled
- 🎨 **Modern UI**: Tailwind CSS v4 with Shadcn/UI components for beautiful interfaces
- 📱 **Responsive Design**: Mobile-first approach with responsive layouts
- 🔄 **Hot Module Replacement**: Instant updates during development
- 🧭 **Client-side Routing**: React Router v7 for seamless navigation
- 🎯 **Dynamic Title Management**: Modern page title handling with custom hooks
- 📦 **Optimized Bundle**: Tree-shaking and code splitting for minimal bundle size
- 🔍 **Code Quality**: ESLint with React-specific rules and TypeScript integration

## 🛠️ Tech Stack

### Core Dependencies

| Package        | Version | Purpose                                                        |
| -------------- | ------- | -------------------------------------------------------------- |
| **React**      | ^19.1.0 | Core library for building user interfaces with latest features |
| **React DOM**  | ^19.1.0 | React rendering for web browsers                               |
| **TypeScript** | ~5.8.3  | Static type checking and enhanced developer experience         |
| **Vite**       | ^6.3.5  | Next-generation build tool for faster development              |

### UI and Styling

| Package                  | Version  | Purpose                                              |
| ------------------------ | -------- | ---------------------------------------------------- |
| **Tailwind CSS**         | ^4.1.8   | Utility-first CSS framework for rapid UI development |
| **@tailwindcss/vite**    | ^4.1.8   | Vite plugin for Tailwind CSS v4 integration          |
| **Shadcn/UI Components** | -        | Pre-built accessible UI components                   |
| **@radix-ui/react-slot** | ^1.2.3   | Primitive for creating flexible component APIs       |
| **Lucide React**         | ^0.513.0 | Beautiful & consistent icon library                  |

### Routing and Navigation

| Package              | Version | Purpose                                    |
| -------------------- | ------- | ------------------------------------------ |
| **React Router DOM** | ^7.6.2  | Declarative routing for React applications |

### Utility Libraries

| Package                      | Version | Purpose                                                  |
| ---------------------------- | ------- | -------------------------------------------------------- |
| **clsx**                     | ^2.1.1  | Utility for constructing className strings conditionally |
| **tailwind-merge**           | ^3.3.0  | Merge Tailwind CSS classes without style conflicts       |
| **class-variance-authority** | ^0.7.1  | Create type-safe component variants                      |

### Development Dependencies

| Package                         | Version   | Purpose                                       |
| ------------------------------- | --------- | --------------------------------------------- |
| **@vitejs/plugin-react**        | ^4.4.1    | Official Vite plugin for React support        |
| **ESLint**                      | ^9.25.0   | JavaScript/TypeScript linter for code quality |
| **eslint-plugin-react-hooks**   | ^5.2.0    | ESLint rules for React Hooks                  |
| **eslint-plugin-react-refresh** | ^0.4.19   | ESLint plugin for React Fast Refresh          |
| **typescript-eslint**           | ^8.30.1   | TypeScript support for ESLint                 |
| **@types/react**                | ^19.1.2   | TypeScript definitions for React              |
| **@types/react-dom**            | ^19.1.2   | TypeScript definitions for React DOM          |
| **@types/node**                 | ^22.15.30 | TypeScript definitions for Node.js            |
| **tw-animate-css**              | ^1.3.4    | Tailwind CSS animations library               |
| **serve**                       | ^14.2.4   | Static file server for production builds      |

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   └── ui/              # Shadcn/UI components
├── hooks/               # Custom React hooks
│   └── useDocumentTitle.ts  # Dynamic title management
├── pages/               # Page components
│   ├── Home.tsx         # Home page with counter example
│   └── About.tsx        # About page with project info
├── lib/                 # Utility functions and configurations
├── assets/              # Static assets (images, icons, etc.)
├── App.tsx              # Main application component with routing
├── main.tsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── vite-env.d.ts        # Vite environment type definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-vite-ts-tailwind-shadcn-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build production-ready application       |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint to check code quality         |
| `npm run serve`   | Serve production build on port 3000      |

## 🎨 UI Components

This project uses **Shadcn/UI** components built on top of **Radix UI primitives**. To add new components:

```bash
npx shadcn@latest add [component-name]
```

### Available Components

- **Button**: Multiple variants (default, outline, destructive, secondary)
- **Icons**: Lucide React icons integrated throughout the app
- **Layout**: Responsive grid and flexbox utilities

## 🔧 Dynamic Title Management

This project implements modern dynamic title and meta tag management using custom React hooks:

### Basic Usage

```typescript
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const MyPage: React.FC = () => {
	useDocumentTitle("Page Title", "Site Name");
	return <div>...</div>;
};
```

### Dynamic Meta Tags with useDocumentMeta

```typescript
import { useDocumentTitleAdvanced } from "@/hooks/useDocumentTitle";

const MyPage: React.FC = () => {
	useDocumentTitleAdvanced({
		title: "Page Title",
		siteName: "My App",
		separator: "•",
		template: "%s - Custom Template",
	});
	return <div>...</div>;
};
```

### Advanced Usage

```typescript
import { useDocumentMeta } from "@/hooks/useDocumentTitle";

const MyPage: React.FC = () => {
	useDocumentMeta({
		title: "Page Title",
		description: "This is an example description.",
		keywords: ["React", "TypeScript", "SEO"],
		favicon: "/path/to/favicon.ico",
		image: "/path/to/site-image.png",
		siteName: "My App",
		separator: "|",
		template: "%s - Custom Template",
	});
	return <div>...</div>;
};
```

## 📱 Responsive Design

The application is built with a mobile-first approach using Tailwind CSS:

- **Mobile**: Base styles
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large Desktop**: `xl:` prefix (1280px+)

## 🔍 Code Quality

### ESLint Configuration

The project uses a comprehensive ESLint setup with:

- **React-specific rules** for hooks and JSX
- **TypeScript integration** for type checking
- **React Refresh** support for fast development
- **Modern JavaScript standards** (ES2022+)

### TypeScript Configuration

- **Strict mode enabled** for maximum type safety
- **Path mapping** configured for clean imports (`@/` prefix)
- **Modern target** (ES2022) for optimal performance

## 🚀 Performance Optimizations

### Vite Configuration

- **Fast HMR**: Instant updates during development
- **Optimized builds**: Tree-shaking and code splitting
- **Asset optimization**: Automatic image and font optimization
- **ES modules**: Modern JavaScript module system

### React Optimizations

- **React 19 features**: Latest React optimizations
- **Code splitting**: Automatic route-based splitting
- **Tree shaking**: Unused code elimination

## 🎯 Production Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory with:

- Minified JavaScript and CSS
- Optimized assets
- Gzipped files for faster loading
- Source maps for debugging

### Serve Production Build

```bash
npm run serve
```

Serves the production build locally on port 3000.

### Deployment Options

- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Static site hosting
- **Traditional hosting**: Upload `dist/` folder

#### SPA Routing Configuration for Production

Since this is a Single Page Application (SPA) with client-side routing, you need to configure your web server to serve `index.html` for all routes to prevent 404 errors when users navigate directly to routes like `/about`.

**For Apache Servers (.htaccess)**

```apache
# SPA Routing - Main configuration
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api/
RewriteRule . /index.html [L]

# Cache settings for better performance
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Gzip compression for faster loading
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
```

**For Netlify (\_redirects)**

```
# Netlify redirects for SPA routing
/*    /index.html   200

# API redirects (if needed)
/api/*  https://your-api-domain.com/api/:splat  200
```

**Why These Files Are Critical:**

1. **Without .htaccess or \_redirects**: When users navigate directly to `/about` or refresh the page, the server returns a 404 error because it's looking for a physical file that doesn't exist.

2. **With proper configuration**: The server redirects all non-file requests to `index.html`, allowing React Router to handle the routing client-side.

3. **Performance benefits**: The configuration includes caching rules and gzip compression for optimal loading speeds.

4. **Security enhancements**: Additional security headers protect against common web vulnerabilities.

**Setup Instructions:**

- **Apache hosting**: Place the `.htaccess` file in your `dist/` folder before uploading
- **Netlify**: Place the `_redirects` file in your `dist/` folder or use Netlify's dashboard
- **Other platforms**: Check platform-specific documentation for SPA routing configuration

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route to `src/App.tsx`
3. Implement dynamic title with `useDocumentTitle`

### Adding New Components

1. Create component in `src/components/`
2. Use Shadcn/UI components as base
3. Apply Tailwind CSS for styling

### Styling Customization

1. Modify `src/index.css` for global styles
2. Use Tailwind CSS utility classes
3. Create custom CSS variables for theming

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change port in `vite.config.ts`
2. **TypeScript errors**: Check `tsconfig.json` configuration
3. **Import errors**: Verify path mapping in `tsconfig.json`
4. **Build errors**: Check for unused imports and dependencies

### Development Tips

- Use TypeScript strictly for better error catching
- Leverage Vite's HMR for faster development
- Use React DevTools for debugging
- Follow React best practices and hooks rules

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the incredible build tool
- **Tailwind CSS** for the utility-first approach
- **Shadcn** for the beautiful UI components
- **Radix UI** for accessible primitives
