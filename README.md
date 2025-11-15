# Sital - Professional Portfolio

<<<<<<< HEAD
A modern, responsive, and feature-rich personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## 🎯 Overview

Sital is a showcase portfolio designed to present professional experience, skills, projects, education, and contact information in a sleek and interactive manner. The application features smooth animations, a beautiful UI with Radix UI components, and a responsive design optimized for all devices.

## ✨ Features

- **Responsive Design** - Mobile-first approach with seamless adaptation to all screen sizes
- **Modern UI Components** - Built with Radix UI and Shadcn UI for accessibility and visual appeal
- **Dark/Light Theme Support** - Theme switching with `next-themes`
- **Smooth Animations** - Motion library for elegant transitions and interactions
- **Interactive Sections** - About, Experience, Education, Projects, Skills, and Contact sections
- **Component Library** - Comprehensive collection of reusable UI components
- **Chart Visualization** - Skills visualization using `recharts`
- **Form Handling** - React Hook Form for robust form management
- **Carousel Support** - Embla Carousel for project showcases
- **Performance Optimized** - Built with Vite for fast development and production builds

## 📁 Project Structure

```
sital/
├── src/
│   ├── components/
│   │   ├── About.tsx              # About section
│   │   ├── Contact.tsx            # Contact/Form section
│   │   ├── Education.tsx          # Education history
│   │   ├── Experience.tsx         # Work experience
│   │   ├── Hero.tsx               # Landing hero section
│   │   ├── Navigation.tsx         # Navigation bar
│   │   ├── Projects.tsx           # Portfolio projects
│   │   ├── Skills.tsx             # Skills showcase
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx  # Image handling component
│   │   └── ui/                    # Shadcn UI component library
│   │       ├── accordion.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── tooltip.tsx
│   │       └── [other UI components...]
│   ├── types/
│   │   └── custom.d.ts            # Custom type definitions
│   ├── styles/
│   │   ├── globals.css            # Global styles
│   │   └── index.css              # Index styles
│   ├── guidelines/
│   │   └── Guidelines.md          # Design guidelines
│   ├── App.tsx                    # Root application component
│   ├── main.tsx                   # Application entry point
│   └── index.css                  # Main stylesheet
├── public/
│   └── assets/                    # Static assets
├── package.json                   # Project dependencies
├── vite.config.ts                 # Vite configuration
├── index.html                     # HTML entry point
├── tsconfig.json                  # TypeScript configuration
└── tailwind.config.js             # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd sital
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## 📦 Dependencies

### Core Libraries

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | React DOM rendering |
| `typescript` | Latest | Type safety |

### UI & Components

| Package | Purpose |
|---------|---------|
| `@radix-ui/*` | Accessible component primitives |
| `shadcn/ui` | Pre-built component library |
| `lucide-react` | Icon library |
| `recharts` | Data visualization charts |
| `embla-carousel-react` | Carousel/slider functionality |
| `sonner` | Toast notifications |

### Styling

| Package | Purpose |
|---------|---------|
| `tailwind-css` | Utility-first CSS framework |
| `class-variance-authority` | Variant management |
| `tailwind-merge` | Merge Tailwind classes |
| `next-themes` | Dark/Light mode support |

### Forms & State Management

| Package | Purpose |
|---------|---------|
| `react-hook-form` | Form state management |
| `motion` | Animation library |

### Development Tools

| Package | Purpose |
|---------|---------|
| `vite` | Build tool & dev server |
| `typescript` | Type checking |
| `tailwindcss` | CSS processing |
| `postcss` | CSS transformations |

## 🎨 Key Components

### Navigation
The `Navigation.tsx` component provides the main navigation bar with smooth scrolling to different sections.

### Hero Section
The `Hero.tsx` component creates an engaging landing section with introductory content.

### About Section
Showcases personal background and professional summary in `About.tsx`.

### Experience Section
Displays work experience timeline and roles in `Experience.tsx`.

### Education Section
Lists educational qualifications and institutions in `Education.tsx`.

### Projects Section
Highlights portfolio projects with descriptions in `Projects.tsx`.

### Skills Section
Visualizes technical skills using charts and badges in `Skills.tsx`.

### Contact Section
Provides a contact form for inquiries in `Contact.tsx`.

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint

# Format code (if configured)
npm run format
```

## 🎨 Customization

### Theming

The portfolio supports theme switching. Configure theme settings in:
- `src/styles/globals.css` - Global color variables
- `tailwind.config.js` - Tailwind theme configuration

### Colors & Styling

Customize the appearance by modifying:
- `tailwind.config.js` - Theme colors, spacing, and typography
- CSS custom properties in global styles

### Content

Update portfolio content in individual component files:
- `/src/components/About.tsx` - Personal information
- `/src/components/Experience.tsx` - Work history
- `/src/components/Education.tsx` - Educational background
- `/src/components/Projects.tsx` - Portfolio projects
- `/src/components/Skills.tsx` - Technical skills

## 📱 Responsive Design

The portfolio is built mobile-first and includes:
- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly components
- Flexible typography sizing

## ♿ Accessibility

- Built with Radix UI primitives for accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

## 🌐 Deployment

### Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on every push

### Netlify

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Other Platforms

Build the project:
```bash
npm run build
```

Deploy the `dist` folder to your hosting platform.

## 📝 Guidelines

See `src/guidelines/Guidelines.md` for design guidelines and best practices for contributing to this project.

## 📄 Attributions

See `src/Attributions.md` for attribution of third-party libraries and resources used in this project.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📧 Contact

For inquiries and collaborations, use the contact form in the portfolio or reach out directly.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
=======
  
>>>>>>> d01d8a29e1bafc0664250f062ab892c5b80a25bd
