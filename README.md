# SafeRoad Website

A modern, mobile-responsive website for the SafeRoad project - an innovative traffic violation reporting system.

## Features

- ✅ **Mobile Responsive Design** - Optimized for all devices
- ✅ **Modern UI/UX** - Clean, professional interface
- ✅ **Interactive Components** - Video modal, responsive navigation
- ✅ **Accessibility** - WCAG compliant with proper ARIA labels
- ✅ **Performance Optimized** - Fast loading with optimized assets

## Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **GitHub Pages** - Free hosting and deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/SafeRoadWebsite.git
cd SafeRoadWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to GitHub**: The website will automatically deploy when you push to the `main` branch.

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Set Source to "GitHub Actions"
   - The site will be available at `https://your-username.github.io/SafeRoadWebsite/`

### Manual Deployment

1. **Install gh-pages** (if not already installed):
```bash
npm install --save-dev gh-pages
```

2. **Update package.json** (already done):
```json
{
  "homepage": "https://your-username.github.io/SafeRoadWebsite/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

### Configuration

The website is configured for GitHub Pages with:
- **Base URL**: `/SafeRoadWebsite/` (in `vite.config.js`)
- **Build Output**: `dist/` directory
- **GitHub Actions**: Automatic deployment on push to main

## Project Structure

```
SafeRoadWebsite/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # UI components (header, footer, logo)
│   │   ├── hero-home.tsx   # Hero section
│   │   ├── workflows.tsx   # Features section
│   │   ├── cta.tsx         # Call-to-action section
│   │   └── modal-video.tsx # Video modal component
│   ├── css/                # Global styles and utilities
│   ├── pages/              # Page components
│   └── utils/              # Utility functions
├── public/                 # Static assets
│   ├── images/             # Images and icons
│   └── videos/             # Video files
├── .github/workflows/      # GitHub Actions
└── dist/                   # Build output (generated)
```

## Mobile Responsiveness

The website is fully responsive with:
- **Mobile-first design** (320px - 767px)
- **Tablet optimization** (768px - 1023px)
- **Desktop enhancement** (1024px+)
- **Touch-friendly** navigation and interactions
- **Optimized performance** for mobile devices

## Customization

### Colors and Theme
- Primary: `#6366f1` (Indigo)
- Background: `#23272f` (Dark)
- Text: `#e0e7ff` (Light)
- Accent: `#a5b4fc` (Purple)

### Adding New Components
1. Create component in `src/components/`
2. Add corresponding CSS file
3. Import and use in `App.jsx`

### Updating Content
- **Hero Section**: Edit `src/components/hero-home.tsx`
- **Features**: Edit `src/components/workflows.tsx`
- **Contact**: Edit `src/components/cta.tsx`

## Performance

- **Optimized Images**: Compressed and responsive
- **Lazy Loading**: Images load on demand
- **Minified CSS/JS**: Production builds are optimized
- **CDN Ready**: Static assets are cacheable

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues:
- Email: iwitnessroads@gmail.com
- GitHub Issues: [Create an issue](https://github.com/your-username/SafeRoadWebsite/issues)

---

**Built with ❤️ for safer roads**
