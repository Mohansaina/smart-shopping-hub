require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock product data - Enhanced for universal product search
const mockProducts = {
  // Electronics
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
  ],
  // Headphones & Audio
  'headphones': [
    {
      name: "Sony WH-1000XM5",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      price: "₹29,990",
      rating: 4.6,
      reviews: "8,234",
      source: "Amazon",
      link: "https://amazon.in/sony-wh1000xm5"
    },
    {
      name: "Bose QuietComfort 45",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      price: "₹27,999",
      rating: 4.5,
      reviews: "6,789",
      source: "Flipkart",
      link: "https://flipkart.com/bose-qc45"
    }
  ],
  // Clothing & Fashion
  'shoes': [
    {
      name: "Nike Air Max 270",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      price: "₹12,995",
      rating: 4.3,
      reviews: "5,432",
      source: "Amazon",
      link: "https://amazon.in/nike-air-max-270"
    },
    {
      name: "Adidas Ultraboost 22",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      price: "₹11,999",
      rating: 4.4,
      reviews: "4,567",
      source: "Flipkart",
      link: "https://flipkart.com/adidas-ultraboost"
    }
  ],
  'watch': [
    {
      name: "Apple Watch Series 9",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
      price: "₹41,900",
      rating: 4.7,
      reviews: "12,345",
      source: "Amazon",
      link: "https://amazon.in/apple-watch-series-9"
    },
    {
      name: "Samsung Galaxy Watch 6",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
      price: "₹29,999",
      rating: 4.4,
      reviews: "8,976",
      source: "Flipkart",
      link: "https://flipkart.com/samsung-galaxy-watch-6"
    }
  ],
  // Home & Kitchen
  'television': [
    {
      name: "Samsung 55\" 4K Smart TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
      price: "₹54,999",
      rating: 4.3,
      reviews: "7,654",
      source: "Amazon",
      link: "https://amazon.in/samsung-55-4k-tv"
    },
    {
      name: "LG 55\" OLED TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
      price: "₹89,999",
      rating: 4.6,
      reviews: "5,432",
      source: "Flipkart",
      link: "https://flipkart.com/lg-55-oled-tv"
    }
  ],
  'refrigerator': [
    {
      name: "LG 260L Double Door",
      image: "https://images.unsplash.com/photo-1571175351190-de8e08d90bf8?w=300&h=300&fit=crop",
      price: "₹24,999",
      rating: 4.2,
      reviews: "6,789",
      source: "Amazon",
      link: "https://amazon.in/lg-260l-refrigerator"
    },
    {
      name: "Samsung 253L Frost Free",
      image: "https://images.unsplash.com/photo-1571175351190-de8e08d90bf8?w=300&h=300&fit=crop",
      price: "₹23,490",
      rating: 4.1,
      reviews: "5,234",
      source: "Flipkart",
      link: "https://flipkart.com/samsung-253l-refrigerator"
    }
  ],
  // Books & Education
  'books': [
    {
      name: "Rich Dad Poor Dad",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      price: "₹299",
      rating: 4.5,
      reviews: "15,678",
      source: "Amazon",
      link: "https://amazon.in/rich-dad-poor-dad"
    },
    {
      name: "Atomic Habits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      price: "₹350",
      rating: 4.7,
      reviews: "12,456",
      source: "Flipkart",
      link: "https://flipkart.com/atomic-habits"
    }
  ],
  // Beauty & Personal Care
  'perfume': [
    {
      name: "Fogg Black Series",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
      price: "₹399",
      rating: 4.1,
      reviews: "8,765",
      source: "Amazon",
      link: "https://amazon.in/fogg-black-series"
    },
    {
      name: "Engage M1 Perfume",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
      price: "₹299",
      rating: 4.0,
      reviews: "6,543",
      source: "Flipkart",
      link: "https://flipkart.com/engage-m1-perfume"
    }
  ]
};

// Universal product categories for intelligent matching
const productCategories = {
  electronics: ['phone', 'mobile', 'smartphone', 'iphone', 'samsung', 'oneplus', 'xiaomi', 'laptop', 'computer', 'tablet', 'ipad'],
  audio: ['headphones', 'earphones', 'speaker', 'bluetooth', 'airpods', 'earbuds'],
  fashion: ['shoes', 'sneakers', 'shirt', 'tshirt', 'jeans', 'dress', 'jacket', 'watch', 'belt'],
  home: ['television', 'tv', 'refrigerator', 'fridge', 'washing machine', 'microwave', 'ac', 'fan'],
  books: ['book', 'novel', 'textbook', 'magazine', 'ebook'],
  beauty: ['perfume', 'cologne', 'lipstick', 'foundation', 'shampoo', 'soap'],
  sports: ['cricket', 'football', 'badminton', 'gym', 'fitness', 'yoga'],
  automotive: ['car', 'bike', 'motorcycle', 'helmet', 'tire']
};

// Function to generate intelligent product results
const generateProductResults = (query) => {
  const searchTerm = query.toLowerCase().trim();
  
  // Determine product category
  let category = 'general';
  let basePrice = 1000;
  let imageCategory = 'tech';
  
  for (const [cat, keywords] of Object.entries(productCategories)) {
    if (keywords.some(keyword => searchTerm.includes(keyword))) {
      category = cat;
      break;
    }
  }
  
  // Set category-specific defaults
  switch (category) {
    case 'electronics':
      basePrice = Math.floor(Math.random() * 50000) + 10000;
      imageCategory = 'technology';
      break;
    case 'fashion':
      basePrice = Math.floor(Math.random() * 5000) + 500;
      imageCategory = 'fashion';
      break;
    case 'home':
      basePrice = Math.floor(Math.random() * 30000) + 5000;
      imageCategory = 'house';
      break;
    case 'books':
      basePrice = Math.floor(Math.random() * 500) + 100;
      imageCategory = 'book';
      break;
    case 'beauty':
      basePrice = Math.floor(Math.random() * 2000) + 200;
      imageCategory = 'beauty';
      break;
    default:
      basePrice = Math.floor(Math.random() * 10000) + 500;
      imageCategory = 'product';
  }
  
  return [
    {
      name: `${query} - Premium Model`,
      image: `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&q=80`,
      price: `₹${(basePrice * 1.2).toLocaleString('en-IN')}`,
      rating: (4.0 + Math.random() * 1).toFixed(1),
      reviews: `${Math.floor(Math.random() * 10000) + 1000}`,
      source: "Amazon",
      link: `https://amazon.in/search?k=${encodeURIComponent(query)}`
    },
    {
      name: `${query} - Standard Model`,
      image: `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&q=80`,
      price: `₹${basePrice.toLocaleString('en-IN')}`,
      rating: (3.8 + Math.random() * 1).toFixed(1),
      reviews: `${Math.floor(Math.random() * 8000) + 500}`,
      source: "Flipkart",
      link: `https://flipkart.com/search?q=${encodeURIComponent(query)}`
    },
    {
      name: `${query} - Budget Model`,
      image: `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&q=80`,
      price: `₹${(basePrice * 0.7).toLocaleString('en-IN')}`,
      rating: (3.5 + Math.random() * 1).toFixed(1),
      reviews: `${Math.floor(Math.random() * 5000) + 200}`,
      source: "Amazon",
      link: `https://amazon.in/search?k=${encodeURIComponent(query)}`
    }
  ];
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
    
    // Check if query matches any of our specific mock data keys
    for (const [key, products] of Object.entries(mockProducts)) {
      if (key.includes(searchKey) || searchKey.includes(key) || 
          key.split(' ').some(word => searchKey.includes(word))) {
        results = [...results, ...products];
        break;
      }
    }
    
    // If no direct match, check category keywords
    if (results.length === 0) {
      for (const [category, keywords] of Object.entries(productCategories)) {
        if (keywords.some(keyword => searchKey.includes(keyword) || keyword.includes(searchKey))) {
          // Use specific category data if available
          if (category === 'electronics' && (searchKey.includes('phone') || searchKey.includes('mobile'))) {
            results = mockProducts['iphone 15'] || [];
          } else if (category === 'electronics' && searchKey.includes('laptop')) {
            results = mockProducts['laptop'] || [];
          } else if (category === 'audio' && searchKey.includes('headphones')) {
            results = mockProducts['headphones'] || [];
          } else if (category === 'fashion' && searchKey.includes('watch')) {
            results = mockProducts['watch'] || [];
          } else if (category === 'home' && searchKey.includes('tv')) {
            results = mockProducts['television'] || [];
          } else {
            // Generate intelligent results for this category
            results = generateProductResults(query);
          }
          break;
        }
      }
    }
    
    // If still no results, generate universal product results
    if (results.length === 0) {
      results = generateProductResults(query);
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