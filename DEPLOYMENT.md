# Deployment Guide

This guide will help you deploy the Smart Product Comparator application to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (public or private)
3. Name it `smart-product-comparator` (or any name you prefer)
4. Don't initialize with a README (we'll push the existing code)

## Step 2: Update Configuration

### Update the Client Homepage

1. Open `client/package.json`
2. Update the `homepage` field:
```json
{
  "homepage": "https://<your-github-username>.github.io/smart-product-comparator"
}
```

Replace `<your-github-username>` with your actual GitHub username.

### Update the Base Path (if needed)

1. Open `client/vite.config.js`
2. Make sure the `base` field matches your repository name:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/smart-product-comparator/', // Should match your repository name
  // ... rest of the configuration
})
```

## Step 3: Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Commit and push your code to GitHub:
```bash
git add .
git commit -m "Prepare for deployment"
git remote add origin https://github.com/<your-github-username>/smart-product-comparator.git
git branch -M main
git push -u origin main
```

2. Go to your repository on GitHub
3. Click on "Settings" tab
4. Scroll down to "Pages" section
5. Under "Source", select "GitHub Actions"
6. GitHub will automatically create a workflow for you

### Option 2: Manual Deployment

1. Build and deploy the frontend:
```bash
cd client
npm run deploy
```

This will:
- Build the React application
- Deploy it to the `gh-pages` branch
- Make it available at `https://<your-github-username>.github.io/smart-product-comparator`

## Step 4: Backend Deployment

Since GitHub Pages only hosts static files, you'll need to deploy the backend API separately. Here are some options:

### Option 1: Render (Recommended)

1. Go to https://render.com
2. Sign up or log in
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - Name: `smart-product-comparator-api`
   - Root Directory: `server`
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node index.js`
6. Add environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (or let Render auto-assign)
7. Click "Create Web Service"

### Option 2: Heroku

1. Install Heroku CLI
2. Log in to Heroku: `heroku login`
3. Create a new app: `heroku create smart-product-comparator-api`
4. Set buildpack: `heroku buildpacks:set heroku/nodejs`
5. Deploy: `git subtree push --prefix server heroku main`

### Option 3: Railway

1. Go to https://railway.app
2. Sign up or log in
3. Click "New Project"
4. Connect your GitHub repository
5. Select the `server` directory
6. Deploy

## Step 5: Update Client to Use Deployed Backend

After deploying your backend, you need to update the client to use the deployed API URL:

1. Create `client/.env.production`:
```env
VITE_API_URL=https://your-deployed-backend-url
```

2. Replace `your-deployed-backend-url` with your actual backend URL.

## Troubleshooting

### Common Issues

1. **Page not found after deployment**: 
   - Make sure the `base` in `vite.config.js` matches your repository name
   - Make sure the `homepage` in `package.json` is correct

2. **API calls failing**:
   - Make sure you've deployed the backend
   - Make sure you've updated the `VITE_API_URL` in `.env.production`

3. **CORS issues**:
   - Make sure your backend has proper CORS configuration (already included in the code)

### Testing Your Deployment

1. Visit your GitHub Pages URL: `https://<your-github-username>.github.io/smart-product-comparator`
2. Try searching for a product
3. Check the browser's developer console for any errors

## Updating Your Deployment

To update your deployment after making changes:

1. Commit your changes:
```bash
git add .
git commit -m "Update application"
git push origin main
```

2. For GitHub Pages (if using manual deployment):
```bash
cd client
npm run deploy
```

3. For backend platforms, they usually auto-deploy when you push to the repository.

## Support

If you encounter any issues during deployment, please check:
1. All environment variables are correctly set
2. The repository structure matches the expected format
3. All dependencies are properly installed