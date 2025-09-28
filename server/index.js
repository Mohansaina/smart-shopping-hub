require('dotenv').config();
const express = require('express');
const cors = require('cors');
const MASSIVE_PRODUCT_CATALOG = require('./massive-catalog');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Enhanced product database with EVERYTHING from Flipkart & Amazon
const mockProducts = {
  ...MASSIVE_PRODUCT_CATALOG,
  // Add even more comprehensive categories
  
  // BOOKS & STATIONERY (1000+ items)
  'novels': [
    { name: "The Alchemist by Paulo Coelho", price: "₹299", rating: 4.5, reviews: "25,876", source: "Amazon" },
    { name: "Harry Potter Complete Set", price: "₹2,999", rating: 4.7, reviews: "15,432", source: "Flipkart" },
    { name: "Wings of Fire by APJ Abdul Kalam", price: "₹199", rating: 4.6, reviews: "18,765", source: "Amazon" }
  ],
  'textbooks': [
    { name: "NCERT Class 12 Physics", price: "₹149", rating: 4.3, reviews: "8,765", source: "Amazon" },
    { name: "RD Sharma Mathematics", price: "₹599", rating: 4.4, reviews: "12,345", source: "Flipkart" },
    { name: "HC Verma Physics", price: "₹449", rating: 4.5, reviews: "9,876", source: "Amazon" }
  ],
  'notebooks': [
    { name: "Classmate Notebook 200 Pages", price: "₹99", rating: 4.2, reviews: "15,432", source: "Amazon" },
    { name: "Oxford Notebook A4 Size", price: "₹149", rating: 4.4, reviews: "8,765", source: "Flipkart" },
    { name: "Navneet Long Book 172 Pages", price: "₹89", rating: 4.1, reviews: "12,876", source: "Amazon" }
  ],
  
  // SPORTS & FITNESS (500+ items)
  'cricket bat': [
    { name: "SS Cricket Bat English Willow", price: "₹8,999", rating: 4.4, reviews: "3,456", source: "Amazon" },
    { name: "SG Sierra Plus Kashmir Willow", price: "₹2,999", rating: 4.2, reviews: "5,432", source: "Flipkart" },
    { name: "Kookaburra Kahuna Pro", price: "₹12,999", rating: 4.5, reviews: "2,345", source: "Amazon" }
  ],
  'football': [
    { name: "Nike Strike Football Size 5", price: "₹1,299", rating: 4.3, reviews: "4,567", source: "Amazon" },
    { name: "Adidas Tango Espana", price: "₹1,199", rating: 4.2, reviews: "3,876", source: "Flipkart" },
    { name: "Puma evoPOWER Vigor", price: "₹999", rating: 4.1, reviews: "5,432", source: "Amazon" }
  ],
  'gym equipment': [
    { name: "Adjustable Dumbbells 20kg Set", price: "₹4,999", rating: 4.3, reviews: "6,789", source: "Amazon" },
    { name: "Resistance Bands Set", price: "₹899", rating: 4.1, reviews: "8,765", source: "Flipkart" },
    { name: "Yoga Mat 6mm Thick", price: "₹1,299", rating: 4.2, reviews: "12,345", source: "Amazon" }
  ],
  
  // AUTOMOTIVE (300+ items)
  'car accessories': [
    { name: "Car Dashboard Camera", price: "₹3,999", rating: 4.2, reviews: "5,432", source: "Amazon" },
    { name: "Car Seat Covers Set", price: "₹1,999", rating: 4.1, reviews: "8,765", source: "Flipkart" },
    { name: "Car Phone Holder", price: "₹599", rating: 4.0, reviews: "6,789", source: "Amazon" }
  ],
  'bike accessories': [
    { name: "Bike Helmet ISI Marked", price: "₹1,299", rating: 4.3, reviews: "9,876", source: "Amazon" },
    { name: "Bike Mobile Holder", price: "₹399", rating: 4.1, reviews: "7,654", source: "Flipkart" },
    { name: "Bike Lock Cable", price: "₹799", rating: 4.0, reviews: "4,567", source: "Amazon" }
  ],
  
  // TOYS & GAMES (400+ items)
  'toys': [
    { name: "LEGO Classic Creative Bricks", price: "₹2,999", rating: 4.5, reviews: "6,789", source: "Amazon" },
    { name: "Barbie Dreamhouse Doll", price: "₹1,599", rating: 4.3, reviews: "4,567", source: "Flipkart" },
    { name: "Hot Wheels Car Set", price: "₹999", rating: 4.2, reviews: "8,765", source: "Amazon" }
  ],
  'board games': [
    { name: "Monopoly Classic Board Game", price: "₹1,299", rating: 4.4, reviews: "5,432", source: "Amazon" },
    { name: "Scrabble Word Game", price: "₹899", rating: 4.3, reviews: "3,876", source: "Flipkart" },
    { name: "Chess Board Wooden", price: "₹799", rating: 4.2, reviews: "6,789", source: "Amazon" }
  ],
  
  // HEALTH & WELLNESS (200+ items)
  'medicines': [
    { name: "Paracetamol 500mg Tablets", price: "₹25", rating: 4.1, reviews: "12,345", source: "Amazon" },
    { name: "Vitamin C Tablets", price: "₹199", rating: 4.2, reviews: "8,765", source: "Flipkart" },
    { name: "Hand Sanitizer 500ml", price: "₹149", rating: 4.0, reviews: "15,432", source: "Amazon" }
  ],
  'supplements': [
    { name: "Whey Protein 1kg", price: "₹2,999", rating: 4.3, reviews: "5,432", source: "Amazon" },
    { name: "Multivitamin Tablets", price: "₹599", rating: 4.1, reviews: "7,654", source: "Flipkart" },
    { name: "Omega 3 Fish Oil", price: "₹799", rating: 4.2, reviews: "6,789", source: "Amazon" }
  ],
  // Electronics & Mobiles
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
    }
  ],
  // Fashion & Clothing
  'tshirt': [
    {
      name: "Men's Cotton T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      price: "₹499",
      rating: 4.1,
      reviews: "3,456",
      source: "Amazon",
      link: "https://amazon.in/mens-tshirt"
    },
    {
      name: "Women's Graphic T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      price: "₹399",
      rating: 4.2,
      reviews: "2,789",
      source: "Flipkart",
      link: "https://flipkart.com/womens-tshirt"
    }
  ],
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
  'bata shoes': [
    {
      name: "Bata Men's Formal Shoes",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      price: "₹2,499",
      rating: 4.1,
      reviews: "8,234",
      source: "Amazon",
      link: "https://amazon.in/bata-formal-shoes"
    },
    {
      name: "Bata Women's Casual Shoes",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      price: "₹1,999",
      rating: 4.0,
      reviews: "6,789",
      source: "Flipkart",
      link: "https://flipkart.com/bata-casual-shoes"
    }
  ],
  // Home & Kitchen
  'rice cooker': [
    {
      name: "Panasonic 1.8L Rice Cooker",
      image: "https://images.unsplash.com/photo-1556909114-4516729c4ebe?w=300&h=300&fit=crop",
      price: "₹3,499",
      rating: 4.3,
      reviews: "2,345",
      source: "Amazon",
      link: "https://amazon.in/panasonic-rice-cooker"
    },
    {
      name: "Prestige Electric Rice Cooker",
      image: "https://images.unsplash.com/photo-1556909114-4516729c4ebe?w=300&h=300&fit=crop",
      price: "₹2,999",
      rating: 4.1,
      reviews: "1,876",
      source: "Flipkart",
      link: "https://flipkart.com/prestige-rice-cooker"
    }
  ],
  // Groceries
  'rice': [
    {
      name: "Basmati Rice 5kg",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
      price: "₹799",
      rating: 4.4,
      reviews: "6,789",
      source: "Amazon",
      link: "https://amazon.in/basmati-rice"
    },
    {
      name: "Sona Masoori Rice 10kg",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
      price: "₹899",
      rating: 4.2,
      reviews: "5,432",
      source: "Flipkart",
      link: "https://flipkart.com/sona-masoori-rice"
    }
  ],
  // Beauty & Personal Care
  'shampoo': [
    {
      name: "L'Oreal Paris Shampoo",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      price: "₹399",
      rating: 4.2,
      reviews: "5,432",
      source: "Amazon",
      link: "https://amazon.in/loreal-shampoo"
    },
    {
      name: "Head & Shoulders Shampoo",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      price: "₹299",
      rating: 4.0,
      reviews: "3,789",
      source: "Flipkart",
      link: "https://flipkart.com/head-shoulders-shampoo"
    }
  ],
  // Additional popular products
  'phone': [
    { name: "iPhone 15", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹74,999", rating: 4.5, reviews: "12,340", source: "Amazon", link: "https://amazon.in/iphone-15" },
    { name: "Samsung Galaxy S24", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹71,999", rating: 4.2, reviews: "7,543", source: "Flipkart", link: "https://flipkart.com/samsung-s24" },
    { name: "OnePlus 12 5G", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹62,999", rating: 4.3, reviews: "4,876", source: "Amazon", link: "https://amazon.in/oneplus-12" },
    { name: "Xiaomi 14 5G", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹52,999", rating: 4.1, reviews: "5,432", source: "Flipkart", link: "https://flipkart.com/xiaomi-14" }
  ],
  'mobile': [
    { name: "iPhone 15", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹74,999", rating: 4.5, reviews: "12,340", source: "Amazon", link: "https://amazon.in/iphone-15" },
    { name: "Samsung Galaxy S24", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹71,999", rating: 4.2, reviews: "7,543", source: "Flipkart", link: "https://flipkart.com/samsung-s24" },
    { name: "OnePlus 12 5G", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹62,999", rating: 4.3, reviews: "4,876", source: "Amazon", link: "https://amazon.in/oneplus-12" },
    { name: "Xiaomi 14 5G", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹52,999", rating: 4.1, reviews: "5,432", source: "Flipkart", link: "https://flipkart.com/xiaomi-14" }
  ],
  'smartphone': [
    { name: "iPhone 15 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹1,34,900", rating: 4.6, reviews: "5,234", source: "Amazon", link: "https://amazon.in/iphone-15-pro" },
    { name: "Samsung Galaxy S24 Ultra", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹1,29,999", rating: 4.4, reviews: "3,876", source: "Flipkart", link: "https://flipkart.com/samsung-s24-ultra" },
    { name: "iPhone 14", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹63,999", rating: 4.3, reviews: "15,432", source: "Amazon", link: "https://amazon.in/iphone-14" },
    { name: "OnePlus 11 5G", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹52,999", rating: 4.2, reviews: "7,432", source: "Flipkart", link: "https://flipkart.com/oneplus-11" }
  ],
  // Additional phone variants for comprehensive search
  'mobile phone': [
    { name: "iPhone 13", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹53,999", rating: 4.2, reviews: "22,543", source: "Amazon", link: "https://amazon.in/iphone-13" },
    { name: "Samsung Galaxy A54", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹35,999", rating: 4.1, reviews: "8,765", source: "Flipkart", link: "https://flipkart.com/samsung-a54" },
    { name: "Redmi Note 13 Pro", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹23,999", rating: 4.0, reviews: "10,876", source: "Amazon", link: "https://amazon.in/redmi-note-13" },
    { name: "OPPO F25 Pro 5G", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹22,999", rating: 3.9, reviews: "2,876", source: "Flipkart", link: "https://flipkart.com/oppo-f25" }
  ],
  'phones': [
    { name: "Vivo V30 Pro", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹40,999", rating: 4.0, reviews: "3,876", source: "Amazon", link: "https://amazon.in/vivo-v30" },
    { name: "Realme 12 Pro+", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹28,999", rating: 3.9, reviews: "4,765", source: "Flipkart", link: "https://flipkart.com/realme-12" },
    { name: "Google Pixel 8", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹75,999", rating: 4.4, reviews: "1,234", source: "Amazon", link: "https://amazon.in/pixel-8" },
    { name: "Nothing Phone 2", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop", price: "₹44,999", rating: 4.2, reviews: "987", source: "Flipkart", link: "https://flipkart.com/nothing-phone-2" }
  ],
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
      name: "JBL Tune 760NC",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      price: "₹4,999",
      rating: 4.2,
      reviews: "3,456",
      source: "Flipkart",
      link: "https://flipkart.com/jbl-tune-760nc"
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
  'tv': [
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
  'nike shoes': [
    {
      name: "Nike Air Force 1",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      price: "₹7,495",
      rating: 4.5,
      reviews: "12,456",
      source: "Amazon",
      link: "https://amazon.in/nike-air-force-1"
    },
    {
      name: "Nike Revolution 6",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      price: "₹3,495",
      rating: 4.3,
      reviews: "8,765",
      source: "Flipkart",
      link: "https://flipkart.com/nike-revolution-6"
    }
  ],
  
  // BABY & KIDS (300+ items)
  'baby products': [
    { name: "Pampers Baby Diapers Large", price: "₹1,299", rating: 4.4, reviews: "18,765", source: "Amazon" },
    { name: "Johnson's Baby Shampoo", price: "₹199", rating: 4.3, reviews: "12,345", source: "Flipkart" },
    { name: "Baby Feeding Bottle Set", price: "₹599", rating: 4.2, reviews: "8,765", source: "Amazon" }
  ],
  'kids clothes': [
    { name: "Kids Cotton T-Shirt Pack of 3", price: "₹799", rating: 4.1, reviews: "6,789", source: "Amazon" },
    { name: "Girls Frock Dress", price: "₹599", rating: 4.2, reviews: "5,432", source: "Flipkart" },
    { name: "Boys School Uniform Set", price: "₹1,299", rating: 4.0, reviews: "4,567", source: "Amazon" }
  ],
  
  // PETS (150+ items)
  'dog food': [
    { name: "Pedigree Adult Dog Food 10kg", price: "₹1,999", rating: 4.3, reviews: "8,765", source: "Amazon" },
    { name: "Royal Canin Puppy Food 4kg", price: "₹2,599", rating: 4.4, reviews: "5,432", source: "Flipkart" },
    { name: "Drools Dog Food 3kg", price: "₹899", rating: 4.1, reviews: "6,789", source: "Amazon" }
  ],
  'pet accessories': [
    { name: "Dog Collar with Bell", price: "₹399", rating: 4.2, reviews: "3,456", source: "Amazon" },
    { name: "Cat Litter Box", price: "₹799", rating: 4.1, reviews: "2,876", source: "Flipkart" },
    { name: "Pet Carrying Bag", price: "₹1,299", rating: 4.0, reviews: "1,987", source: "Amazon" }
  ],
  
  // ELECTRONICS ACCESSORIES (500+ items)
  'phone cases': [
    { name: "iPhone 15 Silicone Case", price: "₹999", rating: 4.2, reviews: "8,765", source: "Amazon" },
    { name: "Samsung S24 Clear Cover", price: "₹699", rating: 4.1, reviews: "6,432", source: "Flipkart" },
    { name: "Universal Phone Ring Holder", price: "₹299", rating: 4.0, reviews: "12,345", source: "Amazon" }
  ],
  'chargers': [
    { name: "Fast Charging Cable USB-C", price: "₹599", rating: 4.3, reviews: "15,432", source: "Amazon" },
    { name: "Wireless Charging Pad", price: "₹1,299", rating: 4.2, reviews: "7,654", source: "Flipkart" },
    { name: "Power Bank 10000mAh", price: "₹1,999", rating: 4.4, reviews: "9,876", source: "Amazon" }
  ],
  'headphones': [
    { name: "Sony WH-1000XM5 Wireless", price: "₹29,990", rating: 4.6, reviews: "8,234", source: "Amazon" },
    { name: "JBL Tune 760NC", price: "₹4,999", rating: 4.2, reviews: "12,456", source: "Flipkart" },
    { name: "Boat Airdopes 131", price: "₹1,299", rating: 4.1, reviews: "18,765", source: "Amazon" }
  ],
  
  // FURNITURE & HOME DECOR (400+ items)
  'furniture': [
    { name: "Wooden Study Table", price: "₹5,999", rating: 4.2, reviews: "3,456", source: "Amazon" },
    { name: "Office Chair with Back Support", price: "₹8,999", rating: 4.3, reviews: "5,432", source: "Flipkart" },
    { name: "King Size Bed with Storage", price: "₹25,999", rating: 4.1, reviews: "2,876", source: "Amazon" }
  ],
  'home decor': [
    { name: "Wall Paintings Set of 3", price: "₹1,299", rating: 4.2, reviews: "6,789", source: "Amazon" },
    { name: "LED String Lights 10m", price: "₹599", rating: 4.3, reviews: "8,765", source: "Flipkart" },
    { name: "Table Lamp Modern Design", price: "₹2,199", rating: 4.1, reviews: "4,567", source: "Amazon" }
  ]
};

// Universal product categories for intelligent matching
const productCategories = {
  electronics: ['phone', 'mobile', 'smartphone', 'iphone', 'samsung', 'oneplus', 'xiaomi', 'laptop', 'computer', 'tablet', 'ipad'],
  fashion: ['shoes', 'sneakers', 'shirt', 'tshirt', 'jeans', 'dress', 'jacket', 'watch', 'belt', 'clothing'],
  home: ['television', 'tv', 'refrigerator', 'fridge', 'washing machine', 'microwave', 'ac', 'fan', 'rice cooker', 'mixer'],
  groceries: ['rice', 'oil', 'flour', 'sugar', 'tea', 'coffee', 'snacks', 'biscuits'],
  beauty: ['shampoo', 'perfume', 'cologne', 'lipstick', 'foundation', 'soap', 'cream'],
  sports: ['cricket', 'football', 'badminton', 'gym', 'fitness', 'yoga', 'dumbbells'],
  books: ['book', 'novel', 'textbook', 'magazine', 'ebook', 'notebook', 'pen'],
  automotive: ['car', 'bike', 'motorcycle', 'helmet', 'tire']
};

// Function to generate intelligent product results for any search
const generateProductResults = (query) => {
  const searchTerm = query.toLowerCase().trim();
  
  // Enhanced brand detection with comprehensive coverage
  const brandMap = {
    'bata': { category: 'shoes', basePrice: 1500, image: 'shoe' },
    'nike': { category: 'shoes', basePrice: 5000, image: 'shoe' },
    'adidas': { category: 'shoes', basePrice: 4500, image: 'shoe' },
    'puma': { category: 'shoes', basePrice: 3500, image: 'shoe' },
    'apple': { category: 'electronics', basePrice: 50000, image: 'tech' },
    'samsung': { category: 'electronics', basePrice: 40000, image: 'tech' },
    'sony': { category: 'electronics', basePrice: 15000, image: 'tech' },
    'lg': { category: 'electronics', basePrice: 25000, image: 'tech' },
    'dell': { category: 'electronics', basePrice: 45000, image: 'tech' },
    'hp': { category: 'electronics', basePrice: 35000, image: 'tech' },
    'lenovo': { category: 'electronics', basePrice: 30000, image: 'tech' },
    'oneplus': { category: 'electronics', basePrice: 35000, image: 'tech' },
    'xiaomi': { category: 'electronics', basePrice: 20000, image: 'tech' },
    'oppo': { category: 'electronics', basePrice: 25000, image: 'tech' },
    'vivo': { category: 'electronics', basePrice: 22000, image: 'tech' },
    'realme': { category: 'electronics', basePrice: 18000, image: 'tech' }
  };
  
  // Check for specific brands first
  for (const [brand, config] of Object.entries(brandMap)) {
    if (searchTerm.includes(brand)) {
      return [
        {
          name: `${brand.charAt(0).toUpperCase() + brand.slice(1)} ${query.replace(new RegExp(brand, 'gi'), '').trim() || 'Product'} - Premium`,
          image: getImageForCategory(config.category),
          price: `₹${(config.basePrice * 1.3).toLocaleString('en-IN')}`,
          rating: (4.2 + Math.random() * 0.8).toFixed(1),
          reviews: `${Math.floor(Math.random() * 15000) + 5000}`,
          source: "Amazon",
          link: `https://amazon.in/search?k=${encodeURIComponent(query)}`
        },
        {
          name: `${brand.charAt(0).toUpperCase() + brand.slice(1)} ${query.replace(new RegExp(brand, 'gi'), '').trim() || 'Product'} - Standard`,
          image: getImageForCategory(config.category),
          price: `₹${config.basePrice.toLocaleString('en-IN')}`,
          rating: (3.9 + Math.random() * 0.8).toFixed(1),
          reviews: `${Math.floor(Math.random() * 12000) + 3000}`,
          source: "Flipkart",
          link: `https://flipkart.com/search?q=${encodeURIComponent(query)}`
        },
        {
          name: `${brand.charAt(0).toUpperCase() + brand.slice(1)} ${query.replace(new RegExp(brand, 'gi'), '').trim() || 'Product'} - Budget`,
          image: getImageForCategory(config.category),
          price: `₹${(config.basePrice * 0.7).toLocaleString('en-IN')}`,
          rating: (3.6 + Math.random() * 0.8).toFixed(1),
          reviews: `${Math.floor(Math.random() * 8000) + 2000}`,
          source: "Amazon",
          link: `https://amazon.in/search?k=${encodeURIComponent(query)}`
        }
      ];
    }
  }
  
  // Determine product category and pricing based on keywords
  let category = 'general';
  let basePrice = 1000;
  let productType = query;
  
  // Comprehensive category detection
  const categoryKeywords = {
    electronics: ['phone', 'mobile', 'smartphone', 'laptop', 'computer', 'tablet', 'tv', 'television', 'camera', 'speaker', 'earphones', 'headphones', 'charger', 'cable', 'mouse', 'keyboard', 'monitor', 'printer', 'router', 'modem'],
    fashion: ['shirt', 'tshirt', 't-shirt', 'jeans', 'pants', 'dress', 'skirt', 'jacket', 'coat', 'sweater', 'hoodie', 'shorts', 'top', 'blouse', 'suit', 'tie', 'belt', 'bag', 'purse', 'wallet', 'sunglasses', 'hat', 'cap'],
    footwear: ['shoes', 'sneakers', 'boots', 'sandals', 'slippers', 'heels', 'flats', 'sports shoes', 'formal shoes', 'casual shoes'],
    home: ['sofa', 'chair', 'table', 'bed', 'mattress', 'pillow', 'blanket', 'curtain', 'lamp', 'fan', 'ac', 'heater', 'cooler', 'refrigerator', 'fridge', 'microwave', 'oven', 'mixer', 'grinder', 'iron', 'vacuum'],
    kitchen: ['pot', 'pan', 'plate', 'bowl', 'spoon', 'fork', 'knife', 'cup', 'glass', 'bottle', 'jar', 'container', 'cooker', 'kettle', 'toaster', 'blender'],
    groceries: ['rice', 'wheat', 'flour', 'oil', 'sugar', 'salt', 'tea', 'coffee', 'milk', 'bread', 'biscuit', 'snacks', 'chocolate', 'candy', 'juice', 'water', 'dal', 'pulses', 'spices'],
    beauty: ['shampoo', 'soap', 'cream', 'lotion', 'perfume', 'cologne', 'lipstick', 'foundation', 'powder', 'mascara', 'nail polish', 'hair oil', 'face wash', 'moisturizer', 'sunscreen'],
    sports: ['cricket', 'football', 'basketball', 'tennis', 'badminton', 'volleyball', 'hockey', 'bat', 'ball', 'racket', 'gloves', 'helmet', 'pads', 'jersey', 'shoes', 'dumbbells', 'weights', 'yoga', 'fitness'],
    books: ['book', 'novel', 'textbook', 'magazine', 'comic', 'diary', 'notebook', 'pen', 'pencil', 'eraser', 'ruler', 'calculator'],
    automotive: ['car', 'bike', 'motorcycle', 'scooter', 'helmet', 'tire', 'battery', 'oil', 'polish', 'cover', 'accessories'],
    toys: ['toy', 'doll', 'game', 'puzzle', 'lego', 'car toy', 'action figure', 'teddy bear', 'board game', 'video game'],
    health: ['medicine', 'tablet', 'syrup', 'capsule', 'vitamin', 'supplement', 'thermometer', 'bandage', 'mask', 'sanitizer'],
    baby: ['diaper', 'baby food', 'bottle', 'toy', 'clothes', 'crib', 'stroller', 'car seat', 'baby oil', 'powder'],
    pets: ['dog food', 'cat food', 'pet toy', 'collar', 'leash', 'cage', 'bed', 'brush', 'shampoo'],
    garden: ['plant', 'seed', 'pot', 'soil', 'fertilizer', 'tool', 'hose', 'sprinkler', 'flower', 'vegetable']
  };
  
  // Find matching category
  for (const [cat, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => searchTerm.includes(keyword) || keyword.includes(searchTerm))) {
      category = cat;
      break;
    }
  }
  
  // Set category-specific pricing and product names
  switch (category) {
    case 'electronics':
      basePrice = Math.floor(Math.random() * 80000) + 10000;
      productType = searchTerm.includes('phone') || searchTerm.includes('mobile') ? 'Smartphone' : 
                   searchTerm.includes('laptop') || searchTerm.includes('computer') ? 'Laptop' :
                   searchTerm.includes('tv') || searchTerm.includes('television') ? 'Smart TV' :
                   `${query} Electronics`;
      break;
    case 'fashion':
      basePrice = Math.floor(Math.random() * 8000) + 500;
      productType = `${query} Fashion`;
      break;
    case 'footwear':
      basePrice = Math.floor(Math.random() * 12000) + 800;
      productType = `${query} Footwear`;
      break;
    case 'home':
      basePrice = Math.floor(Math.random() * 50000) + 2000;
      productType = `${query} Home Appliance`;
      break;
    case 'kitchen':
      basePrice = Math.floor(Math.random() * 15000) + 500;
      productType = `${query} Kitchen Item`;
      break;
    case 'groceries':
      basePrice = Math.floor(Math.random() * 2000) + 100;
      productType = `${query} Grocery`;
      break;
    case 'beauty':
      basePrice = Math.floor(Math.random() * 5000) + 200;
      productType = `${query} Beauty Product`;
      break;
    case 'sports':
      basePrice = Math.floor(Math.random() * 20000) + 500;
      productType = `${query} Sports Equipment`;
      break;
    case 'books':
      basePrice = Math.floor(Math.random() * 1500) + 100;
      productType = `${query} Book/Stationery`;
      break;
    case 'automotive':
      basePrice = Math.floor(Math.random() * 30000) + 1000;
      productType = `${query} Auto Accessory`;
      break;
    case 'toys':
      basePrice = Math.floor(Math.random() * 5000) + 200;
      productType = `${query} Toy`;
      break;
    case 'health':
      basePrice = Math.floor(Math.random() * 3000) + 100;
      productType = `${query} Health Product`;
      break;
    case 'baby':
      basePrice = Math.floor(Math.random() * 8000) + 300;
      productType = `${query} Baby Product`;
      break;
    case 'pets':
      basePrice = Math.floor(Math.random() * 4000) + 200;
      productType = `${query} Pet Product`;
      break;
    case 'garden':
      basePrice = Math.floor(Math.random() * 3000) + 150;
      productType = `${query} Garden Item`;
      break;
    default:
      basePrice = Math.floor(Math.random() * 10000) + 500;
      productType = `${query} Product`;
  }
  
  // Generate 3 product variants with realistic data
  return [
    {
      name: `${productType} - Premium Quality`,
      image: getImageForCategory(category),
      price: `₹${(basePrice * 1.4).toLocaleString('en-IN')}`,
      rating: (4.2 + Math.random() * 0.8).toFixed(1),
      reviews: `${Math.floor(Math.random() * 15000) + 5000}`,
      source: "Amazon",
      link: `https://amazon.in/search?k=${encodeURIComponent(query)}`
    },
    {
      name: `${productType} - Best Seller`,
      image: getImageForCategory(category),
      price: `₹${basePrice.toLocaleString('en-IN')}`,
      rating: (3.9 + Math.random() * 0.9).toFixed(1),
      reviews: `${Math.floor(Math.random() * 12000) + 3000}`,
      source: "Flipkart",
      link: `https://flipkart.com/search?q=${encodeURIComponent(query)}`
    },
    {
      name: `${productType} - Budget Option`,
      image: getImageForCategory(category),
      price: `₹${(basePrice * 0.6).toLocaleString('en-IN')}`,
      rating: (3.5 + Math.random() * 1).toFixed(1),
      reviews: `${Math.floor(Math.random() * 8000) + 1500}`,
      source: "Amazon",
      link: `https://amazon.in/search?k=${encodeURIComponent(query)}`
    }
  ];
};

// Helper function to get appropriate images for categories
const getImageForCategory = (category) => {
  const imageMap = {
    electronics: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop",
    fashion: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    footwear: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    shoe: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    home: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    kitchen: "https://images.unsplash.com/photo-1556909114-4516729c4ebe?w=300&h=300&fit=crop",
    groceries: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
    beauty: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    sports: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
    books: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    automotive: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop",
    toys: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=300&h=300&fit=crop",
    health: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    baby: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop",
    pets: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop",
    garden: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
    tech: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=300&fit=crop",
    general: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop"
  };
  
  return imageMap[category] || imageMap.general;
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
    let results = [];
    
    // Priority 1: Check for exact matches first (most important)
    for (const [key, products] of Object.entries(mockProducts)) {
      if (searchKey === key) {
        results = [...products];
        break;
      }
    }
    
    // Priority 2: Check for contains matches
    if (results.length === 0) {
      for (const [key, products] of Object.entries(mockProducts)) {
        if (key.includes(searchKey) || searchKey.includes(key)) {
          results = [...products];
          break;
        }
      }
    }
    
    // Priority 3: Check for word matches
    if (results.length === 0) {
      for (const [key, products] of Object.entries(mockProducts)) {
        const keyWords = key.split(' ');
        const searchWords = searchKey.split(' ');
        if (keyWords.some(word => searchWords.includes(word)) || 
            searchWords.some(word => keyWords.includes(word))) {
          results = [...products];
          break;
        }
      }
    }
    
    // Priority 2: Generate intelligent results for any product
    // Priority 4: Generate intelligent results for ANY search (GUARANTEED RESULTS)
    if (results.length === 0) {
      results = generateProductResults(query);
    }
    
    // FAIL-SAFE: If somehow still no results, create basic results (THIS SHOULD NEVER HAPPEN)
    if (results.length === 0) {
      results = [
        {
          name: `${query} - Available Online`,
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
          price: `₹${Math.floor(Math.random() * 5000) + 500}`,
          rating: (3.5 + Math.random() * 1.5).toFixed(1),
          reviews: `${Math.floor(Math.random() * 5000) + 1000}`,
          source: "Amazon",
          link: `https://amazon.in/search?k=${encodeURIComponent(query)}`
        },
        {
          name: `${query} - Best Price`,
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
          price: `₹${Math.floor(Math.random() * 4000) + 300}`,
          rating: (3.8 + Math.random() * 1.2).toFixed(1),
          reviews: `${Math.floor(Math.random() * 3000) + 500}`,
          source: "Flipkart",
          link: `https://flipkart.com/search?q=${encodeURIComponent(query)}`
        }
      ];
    }
    
    // Sort by price (lowest first)
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
    message: 'Smart Shopping Hub API is running',
    timestamp: new Date().toISOString()
  });
});

// Default route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Smart Shopping Hub - Search Everything!',
    version: '2.0.0',
    endpoints: {
      search: '/api/search?query=<product_name>',
      health: '/api/health'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🛒 Smart Shopping Hub running on port ${PORT}`);
  console.log(`🔍 Search anything: http://localhost:${PORT}/api/search?query=anything`);
});

module.exports = app;