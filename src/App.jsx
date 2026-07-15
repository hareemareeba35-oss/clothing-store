import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('All'); 
  const [activeSubTab, setActiveSubTab] = useState('All');
  
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); 
  const [showSuccess, setShowSuccess] = useState(false);

  const [selectedSizes, setSelectedSizes] = useState({});

  // Restored your original working file paths and extensions exactly as they were
  const allProducts = [
    // === WOMEN MAIN CATEGORY ===
   { id: 1, name: "Luxury Linen Co-ords (Design 1)", mainCat: "Women", subCat: "Coords", price: 3500, img: "/suit1.jpg.png", hasSizes: true },

{ id: 2, name: "Premium Summer Co-ords (Design 2)", mainCat: "Women", subCat: "Coords", price: 3800, img: "/suit2.jpg.png", hasSizes: true },

{ id: 3, name: "Elegant Party Co-ords (Design 3)", mainCat: "Women", subCat: "Coords", price: 4200, img: "/suit3.jpg.png", hasSizes: true },

{ id: 4, name: "Classic Embroidered Unstitched Fabric", mainCat: "Women", subCat: "Unstitched", price: 2900, img: "/unstitched1.png.png", hasSizes: false },

{ id: 5, name: "Luxury Lawn Unstitched Suit", mainCat: "Women", subCat: "Unstitched", price: 3400, img: "/unstitched2.png.png", hasSizes: false },

{ id: 6, name: "Digital Printed Unstitched Dress", mainCat: "Women", subCat: "Unstitched", price: 3100, img: "/unstitched3.png.png", hasSizes: false },

{ id: 7, name: "Premium Festive Unstitched Collection", mainCat: "Women", subCat: "Unstitched", price: 4500, img: "/unstitched4.png.png", hasSizes: false },

{ id: 8, name: "Ready To Wear Pret Kurti", mainCat: "Women", subCat: "Ready to Wear", price: 3900, img: "/ready1.png.png", hasSizes: true },

{ id: 9, name: "Pret Casual Wear Suit", mainCat: "Women", subCat: "Ready to Wear", price: 4200, img: "/ready2.png.png", hasSizes: true },

{ id: 10, name: "Designer Ready To Wear Set", mainCat: "Women", subCat: "Ready to Wear", price: 4800, img: "/ready3.png.png", hasSizes: true },
    // === MEN MAIN CATEGORY ===
    { id: 15, name: "Men Premium Stitched Kurta (Navy)", mainCat: "Men", subCat: "Stitched", price: 3500, img: "/men_stitched1.png.png", hasSizes: true },
    { id: 16, name: "Men Luxury Shalwar Kameez (White)", mainCat: "Men", subCat: "Stitched", price: 4500, img: "/men_stitched2.png.png", hasSizes: true },
    { id: 17, name: "Men Designer Stitched Suit (Black)", mainCat: "Men", subCat: "Stitched", price: 4200, img: "/men_stitched3.png.png", hasSizes: true },
    
    { id: 18, name: "Men Unstitched Soft Summer Cotton", mainCat: "Men", subCat: "Unstitched", price: 3200, img: "/men_unstitched1.png.png", hasSizes: false },
    { id: 19, name: "Men Unstitched Premium Wash & Wear", mainCat: "Men", subCat: "Unstitched", price: 3800, img: "/men_unstitched2.png.png", hasSizes: false },
    
    { id: 20, name: "Men Winter Woolen Shawl Kurta", mainCat: "Men", subCat: "Winter Collection", price: 4800, img: "/men_winter1.png.png", hasSizes: true },
    { id: 21, name: "Men Premium Winter Khaddar Suit", mainCat: "Men", subCat: "Winter Collection", price: 4100, img: "/men_winter2.png.png", hasSizes: true },
    { id: 22, name: "Men Imperial Winter Tweed Suit", mainCat: "Men", subCat: "Winter Collection", price: 5200, img: "/men_winter3.png.png", hasSizes: true },

    // === FRAGRANCES MAIN CATEGORY ===
    { id: 23, name: "Oud-Al-Rose Premium Pour Homme", mainCat: "Fragrances", subCat: "Men", price: 3200, img: "/frag_men1.png.png", hasSizes: false },
    { id: 24, name: "Royal Musk Intense Eau De Parfum", mainCat: "Fragrances", subCat: "Men", price: 3500, img: "/frag_men2.png.png", hasSizes: false },
    { id: 25, name: "Classic Gold Luxury Cologne", mainCat: "Fragrances", subCat: "Men", price: 2900, img: "/frag_men3.png.png", hasSizes: false },
    
    { id: 26, name: "Sweet Blossom Eau De Parfum", mainCat: "Fragrances", subCat: "Women", price: 2800, img: "/frag_women1.png.png", hasSizes: false },
    { id: 27, name: "Jasmine Glow Luxury Scent", mainCat: "Fragrances", subCat: "Women", price: 3300, img: "/frag_women2.png.png", hasSizes: false },
    { id: 28, name: "Velvet Petals Premium Perfume", mainCat: "Fragrances", subCat: "Women", price: 3600, img: "/frag_women3.png.png", hasSizes: false },

    // === FOOTWEAR MAIN CATEGORY ===
    { id: 29, name: "Handcrafted Traditional Velvet Khussa", mainCat: "Footwear", subCat: "All", price: 2200, img: "/footwear1.png.png", hasSizes: false },
    { id: 30, name: "Embroidered Regal Bridal Footwear", mainCat: "Footwear", subCat: "All", price: 2800, img: "/footwear2.png.png", hasSizes: false },
    { id: 31, name: "Premium Casual Leather Khussa", mainCat: "Footwear", subCat: "All", price: 2500, img: "/footwear3.png.png", hasSizes: false }
  ];

  const getSubTabs = () => {
  if (activeTab === 'Women')
    return ['All', 'Coords', 'Unstitched', 'Ready to Wear'];

  if (activeTab === 'Men')
    return ['All', 'Stitched', 'Unstitched', 'Winter Collection'];

  if (activeTab === 'Fragrances')
    return ['All', 'Men', 'Women'];

  return [];
};

  const filteredProducts = allProducts.filter(product => {
    if (activeTab !== 'All' && product.mainCat !== activeTab) return false;
    if (getSubTabs().length > 0 && activeSubTab !== 'All' && product.subCat !== activeSubTab) return false;
    if (searchQuery.trim() !== '') {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             product.mainCat.toLowerCase().includes(searchQuery.toLowerCase()) ||
             product.subCat.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  const addToCart = (product) => {
    const size = product.hasSizes ? (selectedSizes[product.id] || 'Medium') : 'Free Size';
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => (item.id === product.id && item.size === size) ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1, size: size }];
    });
  };

  const updateQty = (id, size, change) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id && item.size === size) {
          const newQty = item.qty + change;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });
  };

  const cartTotal = cart.reduce((t, i) => t + (i.price * i.qty), 0);
  const cartCount = cart.reduce((c, i) => c + i.qty, 0);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans w-full overflow-x-hidden relative">
      
      {/* Top Banner */}
      <div className="bg-pink-600 text-white text-center py-2 text-[11px] md:text-sm font-medium tracking-wide px-2">
        ✨ Eid Special Sale! Get Up To 20% Off On All Collections ✨
      </div>

      {/* Main Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3">
          
          <div className="flex justify-between items-center w-full gap-4">
            <h1 
              onClick={() => { setActiveTab('All'); setActiveSubTab('All'); setSearchQuery(''); }} 
              className="text-2xl md:text-3xl font-black text-pink-600 tracking-widest font-serif cursor-pointer select-none"
            >
              LA-ROSE
            </h1>
            
            {/* Search Bar (Centered layout friendly) */}
            <div className="flex-grow max-w-md relative hidden sm:block">
              <input 
                type="text"
                placeholder="Search outfits, suits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-xs rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-pink-50/30 text-gray-800"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs hover:text-pink-600 px-1">✕</button>
              )}
            </div>

            {/* Action Counters */}
            <div className="flex items-center gap-2 md:gap-3">
              <button 
                onClick={() => setIsWishlistOpen(true)}
                className="bg-rose-50 text-rose-600 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold border border-rose-100 hover:bg-rose-100 transition shadow-xs"
              >
                ♥ <span className="hidden md:inline">Wishlist</span> ({wishlist.length})
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="bg-pink-600 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-pink-700 transition shadow-sm"
              >
                Bag ({cartCount})
              </button>
            </div>
          </div>

          {/* Mobile Search Bar Only */}
          <div className="w-full relative block sm:hidden">
            <input 
              type="text"
              placeholder="Search outfits, suits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-xs rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-pink-50/30 text-gray-800"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs px-1">✕</button>
            )}
          </div>
          
          {/* Responsive Navigation Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-5 overflow-x-auto max-w-full py-1.5 border-t border-gray-50 scrollbar-none">
            {['All', 'Women', 'Men', 'Fragrances', 'Footwear'].map((cat) => (
              <span 
                key={cat}
                onClick={() => { setActiveTab(cat); setActiveSubTab('All'); }}
                className={`text-xs md:text-sm font-bold cursor-pointer pb-0.5 whitespace-nowrap transition-all duration-150 relative ${
                  activeTab === cat ? 'text-pink-600 font-black' : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                {cat === 'All' ? 'Home' : cat}
                {activeTab === cat && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-600 rounded-full"></span>}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
<section className="relative w-full overflow-hidden">
 <img
  src="/coord1.png.png"
  alt="LA-ROSE Banner"
className="w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[550px] object-cover"
/>

  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
    <div className="text-center text-white px-4">
      <h2 className="text-3xl md:text-6xl font-serif font-bold">
        LA-ROSE
      </h2>
      <p className="text-sm md:text-xl mt-2">
        Premium Summer Collection
      </p>
      <button
  onClick={() =>
    document.getElementById("products-section")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all"
>
  Shop Now
</button>
    </div>
  </div>
</section>

      {/* Subtabs Section */}
      {getSubTabs().length > 0 && (
        <div className="bg-white border-b border-pink-100 py-2.5 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 flex justify-start md:flex-wrap md:justify-center gap-2 overflow-x-auto scrollbar-none">
            {getSubTabs().map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubTab(sub)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all ${
                  activeSubTab === sub
                    ? 'bg-pink-600 text-white border-pink-600'
                    : 'bg-pink-50 text-pink-600 border-pink-200'
                }`}
              >
                {sub === 'All' ? `All ${activeTab}` : sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <main
  id="products-section"
  className="max-w-7xl mx-auto px-4 py-8"
>
        <h3 className="text-base md:text-2xl font-serif font-bold mb-1 text-gray-900 text-center uppercase tracking-wider">
          {searchQuery ? `Results for "${searchQuery}"` : activeTab === 'All' ? 'Our Best Sellers' : `${activeTab} ${activeSubTab !== 'All' ? `> ${activeSubTab}` : ''}`}
        </h3>
        <div className="w-8 h-0.5 bg-pink-600 mx-auto mb-6 rounded-full"></div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-gray-400 text-xs">Koi product nahi mili. Dobara search karein!</div>
        ) : (
          /* Strictly safe responsive row grids: 2 cards on mobile, 3 on tablets, 4 on desktop layout viewports */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
    {filteredProducts.map((product) => {
      const isInWishlist = wishlist.some(item => item.id === product.id);
      const currentSize = selectedSizes[product.id] || 'Medium';

              return (
               <div
  key={product.id}
  className="bg-white rounded-xl shadow-xs border border-pink-100 flex flex-col w-full"
> 
                  
                  {/* Fixed standard aspect ratio block handling layout safely across phone screens */}
                  <div className="w-full aspect-[3/4] bg-gray-50 overflow-hidden relative">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 bg-white/95 text-pink-600 text-[9px] uppercase font-black px-2 py-0.5 rounded-full shadow-xs">
                      {product.subCat === 'All' ? product.mainCat : product.subCat}
                    </span>
                  </div>

                  <div className="p-3 flex flex-col flex-grow text-left">
                    <h4 className="font-bold text-gray-800 mb-1 text-[11px] md:text-sm line-clamp-2">
                      {product.name}
                    </h4>
                    
                    
                    {/* Size Selector */}
                    {product.hasSizes && (
                      <div className="mb-3">
                        <label className="text-[9px] font-black uppercase text-gray-400 block mb-1">Size:</label>
                        <select 
                          value={currentSize}
                          onChange={(e) => handleSizeChange(product.id, e.target.value)}
                          className="w-full p-1.5 rounded-md border border-pink-100 text-xs bg-pink-50/30 text-gray-700 outline-none font-bold"
                        >
                          <option value="Small">Small</option>
                          <option value="Medium">Medium</option>
                          <option value="Large">Large</option>
                          <option value="XL">XL</option>
                        </select>
                      </div>
                    )}

                    {/* Actions Panel */}
                    <div className="grid grid-cols-1 gap-1.5 mt-auto pt-2 border-t border-gray-50">
                      <button 
                        onClick={() => toggleWishlist(product)}
                        className={`py-1.5 rounded-md text-xs font-bold transition-all text-center border ${
                          isInWishlist 
                            ? 'bg-rose-600 text-white border-rose-600' 
                            : 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100'
                        }`}
                      >
                        {isInWishlist ? '♥ Liked' : '♥ Wishlist'}
                      </button>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-pink-600 text-white hover:bg-pink-700 py-1.5 rounded-md text-xs font-bold text-center transition-all shadow-xs"
                      >
                        Add to Bag
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
      {/* Footer */}
<footer className="bg-white border-t mt-16">
  <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">

    {/* Brand Info */}
    <div>
      <h2 className="text-4xl font-serif text-pink-600 font-bold">
        LA-ROSE
      </h2>

      <p className="italic text-gray-600 mt-2">
        Elegance in Every Stitch
      </p>

      <p className="text-gray-600 mt-4">
        Your destination for premium unstitched, stitched and ready-to-wear collections.
      </p>

      <div className="mt-6 space-y-3 text-gray-700">
        <p>📞 031236541910</p>
        <p>✉ hello@larose.com.pk</p>
        <p>📍 Islamabad, Pakistan</p>
      </div>
    </div>

    {/* Company */}
    <div>
      <h3 className="font-bold text-lg mb-4">COMPANY</h3>
      <ul className="space-y-2 text-gray-600">
        <li>About Us</li>
        <li>Careers</li>
        <li>Store Locator</li>
        <li>Corporate</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    {/* Customer Support */}
    <div>
      <h3 className="font-bold text-lg mb-4">CUSTOMER SUPPORT</h3>
      <ul className="space-y-2 text-gray-600">
        <li>Contact Us</li>
        <li>Delivery & Orders</li>
        <li>Returns & Exchanges</li>
        <li>Track My Order</li>
        <li>Payment Guide</li>
      </ul>
    </div>

    {/* Connect */}
    <div>
      <h3 className="font-bold text-lg mb-4">CONNECT</h3>
      <ul className="space-y-2 text-gray-600">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>TikTok</li>
        <li>YouTube</li>
        <li>LinkedIn</li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="font-bold text-lg mb-4">
        SIGN UP FOR OUR NEWSLETTER
      </h3>

      <p className="text-gray-600 mb-4">
        Be the first to know about new arrivals and exclusive offers.
      </p>

      <div className="flex">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border px-4 py-3 w-full outline-none"
        />

        <button className="bg-pink-600 text-white px-5 hover:bg-pink-700">
          →
        </button>
      </div>
    </div>
  </div>

  {/* Features Bar */}
  <div className="border-t py-6 bg-gray-50">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center">

      <div>
        <h4 className="font-semibold">🚚 FREE DELIVERY</h4>
        <p className="text-sm text-gray-600">
          On orders above Rs.5000
        </p>
      </div>

      <div>
        <h4 className="font-semibold">🔄 EASY RETURNS</h4>
        <p className="text-sm text-gray-600">
          Within 7 days
        </p>
      </div>

      <div>
        <h4 className="font-semibold">🔒 SECURE PAYMENT</h4>
        <p className="text-sm text-gray-600">
          100% secure checkout
        </p>
      </div>

      <div>
        <h4 className="font-semibold">⭐ QUALITY ASSURED</h4>
        <p className="text-sm text-gray-600">
          Premium quality products
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Bar */}
  <div className="bg-pink-600 text-white text-center py-4">
    © 2026 LA-ROSE. All Rights Reserved.
  </div>
</footer>

      {/* Wishlist Drawer */}
      {isWishlistOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="bg-white w-full max-w-sm h-full flex flex-col p-4 shadow-xl">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <h3 className="text-sm font-bold font-serif text-gray-900">Your Wishlist ({wishlist.length})</h3>
              <button onClick={() => setIsWishlistOpen(false)} className="text-gray-400 font-bold p-1 text-sm">✕</button>
            </div>

            <div className="flex-grow overflow-y-auto py-2 space-y-3">
              {wishlist.length === 0 ? (
                <p className="text-gray-400 text-center pt-12 text-xs">Wishlist khali hai.</p>
              ) : (
                wishlist.map(item => (
                  <div key={item.id} className="flex gap-3 pb-3 border-b border-gray-50 items-center justify-between text-left">
                    <div className="flex gap-2.5 items-center">
                      <img src={item.img} alt={item.name} className="w-10 h-14 object-cover rounded-md bg-gray-50" />
                      <div>
                        <h5 className="text-xs font-bold text-gray-800 line-clamp-1">{item.name}</h5>
                        <p className="text-xs font-black text-pink-600">Rs. {item.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => { addToCart(item); toggleWishlist(item); }}
                        className="bg-pink-600 text-white px-2.5 py-1 rounded-md text-[10px] font-bold"
                      >
                        + Bag
                      </button>
                      <button onClick={() => toggleWishlist(item)} className="text-red-400 text-sm px-1">✕</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cart Bag Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="bg-white w-full max-w-sm h-full flex flex-col p-4 shadow-xl">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <h3 className="text-sm font-bold font-serif text-gray-900">Your Shopping Bag ({cartCount})</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 font-bold p-1 text-sm">✕</button>
            </div>

            <div className="flex-grow overflow-y-auto py-2 space-y-3">
              {cart.length === 0 ? (
                <p className="text-gray-400 text-center pt-12 text-xs">Your bag is empty.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={`${item.id}-${item.size}-${idx}`} className="flex gap-3 pb-3 border-b border-gray-50 items-center text-left">
                    <img src={item.img} alt={item.name} className="w-10 h-14 object-cover rounded-md bg-gray-50" />
                    <div className="flex-grow">
                      <h5 className="text-xs font-bold text-gray-800 line-clamp-1">{item.name}</h5>
                      <p className="text-[10px] inline-block bg-pink-100 text-pink-700 font-bold px-2 py-0.5 rounded-sm my-1">Size: {item.size}</p>
                      
                      {/* Quantity Increments */}
                      <div className="flex items-center gap-2 mt-0.5">
                        <button 
                          onClick={() => updateQty(item.id, item.size, -1)}
                          className="w-5 h-5 rounded-sm bg-gray-100 text-gray-600 font-bold flex items-center justify-center text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-black text-gray-800">{item.qty}</span>
                        <button 
                          onClick={() => updateQty(item.id, item.size, 1)}
                          className="w-5 h-5 rounded-sm bg-pink-600 text-white font-bold flex items-center justify-center text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right pl-1">
                      <p className="text-xs font-black text-pink-600">Rs. {(item.price * item.qty).toLocaleString()}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="flex justify-between text-xs font-bold text-gray-900">
                  <span>Total Amount:</span>
                  <span className="text-pink-600">Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => { setCart([]); setIsCartOpen(false); setShowSuccess(true); setTimeout(() => setShowSuccess(false), 4000); }}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Alert */}
      {showSuccess && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-xl z-50 font-bold text-xs text-center max-w-[90%] animate-bounce">
          ✅ Order Placed Successfully! Thank you for shopping with LA-rose.
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 text-center py-6 text-xs mt-12">
        <p className="text-white font-serif font-bold tracking-widest mb-1">LA-ROSE BOUTIQUE</p>
        <p className="opacity-60 text-[11px]">&copy; 2026 LA-rose Essentials. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;