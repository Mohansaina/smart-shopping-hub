# Complete Deployment Checklist

Follow these steps to deploy your Smart Shopping Hub application with both frontend and backend.

## Prerequisites

1. GitHub account
2. Render account (https://render.com)
3. Git installed on your computer
4. Node.js and npm installed

## Step 1: Deploy Backend to Render

### Option 1: Automatic Deployment (Recommended)

1. Go to https://dashboard.render.com
2. Sign in or create an account
3. Click "New" → "Web Service"
4. Select "GitHub" as the source
5. Connect your GitHub account if prompted
6. Find and select "Mohansaina/smart-shopping-hub" repository
7. Render will automatically detect configuration from `render.yaml`:
   - Name: `smart-shopping-hub-api`
   - Root Directory: `server`
   - Runtime: Node
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && npm start`
8. Add environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: `10000`
9. Click "Create Web Service"
10. Wait for deployment to complete (2-5 minutes)
11. Note the deployed URL (e.g., `https://smart-shopping-hub-api.onrender.com`)

### Option 2: Manual Deployment

1. Install Render CLI: `npm install -g render-cli`
2. Log in: `render login`
3. Deploy: `render deploy --yaml=render.yaml`

## Step 2: Update Frontend Configuration

1. Update `client/.env.production` with your actual Render backend URL:
   ```
   VITE_API_URL=https://your-actual-render-url.onrender.com
   ```

2. Commit and push the change:
   ```bash
   cd client
   git add .env.production
   git commit -m "Update frontend to use deployed backend URL"
   git push origin master
   cd ..
   git add client
   git commit -m "Update client submodule with backend URL"
   git push origin master
   ```

## Step 3: Redeploy Frontend to GitHub Pages

1. Rebuild and redeploy the frontend:
   ```bash
   cd client
   npm run deploy
   ```

## Step 4: Enable GitHub Pages

1. Go to https://github.com/Mohansaina/smart-shopping-hub/settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "gh-pages" as the branch and "/ (root)" as the folder
5. Click "Save"

## Step 5: Test Your Deployment

1. Visit your frontend: https://Mohansaina.github.io/smart-shopping-hub
2. Try searching for a product
3. Check that results are returned from both Amazon and Flipkart
4. Verify there are no console errors

## Monitoring and Maintenance

### Backend Monitoring

1. View logs in Render dashboard
2. Monitor health endpoint: `https://your-render-url.onrender.com/api/health`
3. Set up alerts for downtime

### Frontend Monitoring

1. Check GitHub Pages status
2. Monitor browser console for errors
3. Verify API calls are working correctly

## Updating Your Application

### Backend Updates

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update backend"
   git push origin master
   ```
3. Render will automatically redeploy

### Frontend Updates

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   cd client
   git add .
   git commit -m "Update frontend"
   git push origin master
   cd ..
   git add client
   git commit -m "Update client submodule"
   git push origin master
   ```
3. Redeploy to GitHub Pages:
   ```bash
   cd client
   npm run deploy
   ```

## Troubleshooting

### Common Issues

1. **Frontend not connecting to backend**:
   - Verify `VITE_API_URL` in `.env.production` is correct
   - Check that backend is running and accessible
   - Ensure CORS is properly configured (already included in backend)

2. **GitHub Pages not updating**:
   - Check GitHub Actions logs
   - Verify `gh-pages` branch was updated
   - Confirm Pages settings in repository

3. **Backend deployment failures**:
   - Check Render build logs
   - Verify `render.yaml` configuration
   - Ensure all dependencies are in `server/package.json`

4. **Slow API responses**:
   - Free tier services may have cold starts
   - Consider upgrading to a paid Render plan for production

### Support Resources

1. Render Documentation: https://render.com/docs
2. GitHub Pages Documentation: https://docs.github.com/en/pages
3. Application Repository: https://github.com/Mohansaina/smart-shopping-hub

## Security Considerations

1. Never commit sensitive information to GitHub
2. Use environment variables for secrets
3. Regularly update dependencies
4. Monitor access to your Render dashboard

## Performance Optimization

1. Enable caching headers for static assets
2. Use a CDN for global distribution
3. Optimize images and other media
4. Monitor response times and optimize queries