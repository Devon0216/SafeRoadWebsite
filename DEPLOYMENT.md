# GitHub Pages Deployment Guide

## Quick Start

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `SafeRoadWebsite`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### Step 2: Push to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial commit: SafeRoad website with mobile responsiveness"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/SafeRoadWebsite.git

# Push to main branch
git push -u origin main
```

### Step 3: Update Configuration

1. **Update package.json homepage** (replace YOUR_USERNAME):
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/SafeRoadWebsite/"
}
```

2. **Verify vite.config.js**:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/SafeRoadWebsite/',
})
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The site will be automatically deployed when you push to main

### Step 5: Deploy

```bash
# Build and deploy
npm run deploy
```

Or simply push to main branch for automatic deployment:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically:
1. Build the project when you push to main
2. Deploy to GitHub Pages
3. Make the site available at `https://YOUR_USERNAME.github.io/SafeRoadWebsite/`

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the base URL in `vite.config.js` matches your repository name
2. **Assets not loading**: Check that all image paths use `/images/` format
3. **Build fails**: Ensure all dependencies are installed (`npm install`)

### Check Deployment Status

1. Go to your repository → **Actions** tab
2. Check the latest workflow run
3. Look for any error messages

### Verify Configuration

- ✅ Repository is public
- ✅ GitHub Pages is enabled
- ✅ Base URL matches repository name
- ✅ All assets use correct paths

## Custom Domain (Optional)

If you want a custom domain:

1. Go to repository **Settings** → **Pages**
2. Add your custom domain
3. Update `vite.config.js` base to `/`
4. Update `package.json` homepage to your domain

## Performance Tips

- Images are optimized for web
- CSS and JS are minified in production
- Static assets are cacheable
- Mobile-first responsive design

## Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify all configuration files
3. Ensure repository is public
4. Contact: iwitnessroads@gmail.com

---

**Your website will be live at: `https://YOUR_USERNAME.github.io/SafeRoadWebsite/`** 