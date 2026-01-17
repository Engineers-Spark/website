# Engineer's Spark - React Vite Website

A modern, responsive website for Engineer's Spark, Tunisia's premier cybersecurity club. Built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 19, Vite 7, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Fast Performance**: Optimized build with Vite for lightning-fast development and production builds
- **Component Library**: Comprehensive UI components built with Radix UI primitives
- **Routing**: Client-side routing with React Router DOM
- **Clean Design**: Professional cybersecurity-themed interface

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0, TypeScript 5.x
- **Build Tool**: Vite 7.3.0
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives
- **Routing**: React Router DOM 7.11.0
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd engineers-spark-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── MarkdownRenderer.tsx
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── AboutPage.tsx   # About us page
│   ├── EventsPage.tsx  # Events listing
│   ├── GalleryPage.tsx # Photo gallery
│   ├── BlogPage.tsx    # Blog posts
│   └── RecruitmentPage.tsx # Join us page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom design system:

- **Primary Color**: Dark blue (#0b111d)
- **Accent Color**: Cyan (#00afe3)
- **Typography**: Inter font family
- **Components**: Built with Radix UI primitives for accessibility

## 🚀 Deployment

The project is configured for easy deployment to various platforms:

- **Vercel**: Deploy directly from GitHub
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the built files in the `dist` directory

## 📄 Pages

- **Home**: Hero section, statistics, features, and recent events
- **About**: Mission, vision, values, and club history
- **Events**: Upcoming and past events with detailed information
- **Gallery**: Photo gallery of club activities and events
- **Blog**: Articles and tutorials on cybersecurity topics
- **Recruitment**: Information on joining the club and opening new branches

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📧 Contact

- **Email**: engineers.spark@edu.isetcom.tn
- **GitHub**: [Engineers-Spark](https://github.com/Engineers-Spark)
- **Facebook**: [Engineers Spark Community](https://www.facebook.com/EngineersSparkCommunity)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Engineer's Spark** - Empowering the next generation of cybersecurity professionals in Tunisia.
