# Smart Product Comparator

A full-stack web application that compares product prices from Amazon and Flipkart, helping users find the best deals.

## Features

- Search for any product across multiple categories
- Compare prices from Amazon and Flipkart
- Universal search that works for any product
- Responsive design that works on all devices
- Fast and efficient search results

## Technologies Used

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express
- **Deployment**: GitHub Pages (Frontend), Render/Heroku (Backend)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Local Development

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies for both client and server:
```bash
cd client
npm install
cd ../server
npm install
```

3. Start the development servers:
```bash
# In one terminal, start the backend server
cd server
npm run dev

# In another terminal, start the frontend server
cd client
npm run dev
```

4. Open your browser and go to `http://localhost:3000`

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Automatic Deployment)

1. Create a new repository on GitHub
2. Push your code to the repository
3. GitHub Actions will automatically deploy your site to GitHub Pages

### Option 2: Manual Deployment

1. Create a new repository on GitHub
2. Update the `homepage` field in `client/package.json`:
```json
{
  "homepage": "https://<your-github-username>.github.io/<repository-name>"
}
```

3. Build and deploy the frontend:
```bash
cd client
npm run deploy
```

## Backend Deployment

For the backend API, you can deploy to platforms like:
- Render
- Heroku
- Railway
- Vercel (with serverless functions)

## Environment Variables

### Client (.env)
```env
VITE_API_URL= # Leave empty for local development, set to your deployed backend URL for production
```

### Server (.env)
```env
PORT=5000
NODE_ENV=production
```

## Project Structure

```
├── client/                 # React frontend
│   ├── public/             # Static assets
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   └── App.jsx         # Main application component
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Client dependencies
├── server/                 # Node.js backend
│   ├── index.js            # Main server file
│   ├── comprehensive-catalog.js  # Product database
│   └── package.json        # Server dependencies
└── README.md               # This file
```

## API Endpoints

- `GET /api/search?query=<product_name>` - Search for products
- `GET /api/health` - Health check endpoint

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Create a pull request

## License

This project is licensed under the MIT License.