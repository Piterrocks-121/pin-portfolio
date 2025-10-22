# UX Portfolio - Pintu

A modern, responsive portfolio website showcasing UX/UI design work and projects.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Components**: Animated UX components demonstrating design skills
- **Search Functionality**: Search through projects with real-time filtering
- **Performance Optimized**: Lazy loading, optimized animations, and efficient code
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## 📁 Project Structure

```
Portfolio WEB/
├── assets/
│   ├── css/
│   │   └── styles.css          # Main stylesheet with CSS variables and animations
│   ├── js/
│   │   └── script.js           # JavaScript functionality and interactions
│   └── images/
│       ├── caretap.png         # Mobile app design project
│       ├── LIMS.png            # Web platform project
│       ├── robosuit.png        # Dashboard interface project
│       ├── Tescoshop.png       # E-commerce experience project
│       ├── ibma.png            # Brand identity project
│       ├── Portfoliopin.png    # Portfolio logo
│       └── dribbble-svgrepo-com.svg # Social media icon
├── index.html                  # Main HTML file
├── UX-RULES.md                 # UX design guidelines and rules
└── README.md                   # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **Responsive Design**: Mobile-first approach with breakpoints
- **Performance**: Optimized loading and smooth animations

## 🎨 Design System

### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Secondary**: #f8fafc (Light Gray)
- **Background**: Dynamic based on theme
- **Text**: High contrast for accessibility

### Typography
- **Font Family**: Roboto (Google Fonts)
- **Weights**: 300, 400, 500, 700, 900
- **Responsive**: Fluid typography with clamp() functions

### Components
- **Interactive Buttons**: With ripple effects and state changes
- **Product Cards**: Hover animations and overlay effects
- **Navigation**: Smooth scrolling and mobile-friendly
- **Search**: Real-time filtering with debounced input

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a modern web browser
3. **Explore** the interactive features and responsive design

### Local Development
```bash
# Serve the files using a local server (recommended)
python -m http.server 8000
# or
npx serve .
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant
- **Reduced Motion**: Respects user preferences

## 🎯 Performance Optimizations

- **Lazy Loading**: Images load as they enter viewport
- **Debounced Search**: Prevents excessive API calls
- **Optimized Animations**: Hardware-accelerated transforms
- **Minimal Dependencies**: Vanilla JavaScript only

## 🔧 Customization

### Adding New Projects
1. Add project images to `assets/images/`
2. Update the projects section in `index.html`
3. Follow the existing card structure

### Theme Customization
- Modify CSS custom properties in `:root` selector
- Update color values in both light and dark themes
- Ensure proper contrast ratios

### Adding New Sections
1. Create semantic HTML structure
2. Add corresponding CSS styles
3. Implement JavaScript functionality if needed

## 📄 License

This project is for portfolio purposes. All design work and code are original creations.

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn Profile]
- **Email**: [Your Email Address]

---

*Built with ❤️ and modern web technologies*
