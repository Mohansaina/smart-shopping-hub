# Backend Deployment Guide

This guide will help you deploy the Smart Shopping Hub backend API to Render automatically.

## Prerequisites

1. A Render account (https://render.com)
2. Your GitHub repository (https://github.com/Mohansaina/smart-shopping-hub) should be up to date

## Automatic Deployment to Render

### Step 1: Connect Render to Your GitHub Repository

1. Go to https://dashboard.render.com
2. Sign in or create an account
3. Click "New" → "Web Service"
4. Select "GitHub" as the source
5. Connect your GitHub account if prompted
6. Find and select "Mohansaina/smart-shopping-hub" repository

### Step 2: Configure Your Web Service

Render will automatically detect the configuration from your `render.yaml` file:

- **Name**: `smart-shopping-hub-api`
- **Root Directory**: `server`
- **Runtime**: Node
- **Build Command**: `cd server && npm install`
- **Start Command**: `cd server && npm start`
- **Environment Variables**:
  - `NODE_ENV`: `production`
  - `PORT`: `10000`

### Step 3: Deploy

1. Click "Create Web Service"
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Build your application
   - Start your server

### Step 4: Monitor Deployment

1. Watch the build logs in the Render dashboard
2. The deployment typically takes 2-5 minutes
3. Once deployed, you'll see a URL like: `https://smart-shopping-hub-api.onrender.com`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Install the Render CLI: `npm install -g render-cli`
2. Log in: `render login`
3. Deploy: `render deploy --yaml=render.yaml`

## Environment Variables

The following environment variables are automatically set:

```env
NODE_ENV=production
PORT=10000
```

You can add additional environment variables in the Render dashboard:
1. Go to your service in the Render dashboard
2. Click "Environment" in the sidebar
3. Add any additional variables you need

## Health Check

Your API includes a health check endpoint:
- `GET /api/health` - Returns status information

You can monitor this endpoint to ensure your service is running properly.

## Updating Your Deployment

To update your backend after making changes:

1. Commit and push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update backend"
   git push origin master
   ```

2. Render will automatically redeploy your service

## Troubleshooting

### Common Issues

1. **Build failures**:
   - Check the build logs in the Render dashboard
   - Ensure all dependencies are in package.json
   - Verify the build and start commands are correct

2. **Application crashes**:
   - Check the application logs in the Render dashboard
   - Ensure environment variables are properly set
   - Verify the PORT variable matches what your app expects

3. **Slow responses**:
   - Free tier services on Render may have cold starts
   - Consider upgrading to a paid plan for production use

### Logs

You can view detailed logs in the Render dashboard:
1. Go to your service
2. Click "Logs" in the sidebar
3. View real-time or historical logs

## API Endpoints

Your backend exposes the following endpoints:

- `GET /api/search?query=<product_name>` - Search for products
- `GET /api/health` - Health check endpoint

## Support

If you encounter any issues during deployment:
1. Check the Render documentation: https://render.com/docs
2. Review your application logs
3. Verify your repository structure matches expectations