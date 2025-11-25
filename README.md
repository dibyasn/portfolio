# 🌿 3D Interactive Portfolio

A stunning, interactive personal portfolio featuring a 3D Mangrove Greenhouse model with glassmorphism design and smooth animations.

## ✨ Features

- **3D Model Interaction**: Full explore mode with zoom, pan, and rotate controls
- **Glassmorphism UI**: Modern, translucent design with backdrop blur
- **Smooth Animations**: Framer Motion entrance animations throughout
- **Mouse Spotlight**: Dynamic background gradient following cursor
- **Custom Scrollbar**: Sleek, minimalist scrollbar matching the aesthetic
- **Professional Contact**: Icon-based links to Email, LinkedIn, and GitHub
- **Responsive**: Fully responsive across all device sizes
- **GitHub Pages Ready**: Pre-configured Vite build for easy deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
.
├── public/
│   ├── stylized_mangrove_greenhouse/  # 3D model assets
│   └── Dibyaranjan_Swain.pdf      # CV PDF
├── src/
│   ├── components/
│   │   ├── App.jsx                    # Main app component
│   │   ├── ExperienceScene.jsx        # 3D canvas and controls
│   │   ├── Interface.jsx              # UI overlay with content
│   │   ├── MangroveModel.jsx          # 3D model loader
│   │   └── Spotlight.jsx              # Mouse-tracking effect
│   ├── data/
│   │   └── cv.json                    # Portfolio content data
│   ├── index.css                      # Global styles + scrollbar
│   └── main.jsx                       # Entry point
└── vite.config.js                     # Vite configuration
```

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **3D**: Three.js + React Three Fiber + Drei
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons

## 🎨 Customization

### Update Your Information
Edit `src/data/cv.json` with your:
- Name, email, summary
- Work experience
- Projects & links
- Skills
- Education

### Update Links
In `src/components/Interface.jsx`, update:
- GitHub: Line 203
- LinkedIn: From `cv.json`
- Email: From `cv.json`

### Change 3D Model
Replace files in `public/stylized_mangrove_greenhouse/` and update path in `src/components/MangroveModel.jsx`

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed GitHub Pages deployment instructions.

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Credits

- 3D Model: Stylized Mangrove Greenhouse
- Design: Modern glassmorphism aesthetic
- Built by: Dibyaranjan Swain
