# Smart Shopping Hub - Render Deployment Guide

This guide will help you deploy the Smart Shopping Hub backend API to Render for automatic deployment.

## Prerequisites

1. A Render account (https://render.com)
2. Your GitHub repository connected to Render
3. The code should be pushed to your GitHub repository

## Deployment Steps

### 1. Connect Render to Your GitHub Repository

1. Go to https://dashboard.render.com
2. Click on "New Web Service"
3. Connect your GitHub account if not already connected
4. Select your repository (smart-shopping-hub)

### 2. Configure Your Web Service

Fill in the following information:

- **Name**: smart-shopping-hub-api
- **Region**: Choose the region closest to your users
- **Branch**: master
- **Root Directory**: server
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### 3. Environment Variables

Render will automatically use the configuration in your `render.yaml` file, but you can also set environment variables manually:

- **NODE_ENV**: production
- **PORT**: 10000 (or any port you prefer)

### 4. Advanced Settings

In the advanced settings section:
- Enable "Auto-Deploy" to automatically deploy when you push to GitHub
- You can add any custom domains if needed

### 5. Deploy

Click "Create Web Service" to start the deployment process.

## Monitoring Your Deployment

1. After deployment, you'll see the build logs in real-time
2. Once deployed successfully, you'll get a URL for your API
3. The API will be available at: `https://your-service-name.onrender.com`

## Updating Your Frontend Configuration

After your backend is deployed:

1. Copy the Render URL (e.g., `https://smart-shopping-hub-api.onrender.com`)
2. Update your frontend `.env.production` file:
   ```
   VITE_API_URL=https://your-render-service-name.onrender.com
   ```
3. Commit and push this change to GitHub
4. Redeploy your frontend to GitHub Pages

## API Endpoints

Once deployed, your API will have the following endpoints:

- `GET /api/search?query=product_name` - Search for products
- `GET /api/health` - Health check endpoint
- `GET /` - API information endpoint

## Troubleshooting

### Common Issues

1. **Deployment fails**: Check the build logs for specific error messages
2. **API returns 500 errors**: Check the application logs in Render dashboard
3. **CORS issues**: The backend already has CORS enabled, but you can check the headers

### Checking Logs

1. Go to your Render dashboard
2. Select your web service
3. Click on "Logs" to see real-time application logs

### Environment Variables

If you need to add more environment variables:
1. Go to your service dashboard
2. Click on "Environment" tab
3. Add your variables and redeploy

## Scaling

Render's free tier includes:
- 512 MB RAM
- 100 GB bandwidth per month
- Sleeps after 15 minutes of inactivity

For production usage, consider upgrading to a paid plan for better performance and no sleep mode.

## Redeployment

Render will automatically redeploy your application when you push changes to your GitHub repository. You can also manually trigger a deployment from the Render dashboard.

## Support

If you encounter any issues:
1. Check the Render documentation: https://render.com/docs
2. Review the application logs
3. Verify your code is working locally first