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

## 🔧 Dynamic Title and Meta Tag Management

This project implements modern dynamic title and meta tag management using a powerful custom React hook. The `useDocumentMeta` hook provides comprehensive SEO optimization capabilities for your React applications.

### 🚀 Key Features

- **Dynamic Title Management**: Update page titles based on route or component state
- **Meta Tag Control**: Manage description, keywords, and social media tags
- **SEO Optimization**: Improve search engine visibility with proper meta tags
- **Social Media Ready**: Automatic Open Graph and Twitter Card support
- **TypeScript Support**: Full type safety and IntelliSense
- **Favicon Management**: Dynamic favicon updates per page
- **Template System**: Flexible title formatting options

### 📚 Hook Documentation

#### useDocumentMeta (Complete Solution)

The main hook that handles all document meta management:

```typescript
import { useDocumentMeta } from "@/hooks/useDocumentTitle";

const MyPage: React.FC = () => {
	useDocumentMeta({
		title: "Product Details",
		description:
			"Explore our amazing product with detailed specifications and customer reviews.",
		keywords: ["product", "ecommerce", "reviews", "specifications"],
		favicon: "/icons/product-favicon.ico",
		image: "/images/product-social-share.jpg",
		siteName: "My E-commerce Store",
		separator: "•",
	});

	return <div>Your page content...</div>;
};
```

#### Available Options

| Option        | Type       | Required | Description              | Example                            |
| ------------- | ---------- | -------- | ------------------------ | ---------------------------------- | --- |
| `title`       | `string`   | ✅       | Page title               | `"Product Details"`                |
| `description` | `string`   | ❌       | Meta description for SEO | `"Explore our amazing product..."` |
| `keywords`    | `string[]` | ❌       | SEO keywords array       | `["product", "ecommerce"]`         |
| `favicon`     | `string`   | ❌       | Path to favicon          | `"/icons/favicon.ico"`             |
| `image`       | `string`   | ❌       | Social sharing image     | `"/images/og-image.jpg"`           |
| `siteName`    | `string`   | ❌       | Site/app name            | `"My App"`                         |
| `separator`   | `string`   | ❌       | Title separator          | `"•"` or `"                        | "`  |

#### Template System

The template uses `%s` as a placeholder for the page title:

### 🎯 Common Usage Patterns

#### 1. Basic Page Setup

```typescript
useDocumentMeta({
	title: "Home",
	siteName: "My React App",
	separator: "|",
});
// Result: "Home | My React App"
```

#### 2. SEO Optimized Page

```typescript
useDocumentMeta({
	title: "React Development Services",
	description:
		"Professional React development services with modern tools and best practices. Contact us for your next project.",
	keywords: ["React", "development", "services", "TypeScript", "modern web"],
	siteName: "DevCorp Solutions",
	separator: "•",
});
```

#### 3. Dynamic Content Pages

```typescript
const ProductPage: React.FC = () => {
	const { product } = useParams();

	useDocumentMeta({
		title: `${product?.name} - Product Details`,
		description: product?.description,
		keywords: product?.tags,
		image: product?.featuredImage,
		siteName: "E-Commerce Store",
	});

	return <div>Product details...</div>;
};
```

#### 4. Blog/Article Pages

```typescript
const BlogPost: React.FC = () => {
	const { post } = useLoaderData();

	useDocumentMeta({
		title: post.title,
		description: post.excerpt,
		keywords: [...post.tags, "blog", "article"],
		image: post.featuredImage,
		siteName: "Tech Blog",
		separator: "→",
	});

	return <article>...</article>;
};
```

### 🔍 SEO Best Practices

#### Title Optimization

- Keep titles between **50-60 characters**
- Include primary keywords near the beginning
- Make titles descriptive and unique per page
- Use consistent separators across your site

#### Meta Description

- Aim for **150-160 characters**
- Write compelling, actionable descriptions
- Include target keywords naturally
- Each page should have a unique description

#### Keywords

- Use **3-8 relevant keywords** per page
- Include both short-tail and long-tail keywords
- Avoid keyword stuffing
- Research competitor keywords

#### Social Media Optimization

- Use high-quality images (1200x630px for Open Graph)
- Ensure images are optimized for web
- Test social sharing previews
- Include branded elements in social images

### 🧪 Live Examples

Visit the **Example Components** page in the application to see the hook in action with:

- ✅ Live meta tag updates
- ✅ Interactive code examples
- ✅ TypeScript integration
- ✅ Best practices guide
- ✅ Real-time preview of changes

Navigate to `/example-components` to explore comprehensive usage examples and see how the hook dynamically updates your page's meta information.

### ⚙️ TypeScript Integration

The hook is fully typed for enhanced developer experience:

```typescript
interface DocumentMetaOptions {
	title: string;
	description?: string;
	keywords?: string[];
	favicon?: string;
	image?: string;
	siteName?: string;
	separator?: string;
	template?: string;
}

// Full type safety and IntelliSense support
const useDocumentMeta: (options: DocumentMetaOptions) => void;
```

### 🚨 Important Notes

- The hook uses `useEffect` to update the document head
- Meta tags are updated on component mount and when dependencies change
- Previous meta tags are automatically cleaned up
- Works seamlessly with React Router for SPA navigation
- Compatible with SSR frameworks (Next.js, Remix, etc.)

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
