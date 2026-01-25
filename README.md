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

## 🚀 Deployment Instructions

### Option 1: Deploy to GitHub Pages (Recommended)

#### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository: `your-username.github.io` (replace `your-username` with your GitHub username)
   - Example: If your username is `Adhithya1209`, name it `Adhithya1209.github.io`
4. Make the repository **Public**
5. Click "Create repository"

#### Step 2: Upload Your Files

**Method A: Using GitHub Web Interface**

1. On your repository page, click "uploading an existing file"
2. Drag and drop all three files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Scroll down and click "Commit changes"

**Method B: Using Git Command Line**

```bash
# Navigate to your portfolio folder
cd /path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (top right)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

#### Step 4: Access Your Website

- Your website will be live at: `https://your-username.github.io`
- It may take 2-5 minutes for the site to go live
- You'll see a green checkmark when it's ready

### Option 2: Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop your portfolio folder onto the Netlify dashboard
4. Your site will be live in seconds with a custom URL
5. Optionally, connect your GitHub repository for automatic deployments

### Option 3: Deploy to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Your site will be live instantly

## 🎨 Customization Guide

### Update Personal Information

**Contact Information** (in `index.html`):
```html
<!-- Search for these and update with your info -->
<a href="mailto:YOUR-EMAIL@gmail.com">
<a href="tel:+YOUR-PHONE-NUMBER">
<a href="https://github.com/YOUR-GITHUB">
<a href="https://linkedin.com/in/YOUR-LINKEDIN">
```

**Location**:
```html
<!-- Find and update in About section -->
<h3>Location</h3>
<p>Your City, Your Country</p>
```

### Change Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #00d4ff;        /* Main accent color */
    --secondary: #ff3366;      /* Secondary accent */
    --accent: #7c3aed;         /* Additional accent */
    
    --bg-primary: #0a0e1a;     /* Main background */
    --bg-secondary: #111827;   /* Secondary background */
}
```

### Update Projects

In `index.html`, find the `<!-- Projects Section -->` and modify:
```html
<div class="project-card">
    <div class="project-header">
        <span class="project-status">Status</span>
        <h3>Your Project Name</h3>
    </div>
    <p class="project-description">
        Your project description here...
    </p>
    <!-- Add your tech stack -->
    <div class="tech-tags">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
</div>
```

### Add/Remove Sections

To hide a section temporarily, add `style="display: none;"` to the section tag:
```html
<section class="section certifications" style="display: none;">
```

To permanently remove a section, delete the entire `<section>` block and its corresponding navigation link.

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

## 🎯 Next Steps

1. **Custom Domain**: 
   - Purchase a domain (e.g., from Namecheap, GoDaddy)
   - Add to GitHub Pages settings
   - Update DNS records

2. **Blog Section**:
   - Add a blog page with your technical articles
   - Use Jekyll or add manually

3. **Contact Form**:
   - Integrate Formspree, Netlify Forms, or EmailJS
   - Add to contact section

4. **Resume Download**:
   - Add PDF resume to repository
   - Link in the hero section

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

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
