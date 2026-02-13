# Deployment Guide for GitHub Pages

This is a pure HTML/CSS/JavaScript portfolio. No build step is required!

## To Deploy to GitHub Pages:

1. **Push the code to GitHub:**
   ```bash
   git add .
   git commit -m "Convert to static HTML site"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Under "Source", select: **main branch**
   - Under "Folder", select: **/docs**
   - Click "Save"

3. **Your site will be live at:**
   ```
   https://saurabhsaini12.github.io/SaurabhSainiPersonalWebsite/
   ```

## Files Structure:
- `docs/index.html` - Main page with all content
- `docs/styles.css` - All styling
- `docs/script.js` - Interactivity (smooth scrolling, mobile menu, etc)
- `docs/.nojekyll` - Tells GitHub not to process the site with Jekyll

## Features:
✅ Fully static (no backend required)
✅ Mobile responsive
✅ Dark mode support (system preference)
✅ Smooth scrolling navigation
✅ Contact information links ready
✅ Fast loading (all assets are local)

## To test locally:
```bash
# Using Python 3
python -m http.server 8000 --directory docs

# Then visit: http://localhost:8000
```

Enjoy your new static portfolio! 🚀
