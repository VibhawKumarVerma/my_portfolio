# 🌟 Vibhaw Kumar Verma - Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square)](https://vibhawkumarverma.github.io/portfolio)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> A modern, responsive portfolio website showcasing my journey as a Computer Science Engineering (AI) student, featuring my projects, skills, and achievements.

## 🚀 Live Demo

**[View Portfolio →](https://vibhawkumarverma.github.io/portfolio)**

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Sections](#-sections)
- [Installation](#-installation)
- [Usage](#-usage)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

## 🎯 About

This portfolio website represents my journey as a Computer Science Engineering student specializing in Artificial Intelligence. It showcases my technical skills, academic achievements, and project portfolio in an interactive and visually appealing manner.

**Key Highlights:**
- 🎓 B.Tech CSE-AI student with 7.75 CGPA
- 🤖 95%+ accuracy in ML model development
- 💻 Full-stack development capabilities
- 🏆 Multiple successful AI/ML projects

## ✨ Features

### 🎨 **Design & User Experience**
- **Responsive Design** - Perfect on all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean, professional, and visually appealing
- **Smooth Animations** - CSS animations and JavaScript interactions
- **Dark Theme** - Professional dark sections with light content areas
- **Loading Screen** - Custom branded loading animation
- **Custom Cursor** - Interactive cursor effects

### 🚀 **Performance & Functionality**
- **Fast Loading** - Optimized CSS and JavaScript
- **Smooth Scrolling** - Seamless navigation between sections
- **Progressive Enhancement** - Works without JavaScript (graceful degradation)
- **SEO Friendly** - Proper semantic HTML structure
- **Accessibility** - ARIA labels and keyboard navigation support

### 📱 **Interactive Elements**
- **Scroll Progress Bar** - Visual indication of page progress
- **Fade-in Animations** - Elements animate as you scroll
- **Hover Effects** - Interactive cards and buttons
- **Counter Animations** - Animated statistics and numbers
- **Typing Effect** - Animated hero title
- **Particle Background** - Floating particles in hero section

## 🛠 Tech Stack

### **Frontend Technologies**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### **Libraries & Tools**
- **Font Awesome** - Icons and visual elements
- **CSS Grid & Flexbox** - Modern layout systems
- **Intersection Observer API** - Scroll-based animations
- **CSS Custom Properties** - Dynamic theming
- **Vanilla JavaScript** - No external frameworks

### **Deployment**
- **GitHub Pages** - Free static site hosting
- **Git** - Version control
- **GitHub** - Repository hosting

## 📱 Sections

### 🏠 **Hero Section**
- Professional introduction
- Animated typing effect
- Contact information
- Call-to-action buttons

### 👨‍💻 **About Section**
- Personal story and background
- Animated statistics cards
- Key achievements highlight
- Professional summary

### 🎓 **Education Timeline**
- Interactive timeline design
- Academic achievements
- Institution details
- GPA and percentages

### 💡 **Skills & Technologies**
- Categorized skill sets
- Technology tags
- Visual skill cards
- Proficiency indicators

### 🚀 **Projects Portfolio**
- **GesturaMath** - AI-powered hand gesture recognition (95%+ accuracy)
- **Twitter Sentiment Analysis** - Data visualization dashboard
- **Portfolio Website** - This responsive web project
- Live demo and source code links

### 📞 **Contact Section**
- Multiple contact methods
- Social media links
- Professional email
- Location information

## 🔧 Installation

### **Prerequisites**
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, Atom)
- Git (optional, for version control)

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/VibhawKumarVerma/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply double-click index.html
   # OR use a local server
   python -m http.server 8000  # Python 3
   # OR
   python -m SimpleHTTPServer 8000  # Python 2
   ```

3. **View the portfolio**
   - Open `http://localhost:8000` in your browser
   - Or directly open `index.html` file

### **Alternative: Direct Download**
1. Download the ZIP file from GitHub
2. Extract the files
3. Open `index.html` in your browser

## 🎨 Customization

### **Personal Information**
Update the following sections in `index.html`:

```html
<!-- Update hero section -->
<h1>Your Name Here</h1>
<p class="subtitle">Your Title Here</p>

<!-- Update contact information -->
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+1234567890">+1234567890</a>

<!-- Update social links -->
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### **Colors & Styling**
Modify CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary brand color */
    --accent-color: #3b82f6;     /* Accent color */
    --text-dark: #1f2937;        /* Dark text color */
    --text-light: #6b7280;       /* Light text color */
}
```

### **Adding New Projects**
Add new project cards in the projects section:

```html
<div class="project-card fade-in">
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-your-icon"></i>
        </div>
        <h3>Project Name</h3>
    </div>
    <div class="project-content">
        <h4>Project Title</h4>
        <p class="project-description">Your project description...</p>
        <div class="tech-stack">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link primary">Live Demo</a>
            <a href="#" class="project-link secondary">Code</a>
        </div>
    </div>
</div>
```

## 📈 Performance Optimization

### **Loading Speed**
- Optimized CSS with minimal external dependencies
- Compressed images and assets
- Efficient JavaScript with minimal DOM manipulation
- Progressive loading of animations

### **SEO Optimization**
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3, etc.)
- Meta tags for social media sharing
- Alt text for images
- Structured data markup

### **Accessibility Features**
- Keyboard navigation support
- ARIA labels for screen readers
- High contrast ratios
- Focus indicators
- Responsive font sizes

## 🤝 Contributing

I welcome contributions to improve this portfolio template! Here's how you can help:

### **How to Contribute**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Areas for Improvement**
- 🎨 Enhanced animations and transitions
- 📱 Better mobile experience
- ♿ Improved accessibility features
- 🌙 Dark/light mode toggle
- 🌐 Internationalization support
- ⚡ Performance optimizations

### **Bug Reports**
If you find any bugs, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser and device information

## 📊 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 60+     | ✅ Fully Supported |
| Firefox | 55+     | ✅ Fully Supported |
| Safari  | 12+     | ✅ Fully Supported |
| Edge    | 79+     | ✅ Fully Supported |
| IE      | 11      | ⚠️ Limited Support |

## 📂 File Structure

```
portfolio/
├── 📄 index.html          # Main HTML file
├── 📄 README.md           # Project documentation
├── 📁 assets/             # Static assets (future)
│   ├── 🖼️ images/         # Image files
│   ├── 🎨 css/            # External stylesheets
│   └── 📜 js/             # External JavaScript
├── 📄 .gitignore          # Git ignore rules
└── 📄 LICENSE             # MIT License
```

## 🏆 Achievements Showcased

- 🎓 **Academic Excellence**: 7.75 CGPA in B.Tech CSE-AI
- 🤖 **ML Expertise**: 95%+ accuracy in gesture recognition models
- 💻 **Full-Stack Skills**: Frontend and backend development
- 📊 **Data Analysis**: Twitter sentiment analysis with Tableau
- 🏗️ **Project Management**: Multiple successful project deliveries

## 🌟 Featured Projects

### 1. **GesturaMath - AI Hand Gesture Math Solver**
- **Tech Stack**: Python, TensorFlow, OpenCV, CNN
- **Achievement**: 95%+ accuracy in real-time gesture recognition
- **Impact**: AI-powered mathematical expression solving from camera input

### 2. **Twitter Sentiment Analysis Dashboard**
- **Tech Stack**: Tableau, Excel, Data Preprocessing
- **Achievement**: Comprehensive sentiment trend analysis
- **Impact**: Interactive visualization of public opinion data

### 3. **Portfolio Website**
- **Tech Stack**: HTML5, CSS3, JavaScript, Responsive Design
- **Achievement**: Modern, interactive personal portfolio
- **Impact**: Professional online presence with engaging UX

## 📞 Contact Information

### **Professional Contacts**
- 📧 **Email**: [vibhaw2022kr@gmail.com](mailto:vibhaw2022kr@gmail.com)
- 📱 **Phone**: [9002722604](tel:9002722604)
- 📍 **Location**: Greater Noida, India

### **Social Media & Professional Networks**
- 💼 **LinkedIn**: [linkedin.com/in/vibhaw-kumar-verma-ab9ba3285](https://www.linkedin.com/in/vibhaw-kumar-verma-ab9ba3285)
- 💻 **GitHub**: [github.com/VibhawKumarVerma](https://github.com/VibhawKumarVerma)
- 🌐 **Portfolio**: [vibhawkumarverma.github.io/portfolio](https://vibhawkumarverma.github.io/portfolio)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❌ No warranty provided
- ❌ No liability accepted

## 🙏 Acknowledgments

- **Font Awesome** - For the amazing icon library
- **GitHub Pages** - For free static site hosting
- **CSS Grid & Flexbox** - For modern layout capabilities
- **Intersection Observer API** - For smooth scroll animations
- **Open Source Community** - For inspiration and best practices

## 📚 Learning Resources

If you're inspired to create your own portfolio, here are some resources:

### **Web Development**
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript documentation
- [CSS Tricks](https://css-tricks.com/) - CSS tutorials and tricks
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial

### **Design Inspiration**
- [Dribbble](https://dribbble.com/) - Design inspiration
- [Awwwards](https://www.awwwards.com/) - Web design awards
- [CodePen](https://codepen.io/) - Code examples and inspiration

### **Tools & Deployment**
- [GitHub Pages](https://pages.github.com/) - Free static site hosting
- [Netlify](https://www.netlify.com/) - Alternative hosting platform
- [VS Code](https://code.visualstudio.com/) - Recommended code editor

---

<div align="center">

### 🚀 **Ready to explore my portfolio?**

[![View Portfolio](https://img.shields.io/badge/View%20Portfolio-Live%20Site-brightgreen?style=for-the-badge&logo=github-pages)](https://vibhawkumarverma.github.io/portfolio)

**Built with ❤️ by [Vibhaw Kumar Verma](https://github.com/VibhawKumarVerma)**

⭐ **If you found this helpful, please give it a star!** ⭐

</div>

---

*Last updated: August 2025*
