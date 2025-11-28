# 🌟 3D Portfolio

> A stunning interactive 3D portfolio website built with React Three Fiber, featuring immersive 3D animations and smooth scroll effects.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.157.0-000000?logo=three.js)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.18-38B2AC?logo=tailwind-css)

## ✨ Features

- 🏝️ **Interactive 3D Island** - Fully rotatable 3D scene with mouse/touch controls
- 🎨 **Beautiful Animations** - GSAP-powered scroll animations and transitions
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- 🎵 **Audio Integration** - Background music with toggle controls
- 📧 **Contact Form** - EmailJS integration for direct messaging
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development
- 🎯 **Modern Stack** - React 18, Three.js, React Three Fiber, and Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **React 18.2** - UI library
- **React Three Fiber** - Three.js renderer for React
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### Animations

- **GSAP** - Professional-grade animation library
- **React Spring** - Spring-physics based animations
- **React Vertical Timeline** - Timeline component

### Forms & Communication

- **EmailJS** - Email service integration

### Development

- **Vite** - Next-generation frontend tooling
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/CreativeOxana/3D_portfolio.git
cd 3D_portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎮 Controls

- **Mouse Drag** - Rotate the 3D island
- **Arrow Keys** - Navigate the island (← →)
- **Scroll** - Reveal animated content sections
- **Music Button** - Toggle background audio

## 📂 Project Structure

```
3d_portfolio/
├── public/           # Static assets
├── src/
│   ├── assets/       # 3D models, icons, images, audio
│   ├── components/   # Reusable React components
│   ├── constants/    # App configuration and data
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Page components
│   └── App.jsx       # Main app component
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Customization

### Adding Projects

Edit `src/constants/index.js` to add your projects:

```javascript
{
  iconUrl: yourIcon,
  theme: 'btn-back-color',
  name: 'Project Name',
  description: 'Project description...',
  githubLink: 'https://github.com/...',
  liveLink: 'https://...'
}
```

### Modifying 3D Models

Replace models in `src/assets/3d/` with your own GLB files.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Oxana**

- GitHub: [@CreativeOxana](https://github.com/CreativeOxana)

## 🙏 Acknowledgments

- 3D models from [Sketchfab](https://sketchfab.com/)
- Icons from [Iconify](https://iconify.design/)
- Inspired by modern portfolio designs

---

⭐ Star this repo if you found it helpful!
