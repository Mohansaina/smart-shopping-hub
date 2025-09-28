// Comprehensive Product Catalog for Smart Shopping Hub
// Contains products from Amazon and Flipkart across all categories

const comprehensiveCatalog = {
  // MOBILE PHONES
  'mobile phones': [
    // APPLE IPHONES
    { name: "iPhone 15 Pro Max", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹1,54,900", rating: 4.7, reviews: "12,345", source: "Amazon", link: "https://www.amazon.in/s?k=iphone+15+pro+max" },
    { name: "iPhone 15 Pro Max", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹1,49,900", rating: 4.6, reviews: "9,876", source: "Flipkart", link: "https://www.flipkart.com/search?q=iphone+15+pro+max" },
    { name: "iPhone 15 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹1,34,900", rating: 4.6, reviews: "8,765", source: "Amazon", link: "https://www.amazon.in/s?k=iphone+15+pro" },
    { name: "iPhone 15 Pro", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹1,29,900", rating: 4.5, reviews: "7,654", source: "Flipkart", link: "https://www.flipkart.com/search?q=iphone+15+pro" },
    { name: "iPhone 15", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹74,999", rating: 4.5, reviews: "15,432", source: "Amazon", link: "https://www.amazon.in/s?k=iphone+15" },
    { name: "iPhone 15", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop", price: "₹72,999", rating: 4.4, reviews: "12,345", source: "Flipkart", link: "https://www.flipkart.com/search?q=iphone+15" },
    
    // SAMSUNG GALAXY
    { name: "Samsung Galaxy S24 Ultra", image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300&h=300&fit=crop", price: "₹1,29,999", rating: 4.6, reviews: "11,234", source: "Amazon", link: "https://www.amazon.in/s?k=samsung+galaxy+s24+ultra" },
    { name: "Samsung Galaxy S24 Ultra", image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300&h=300&fit=crop", price: "₹1,24,999", rating: 4.5, reviews: "9,876", source: "Flipkart", link: "https://www.flipkart.com/search?q=samsung+galaxy+s24+ultra" },
    { name: "Samsung Galaxy S24", image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300&h=300&fit=crop", price: "₹74,999", rating: 4.4, reviews: "8,765", source: "Amazon", link: "https://www.amazon.in/s?k=samsung+galaxy+s24" },
    { name: "Samsung Galaxy S24", image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300&h=300&fit=crop", price: "₹71,999", rating: 4.3, reviews: "7,654", source: "Flipkart", link: "https://www.flipkart.com/search?q=samsung+galaxy+s24" },
    
    // POCO PHONES
    { name: "POCO X6 Pro 5G", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", price: "₹24,999", rating: 4.3, reviews: "8,765", source: "Amazon", link: "https://www.amazon.in/s?k=poco+x6+pro" },
    { name: "POCO F6 5G", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop", price: "₹28,999", rating: 4.4, reviews: "6,432", source: "Flipkart", link: "https://www.flipkart.com/search?q=poco+f6" },
    { name: "POCO M6 Pro 5G", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=300&h=300&fit=crop", price: "₹12,999", rating: 4.1, reviews: "9,876", source: "Amazon", link: "https://www.amazon.in/s?k=poco+m6+pro" },
    { name: "POCO C65", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=300&fit=crop", price: "₹8,999", rating: 4.0, reviews: "5,432", source: "Flipkart", link: "https://www.flipkart.com/search?q=poco+c65" },
    
    // REALME PHONES
    { name: "Realme 12 Pro+", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300&h=300&fit=crop", price: "₹29,999", rating: 4.3, reviews: "7,654", source: "Amazon", link: "https://www.amazon.in/s?k=realme+12+pro" },
    { name: "Realme GT 6T", image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=300&h=300&fit=crop", price: "₹32,999", rating: 4.4, reviews: "5,876", source: "Flipkart", link: "https://www.flipkart.com/search?q=realme+gt+6t" },
    
    // VIVO PHONES
    { name: "Vivo V30 Pro", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop", price: "₹41,999", rating: 4.3, reviews: "6,543", source: "Amazon", link: "https://www.amazon.in/s?k=vivo+v30+pro" },
    { name: "Vivo X100", image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=300&h=300&fit=crop", price: "₹63,999", rating: 4.5, reviews: "4,321", source: "Flipkart", link: "https://www.flipkart.com/search?q=vivo+x100" },
    
    // OPPO PHONES
    { name: "OPPO Reno 12 Pro", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop", price: "₹36,999", rating: 4.2, reviews: "5,876", source: "Amazon", link: "https://www.amazon.in/s?k=oppo+reno+12+pro" },
    { name: "OPPO Find X7", image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300&h=300&fit=crop", price: "₹69,999", rating: 4.4, reviews: "3,654", source: "Flipkart", link: "https://www.flipkart.com/search?q=oppo+find+x7" },
    
    // ONEPLUS PHONES
    { name: "OnePlus 12", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop", price: "₹52,999", rating: 4.4, reviews: "6,789", source: "Amazon", link: "https://www.amazon.in/s?k=oneplus+12" },
    { name: "OnePlus 12", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop", price: "₹51,999", rating: 4.3, reviews: "5,432", source: "Flipkart", link: "https://www.flipkart.com/search?q=oneplus+12" }
  ],
  
  // LAPTOPS
  'laptops': [
    { name: "MacBook Air M2", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop", price: "₹1,14,900", rating: 4.7, reviews: "15,432", source: "Amazon", link: "https://www.amazon.in/s?k=macbook+air+m2" },
    { name: "MacBook Air M2", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop", price: "₹1,09,900", rating: 4.6, reviews: "12,345", source: "Flipkart", link: "https://www.flipkart.com/search?q=macbook+air+m2" },
    { name: "Dell XPS 13", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop", price: "₹89,990", rating: 4.4, reviews: "8,765", source: "Amazon", link: "https://www.amazon.in/s?k=dell+xps+13" },
    { name: "HP Spectre x360", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop", price: "₹1,24,990", rating: 4.5, reviews: "7,654", source: "Flipkart", link: "https://www.flipkart.com/search?q=hp+spectre+x360" }
  ],
  
  // FASHION
  'tshirts': [
    { name: "Allen Solly Men's Polo T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop", price: "₹1,299", rating: 4.2, reviews: "3,456", source: "Amazon", link: "https://www.amazon.in/s?k=allen+solly+men+polo+tshirt" },
    { name: "Levi's Men's Regular Fit T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop", price: "₹1,499", rating: 4.3, reviews: "2,789", source: "Flipkart", link: "https://www.flipkart.com/search?q=levis+men+regular+fit+tshirt" }
  ],
  
  // FOOTWEAR
  'shoes': [
    { name: "Nike Air Force 1", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop", price: "₹7,495", rating: 4.5, reviews: "12,456", source: "Amazon", link: "https://www.amazon.in/s?k=nike+air+force+1" },
    { name: "Nike Air Force 1", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop", price: "₹7,295", rating: 4.4, reviews: "9,876", source: "Flipkart", link: "https://www.flipkart.com/search?q=nike+air+force+1" },
    { name: "Bata Men's Formal Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop", price: "₹2,499", rating: 4.1, reviews: "8,234", source: "Amazon", link: "https://www.amazon.in/s?k=bata+men+formal+shoes" }
  ],
  
  // HOME APPLIANCES
  'rice cooker': [
    { name: "Panasonic 1.8L Rice Cooker", image: "https://images.unsplash.com/photo-1556909114-4516729c4ebe?w=300&h=300&fit=crop", price: "₹3,499", rating: 4.3, reviews: "2,345", source: "Amazon", link: "https://www.amazon.in/s?k=panasonic+1.8l+rice+cooker" },
    { name: "Prestige Electric Rice Cooker", image: "https://images.unsplash.com/photo-1556909114-4516729c4ebe?w=300&h=300&fit=crop", price: "₹2,999", rating: 4.1, reviews: "1,876", source: "Flipkart", link: "https://www.flipkart.com/search?q=prestige+electric+rice+cooker" }
  ],
  
  // TELEVISIONS
  'tv': [
    { name: "Samsung 55\" 4K Smart TV", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop", price: "₹54,999", rating: 4.3, reviews: "7,654", source: "Amazon", link: "https://www.amazon.in/s?k=samsung+55+4k+smart+tv" },
    { name: "LG 55\" OLED TV", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop", price: "₹89,999", rating: 4.6, reviews: "5,432", source: "Flipkart", link: "https://www.flipkart.com/search?q=lg+55+oled+tv" }
  ],
  
  // GROCERIES
  'rice': [
    { name: "Daawat Basmati Rice 5kg", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop", price: "₹799", rating: 4.4, reviews: "6,789", source: "Amazon", link: "https://www.amazon.in/s?k=daawat+basmati+rice+5kg" },
    { name: "India Gate Basmati Rice 5kg", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop", price: "₹899", rating: 4.2, reviews: "5,432", source: "Flipkart", link: "https://www.flipkart.com/search?q=india+gate+basmati+rice+5kg" }
  ],
  
  // BEAUTY & PERSONAL CARE
  'shampoo': [
    { name: "Dove Intense Repair Shampoo 650ml", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", price: "₹499", rating: 4.3, reviews: "8,765", source: "Amazon", link: "https://www.amazon.in/s?k=dove+intense+repair+shampoo+650ml" },
    { name: "Head & Shoulders Anti-Dandruff Shampoo 340ml", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", price: "₹349", rating: 4.1, reviews: "9,876", source: "Flipkart", link: "https://www.flipkart.com/search?q=head+shoulders+anti+dandruff+shampoo+340ml" }
  ],
  
  // BOOKS
  'books': [
    { name: "Rich Dad Poor Dad by Robert Kiyosaki", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop", price: "₹399", rating: 4.5, reviews: "12,345", source: "Amazon", link: "https://www.amazon.in/s?k=rich+dad+poor+dad+robert+kiyosaki" },
    { name: "The Psychology of Money by Morgan Housel", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop", price: "₹349", rating: 4.6, reviews: "9,876", source: "Flipkart", link: "https://www.flipkart.com/search?q=the+psychology+of+money+morgan+housel" }
  ]
};

module.exports = comprehensiveCatalog;