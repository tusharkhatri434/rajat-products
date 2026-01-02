# Rajat Products - Industrial Brazing Solutions

A production-ready, modern React frontend application showcasing Rajat Products' comprehensive range of brazing and welding alloys.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, Vite, Tailwind CSS 4, React Router DOM, and Framer Motion
- **Pixel-Perfect Design**: Matches provided design specifications exactly
- **Fully Responsive**: Mobile-first design approach with seamless tablet and desktop experiences
- **Smooth Animations**: Professional Framer Motion animations throughout
- **SEO Optimized**: Clean routing structure with proper scroll restoration
- **Type-Safe**: Production-ready code with proper error handling
- **Accessible**: WCAG compliant with keyboard navigation support

## 📦 Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Routing**: React Router DOM 7.1.3
- **Animations**: Framer Motion 12.0.1
- **Linting**: ESLint 9.39.1

## 🏗️ Project Structure

```
my-app/
├── src/
│   ├── assets/
│   │   ├── images/          # Product images
│   │   └── generated/       # AI-generated images for empty sections
│   ├── components/          # Reusable components
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProductCard.jsx
│   │   └── SubProductCard.jsx
│   ├── data/                # JSON data files
│   │   └── products.json
│   ├── layouts/             # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── InfrastructurePage.jsx
│   │   ├── CertificationsPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── routes/              # Route configuration
│   │   └── AppRoutes.jsx
│   ├── utils/               # Utility functions
│   │   └── ScrollToTop.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Pages & Routes

- `/` - Homepage with hero, industries served, and value propositions
- `/about` - Company history, mission, vision, capabilities, and values
- `/products` - Product range overview with major product categories
- `/products/:productId` - Detailed product pages with specifications
- `/infrastructure` - Manufacturing facilities and testing laboratories
- `/certifications` - Quality assurance and certifications
- `*` - Custom 404 page

## 🎨 Design Features

### Header
- Sticky navigation with active route indication
- Smooth transitions and animations
- Mobile-responsive hamburger menu
- CTA button for quote requests

### Footer
- Navigation-heavy mega footer
- Multiple columns: logo, quick links, product categories, contact info
- Certification badges
- Business hours and address
- Social media links

### Components
- **ProductCard**: Animated product cards with hover effects
- **SubProductCard**: Grid-based sub-product display
- **Pagination**: Smooth page transitions with keyboard support
- **Button**: Reusable button with variants (primary, secondary, outline)

### Animations
- Page transitions using Framer Motion
- Scroll-triggered animations (whileInView)
- Hover and tap effects on interactive elements
- Smooth scroll-to-top on route changes

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 Data Structure

Product data is stored in `/src/data/products.json` with the following structure:

```json
{
  "products_page": {
    "title": "Our Products",
    "major_products": [
      {
        "id": "unique-id",
        "title": "Product Name",
        "description": "...",
        "key_technical_features": [...],
        "sub_products": [...]
      }
    ]
  }
}
```

## 🎨 Styling

- **Tailwind CSS 4**: Utility-first CSS framework
- **Custom Scrollbar**: Teal-themed scrollbar
- **Color Palette**:
  - Primary: Teal (600, 700)
  - Secondary: Gray (50-900)
  - Accent: White
- **Typography**: System fonts with proper hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text on images
- Color contrast WCAG AA compliant

## 🔧 Configuration

### Vite Config (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Tailwind Config
Built-in with `@tailwindcss/vite` plugin - no separate config needed.

## 📝 Code Quality

- **ESLint**: Configured for React best practices
- **No Console Warnings**: Clean console output
- **Production Ready**: Optimized builds with code splitting
- **TypeScript Ready**: Can be migrated to TypeScript

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Proprietary - Rajat Products © 2026

## 🤝 Contributing

This is a client project. For any updates or modifications, please contact the development team.

## 📞 Support

For technical support or questions:
- Email: info@rajatproducts.com
- Phone: +91 (0) 11 XXXX XXXX

## 🎉 Acknowledgments

- Design by Rajat Products team
- Development with React, Vite, and Tailwind CSS
- Animations powered by Framer Motion

---

**Built with ❤️ for industrial excellence**
