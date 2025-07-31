# Deployment Guide for Render

This portfolio website is ready to be deployed on Render as a static site. Follow these steps:

## Quick Deploy to Render

### Option 1: Direct GitHub Connection (Recommended)

1. **Fork/Clone Repository**: Make sure this repository is in your GitHub account
2. **Go to Render**: Visit [render.com](https://render.com) and sign up/login
3. **Create New Static Site**: 
   - Click "New +" → "Static Site"
   - Connect your GitHub account
   - Select this repository (`portfolio_website`)
4. **Configure Deployment**:
   - **Name**: `diptendu-portfolio` (or your preferred name)
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Build Command**: Leave empty (no build required)
   - **Publish Directory**: `.` (current directory)
5. **Deploy**: Click "Create Static Site"

### Option 2: Manual Upload

1. **Download Repository**: Download all files from this repository
2. **Go to Render**: Visit [render.com](https://render.com)
3. **Create Static Site**: Choose "Deploy from Git" or manual upload
4. **Upload Files**: Upload all files (index.html, style.css, script.js, Resume 27.pdf)
5. **Deploy**: Follow the deployment process

## Files Included

- `index.html` - Main portfolio page
- `style.css` - Terminal styling and responsive design
- `script.js` - Interactive terminal functionality
- `Resume 27.pdf` - Downloadable resume
- `README.md` - Project documentation

## Features

✅ **Fully Static** - No server-side processing required  
✅ **Responsive Design** - Works on all devices  
✅ **Interactive Terminal** - Command-line interface  
✅ **SEO Optimized** - Meta tags and social sharing  
✅ **Fast Loading** - Minimal dependencies  
✅ **Resume Integration** - Downloadable PDF resume  

## Custom Domain (Optional)

After deployment, you can:
1. Go to your Render dashboard
2. Select your static site
3. Go to "Settings" → "Custom Domains"
4. Add your custom domain

## Environment Variables

No environment variables required - this is a pure static site.

## Build Settings

- **Build Command**: Not required
- **Publish Directory**: `.` (root directory)
- **Node Version**: Not applicable (pure HTML/CSS/JS)

## Post-Deployment

After successful deployment:
1. Test all terminal commands (`help`, `about`, `projects`, `skills`, `contact`, `resume`)
2. Verify resume PDF download works
3. Test responsive design on mobile devices
4. Check all external links (GitHub repos, Streamlit app)

## Troubleshooting

**Issue**: Resume PDF not loading  
**Solution**: Ensure `Resume 27.pdf` is in the root directory

**Issue**: Commands not working  
**Solution**: Check browser console for JavaScript errors

**Issue**: Styling issues  
**Solution**: Verify `style.css` is properly linked in `index.html`

## Support

For deployment issues, contact Render support or check their documentation at [render.com/docs](https://render.com/docs).

---

**Deployment Time**: ~2-3 minutes  
**Cost**: Free tier available  
**SSL**: Automatic HTTPS  
**CDN**: Global content delivery included  