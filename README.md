# Smart Product Comparator

A full-stack web application that helps users compare product prices across Amazon and Flipkart to find the best deals.

## 🚀 Features

- **Product Search**: Search for products by name (iPhone 15, Samsung Galaxy S24, laptop, etc.)
- **Price Comparison**: Compare prices from Amazon and Flipkart
- **Smart Filtering**: Filter results by platform (Amazon only, Flipkart only, or both)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Search**: Fast search with loading indicators
- **User-friendly Interface**: Clean, modern UI built with React and TailwindCSS
- **Rating Display**: Product ratings with star visualization
- **Direct Purchase Links**: Click "Buy Now" to go directly to the product page

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
smart-product-comparator/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── FilterControls.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                 # Express backend
│   ├── index.js
│   ├── package.json
│   ├── .env
│   ├── .env.example
│   ├── Procfile
│   └── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd smart-product-comparator
   ```

2. **Set up the backend**
   ```bash
   cd server
   npm install
   cp .env.example .env
   npm run dev
   ```
   The backend will start on `http://localhost:5000`

3. **Set up the frontend** (in a new terminal)
   ```bash
   cd client
   npm install
   npm run dev
   ```
   The frontend will start on `http://localhost:3000`

4. **Test the application**
   - Open `http://localhost:3000` in your browser
   - Try searching for "iPhone 15", "Samsung Galaxy S24", or "laptop"

## 📱 API Endpoints

### GET /api/search
Search for products by query parameter.

**Parameters:**
- `query` (string, required): Product name to search for

**Example:**
```
GET /api/search?query=iPhone%2015
```

**Response:**
```json
{
  "query": "iPhone 15",
  "count": 3,
  "results": [
    {
      "name": "iPhone 15",
      "image": "https://example.com/iphone.jpg",
      "price": "₹72,999",
      "rating": 4.4,
      "reviews": "8,567",
      "source": "Flipkart",
      "link": "https://flipkart.com/iphone-15"
    }
  ]
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Smart Product Comparator API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🌐 Deployment

### Frontend Deployment (GitHub Pages)

1. **Update repository settings**
   - In `client/package.json`, update the `homepage` field:
     ```json
     "homepage": "https://yourusername.github.io/smart-product-comparator"
     ```

2. **Deploy to GitHub Pages**
   ```bash
   cd client
   npm run deploy
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select "Deploy from a branch" and choose "gh-pages"

### Backend Deployment

#### Option 1: Render.com (Recommended)

1. **Create a Render account** at [render.com](https://render.com)

2. **Create a new Web Service**
   - Connect your GitHub repository
   - Set the following:
     - **Build Command**: `cd server && npm install`
     - **Start Command**: `cd server && npm start`
     - **Environment**: Add your environment variables

3. **Set environment variables**
   ```
   NODE_ENV=production
   PORT=10000
   ```

4. **Deploy**
   - Render will automatically deploy your app
   - Note the deployed URL (e.g., `https://your-app.onrender.com`)

#### Option 2: Heroku

1. **Install Heroku CLI** and login
   ```bash
   heroku login
   ```

2. **Create a new Heroku app**
   ```bash
   cd server
   heroku create your-app-name
   ```

3. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

### Update Frontend API URL

After deploying the backend, update the frontend to use the production API:

1. **Create environment file** in `client/`:
   ```bash
   # client/.env.production
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

2. **Update API calls** in `client/src/App.jsx`:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || '';
   const response = await fetch(`${API_URL}/api/search?query=${encodeURIComponent(query)}`);
   ```

3. **Redeploy frontend**
   ```bash
   cd client
   npm run deploy
   ```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```
PORT=5000
NODE_ENV=development

# Future API integrations
# AMAZON_PAAPI_ACCESS_KEY=your_amazon_access_key
# AMAZON_PAAPI_SECRET_KEY=your_amazon_secret_key
# FLIPKART_AFFILIATE_ID=your_flipkart_id
```

#### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-url.com
```

## 🤝 API Integration (Future Enhancement)

The application is designed to easily integrate with real APIs:

### Amazon Product Advertising API (PAAPI)
1. Register for Amazon Associates program
2. Get PAAPI credentials
3. Add credentials to server/.env
4. Replace mock data with PAAPI calls

### Flipkart Affiliate API
1. Join Flipkart Affiliate Program
2. Get API credentials
3. Add credentials to server/.env
4. Replace mock data with Flipkart API calls

## 🎨 Customization

### Adding More Mock Products
Edit `server/index.js` and add new entries to the `mockProducts` object:

```javascript
const mockProducts = {
  'your-product': [
    {
      name: "Product Name",
      image: "image-url",
      price: "₹Price",
      rating: 4.5,
      reviews: "1,234",
      source: "Amazon", // or "Flipkart"
      link: "product-url"
    }
  ]
}
```

### Styling Changes
- Modify `client/tailwind.config.js` for theme customization
- Update components in `client/src/components/` for UI changes

## 🐛 Troubleshooting

### Common Issues

1. **CORS Error**
   - Ensure backend is running on port 5000
   - Check Vite proxy configuration in `vite.config.js`

2. **Build Fails**
   - Run `npm install` in both client and server directories
   - Check Node.js version (v14+ required)

3. **Deployment Issues**
   - Verify environment variables are set correctly
   - Check build logs for specific errors
   - Ensure start commands are correct

### Backend Not Starting
```bash
cd server
npm install
npm run dev
```

### Frontend Not Starting
```bash
cd client
npm install
npm run dev
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Create an issue on GitHub
3. Review the API documentation

---

**Happy shopping and saving!** 🛍️💰