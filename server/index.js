require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock product data
const mockProducts = {
  'iphone 15': [
    {
      name: "iPhone 15",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
      price: "₹74,999",
      rating: 4.5,
      reviews: "12,340",
      source: "Amazon",
      link: "https://amazon.in/iphone-15"
    },
    {
      name: "iPhone 15",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
      price: "₹72,999",
      rating: 4.4,
      reviews: "8,567",
      source: "Flipkart",
      link: "https://flipkart.com/iphone-15"
    },
    {
      name: "iPhone 15 Pro",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop",
      price: "₹1,34,900",
      rating: 4.6,
      reviews: "5,234",
      source: "Amazon",
      link: "https://amazon.in/iphone-15-pro"
    }
  ],
  'samsung galaxy s24': [
    {
      name: "Samsung Galaxy S24",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
      price: "₹74,999",
      rating: 4.3,
      reviews: "9,876",
      source: "Amazon",
      link: "https://amazon.in/samsung-s24"
    },
    {
      name: "Samsung Galaxy S24",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
      price: "₹71,999",
      rating: 4.2,
      reviews: "7,543",
      source: "Flipkart",
      link: "https://flipkart.com/samsung-s24"
    }
  ],
  'laptop': [
    {
      name: "MacBook Air M2",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      price: "₹1,14,900",
      rating: 4.7,
      reviews: "15,432",
      source: "Amazon",
      link: "https://amazon.in/macbook-air-m2"
    },
    {
      name: "Dell XPS 13",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      price: "₹89,990",
      rating: 4.4,
      reviews: "8,765",
      source: "Flipkart",
      link: "https://flipkart.com/dell-xps-13"
    },
    {
      name: "HP Pavilion 15",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      price: "₹52,999",
      rating: 4.1,
      reviews: "12,098",
      source: "Amazon",
      link: "https://amazon.in/hp-pavilion-15"
    }
  ]
};

// API Routes
app.get('/api/search', (req, res) => {
  try {
    const query = req.query.query;
    
    if (!query) {
      return res.status(400).json({ 
        error: 'Query parameter is required',
        results: []
      });
    }

    const searchKey = query.toLowerCase().trim();
    
    // Find matching products
    let results = [];
    
    // Check if query matches any of our mock data keys
    for (const [key, products] of Object.entries(mockProducts)) {
      if (key.includes(searchKey) || searchKey.includes(key)) {
        results = [...results, ...products];
        break;
      }
    }
    
    // If no direct match, return generic results for popular search terms
    if (results.length === 0) {
      if (searchKey.includes('phone') || searchKey.includes('mobile')) {
        results = mockProducts['iphone 15'];
      } else if (searchKey.includes('laptop') || searchKey.includes('computer')) {
        results = mockProducts['laptop'];
      } else {
        // Return a generic "no results" but with some sample data
        results = [
          {
            name: `${query} - Search Result`,
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
            price: "₹Price varies",
            rating: 4.0,
            reviews: "Check availability",
            source: "Amazon",
            link: "https://amazon.in/search?k=" + encodeURIComponent(query)
          },
          {
            name: `${query} - Search Result`,
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
            price: "₹Price varies",
            rating: 4.0,
            reviews: "Check availability",
            source: "Flipkart",
            link: "https://flipkart.com/search?q=" + encodeURIComponent(query)
          }
        ];
      }
    }
    
    // Sort by price (lowest first) - extract numeric value from price string
    results.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
      const priceB = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
      return priceA - priceB;
    });
    
    res.json({
      query,
      count: results.length,
      results
    });
    
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      results: []
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Smart Product Comparator API is running',
    timestamp: new Date().toISOString()
  });
});

// Default route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Smart Product Comparator API',
    version: '1.0.0',
    endpoints: {
      search: '/api/search?query=<product_name>',
      health: '/api/health'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 API endpoint: http://localhost:${PORT}/api/search?query=iphone`);
});

module.exports = app;