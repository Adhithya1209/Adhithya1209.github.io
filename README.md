# Adhithya Jayaraman - Portfolio Website

A modern, responsive portfolio website showcasing AI/ML projects, experience, and skills. Built with HTML, CSS, and vanilla JavaScript.

## 🌟 Features

- **Modern Design**: Tech-forward aesthetic with animated backgrounds and smooth transitions
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Scroll animations, hover effects, and smooth navigation
- **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility
- **Performance**: Fast loading with optimized assets and lazy loading
- **Accessibility**: WCAG compliant with keyboard navigation support

## 📋 Sections

1. **Hero** - Eye-catching introduction with call-to-action
2. **About** - Professional summary and key statistics
3. **Experience** - Timeline of work history with achievements
4. **Projects** - Featured projects with technologies used
5. **Skills** - Visual representation of technical expertise
6. **Certifications** - Professional certifications and courses
7. **Contact** - Multiple ways to get in touch



## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file with all content
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images**: If you add images, compress them using tools like TinyPNG
2. **Minify Files**: For production, use tools to minify CSS and JS
3. **CDN**: Consider using a CDN for Google Fonts if loading is slow
4. **Caching**: GitHub Pages automatically handles caching

## 🐛 Troubleshooting

### Site not loading after deployment
- Wait 5-10 minutes for DNS propagation
- Check if GitHub Pages is enabled in repository settings
- Ensure repository is public
- Clear browser cache and try incognito mode

### Styling looks broken
- Check if `styles.css` is in the same folder as `index.html`
- Verify there are no typos in the CSS file path
- Check browser console for errors (F12 → Console tab)

### JavaScript not working
- Ensure `script.js` is in the same folder as `index.html`
- Check browser console for errors
- Try a different browser

### Mobile view issues
- Clear mobile browser cache
- Test in Chrome DevTools mobile emulator (F12 → Toggle device toolbar)

## 📝 SEO Optimization

Update meta tags in `index.html`:
```html
<head>
    <meta name="description" content="Your description here">
    <meta property="og:title" content="Your Name - AI Engineer">
    <meta property="og:description" content="Your description">
    <meta property="og:image" content="URL to your image">
    <meta name="twitter:card" content="summary_large_image">
</head>
```

## 🔒 Security

- No sensitive data is stored in the code
- All external links use `rel="noopener noreferrer"`
- HTTPS is automatically enabled on GitHub Pages

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your Google Analytics tracking ID
2. Add before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```


## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 📧 Contact

**Adhithya Jayaraman**
- Email: adhithyajayaraman@gmail.com
- Phone: +49 152 17221887
- GitHub: [github.com/Adhithya1209](https://github.com/Adhithya1209)
- LinkedIn: [linkedin.com/in/adhithya-jayaraman](https://linkedin.com/in/adhithya-jayaraman)

---

⭐ If you found this helpful, please consider giving it a star on GitHub!

Built with ❤️ by Adhithya Jayaraman
