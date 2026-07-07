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

  // Paths updated to match your public folder file names exactly
  const allProducts = [
    { id: 1, name: "Luxury Linen Co-ords", mainCat: "Women", subCat: "Coords", price: 3500, img: "coord1.png", hasSize: true },
    { id: 2, name: "Premium Summer Co-ords", mainCat: "Women", subCat: "Coords", price: 3800, img: "coord2.png", hasSize: true },
    { id: 3, name: "Elegant Party Co-ords", mainCat: "Women", subCat: "Coords", price: 4200, img: "coord3.png", hasSize: true },
    { id: 4, name: "Classic Embroidered Unstitched", mainCat: "Women", subCat: "Unstitched", price: 2900, img: "unstitched1.png", hasSize: false },
    { id: 5, name: "Luxury Lawn Unstitched Suit", mainCat: "Women", subCat: "Unstitched", price: 3400, img: "unstitched2.png", hasSize: false },
    { id: 8, name: "Ready To Wear Pret Kurti", mainCat: "Women", subCat: "Ready to Wear", price: 3900, img: "ready1.png", hasSize: true },
    { id: 11, name: "Fancy Festive Stitched Suit", mainCat: "Women", subCat: "Stitched", price: 5500, img: "suit1.jpg", hasSize: true },
    { id: 15, name: "Men Premium Stitched Kurta", mainCat: "Men", subCat: "Stitched", price: 3500, img: "men_stitched1.png", hasSize: true },
    { id: 18, name: "Men Unstitched Soft Summer", mainCat: "Men", subCat: "Unstitched", price: 3200, img: "men_unstitched1.png", hasSize: false },
    { id: 20, name: "Men Winter Woolen Shawl Kurta", mainCat: "Men", subCat: "Winter Collection", price: 4800, img: "men_winter1.png", hasSize: true },
    { id: 23, name: "Oud-Al-Rose Premium", mainCat: "Fragrances", subCat: "Men", price: 3200, img: "frag_men1.png", hasSize: false },
    { id: 24, name: "Royal Musk Intense", mainCat: "Fragrances", subCat: "Men", price: 3500, img: "frag_men2.png", hasSize: false },
    { id: 25, name: "Classic Gold Luxury", mainCat: "Fragrances", subCat: "Men", price: 2900, img: "frag_men3.png", hasSize: false },
    { id: 26, name: "Sweet Blossom EDP", mainCat: "Fragrances", subCat: "Women", price: 2800, img: "frag_women1.png", hasSize: false },
    { id: 27, name: "Jasmine Glow Scent", mainCat: "Fragrances", subCat: "Women", price: 3300, img: "frag_women2.png", hasSize: false },
    { id: 28, name: "Velvet Petals Perfume", mainCat: "Fragrances", subCat: "Women", price: 3600, img: "frag_women3.png", hasSize: false }
  ];

  const getSubTabs = () => {
    if (activeTab === 'Women') return ['All', 'Stitched', 'Unstitched', 'Ready to Wear', 'Coords'];
    if (activeTab === 'Men') return ['All', 'Stitched', 'Unstitched', 'Winter Collection'];
    if (activeTab === 'Fragrances') return ['All', 'Men', 'Women'];
    return [];
  };

  const filteredProducts = allProducts.filter(p => {
    if (activeTab !== 'All' && p.mainCat !== activeTab) return false;
    if (activeSubTab !== 'All' && p.subCat !== activeSubTab) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="bg-white shadow p-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-pink-600 cursor-pointer" onClick={() => {setActiveTab('All'); setActiveSubTab('All');}}>LA-ROSE</h1>
            <input type="text" placeholder="Search..." className="border p-2 rounded" onChange={(e) => setSearchQuery(e.target.value)} />
            <div className="flex gap-4">
                <button onClick={() => setIsWishlistOpen(true)}>Wishlist ({wishlist.length})</button>
                <button onClick={() => setIsCartOpen(true)}>Bag ({cart.length})</button>
            </div>
        </div>
        <div className="flex justify-center gap-4 py-3">
            {['All', 'Women', 'Men', 'Fragrances', 'Footwear'].map(cat => (
                <button key={cat} onClick={() => {setActiveTab(cat); setActiveSubTab('All');}} className="font-bold">{cat}</button>
            ))}
        </div>
        {getSubTabs().length > 0 && (
            <div className="flex justify-center gap-2 pb-2">
                {getSubTabs().map(sub => (
                    <button key={sub} onClick={() => setActiveSubTab(sub)} className="text-sm px-2 py-1 bg-gray-100 rounded">{sub}</button>
                ))}
            </div>
        )}
      </header>

      <div className="max-w-7xl mx-auto p-4">
        {/* Banner path fixed */}
        <img src="main_banner1.jpg" alt="Main Banner" className="w-full h-64 object-cover rounded-xl shadow-lg" />
      </div>

      <main className="max-w-7xl mx-auto p-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map(p => (
            <div key={p.id} className="bg-white p-3 rounded shadow">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded" />
                <h4 className="text-sm font-bold mt-2">{p.name}</h4>
                <p className="text-pink-600 font-bold">Rs. {p.price}</p>
                {p.hasSize && (
                   <select onChange={(e) => setSelectedSizes({...selectedSizes, [p.id]: e.target.value})} className="w-full border mt-2">
                      <option>S</option><option>M</option><option>L</option><option>XL</option>
                   </select>
                )}
                <div className="flex gap-2 mt-2">
                    <button onClick={() => setCart([...cart, {...p, size: selectedSizes[p.id] || 'M'}])} className="w-full bg-pink-600 text-white py-1 rounded text-xs">Add to Bag</button>
                    <button onClick={() => setWishlist([...wishlist, p])} className="bg-gray-200 px-2 rounded">❤️</button>
                </div>
            </div>
        ))}
      </main>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-80 h-full p-6">
            <h2 className="font-bold mb-4">Your Bag</h2>
            {cart.map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b text-sm">
                    <span>{item.name} ({item.size})</span>
                    <span>Rs. {item.price}</span>
                </div>
            ))}
            <button onClick={() => {setCart([]); setIsCartOpen(false); setShowSuccess(true)}} className="w-full bg-green-600 text-white mt-4 py-2 rounded">Checkout</button>
            <button onClick={() => setIsCartOpen(false)} className="w-full mt-2 text-gray-500">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;