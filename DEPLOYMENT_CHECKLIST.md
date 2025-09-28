# Deployment Checklist

Follow these steps to deploy your Smart Product Comparator application:

## 1. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `smart-product-comparator`
3. Don't initialize with a README

## 2. Update Configuration Files

### Update client/package.json
Replace `GITHUB_USERNAME` with your actual GitHub username:
```json
{
  "homepage": "https://GITHUB_USERNAME.github.io/smart-product-comparator"
}
```

### Update client/vite.config.js (if needed)
Make sure the base path matches your repository name:
```javascript
base: '/smart-product-comparator/',
```

## 3. Push Code to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/smart-product-comparator.git
git branch -M main
git push -u origin main
```

## 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The deployment workflow will run automatically

## 5. Deploy Backend API

For the backend API, deploy to one of these platforms:

### Render (Recommended)
1. Go to https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Set:
   - Root Directory: `server`
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node index.js`
5. Add environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: `10000`

### Heroku
1. Install Heroku CLI
2. `heroku login`
3. `heroku create smart-product-comparator-api`
4. `heroku buildpacks:set heroku/nodejs`
5. `git subtree push --prefix server heroku main`

## 6. Update Client for Production

Create `client/.env.production`:
```env
VITE_API_URL=https://your-deployed-backend-url
```

Replace `your-deployed-backend-url` with your actual backend URL.

## 7. Final Deployment

After updating the backend URL:
```bash
cd client
npm run deploy
```

## 8. Access Your Application

Once deployed, your application will be available at:
`https://YOUR_USERNAME.github.io/smart-product-comparator`

## Need Help?

If you encounter any issues:
1. Check that all environment variables are correctly set
2. Verify the repository structure matches expectations
3. Ensure all dependencies are properly installed
4. Check browser console for errors