import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeSubTab, setActiveSubTab] = useState('All');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const allProducts = [
    { id: 1, name: "Luxury Linen Co-ords", mainCat: "Women", subCat: "Coords", price: 3500, img: "coord1.png" },
    { id: 2, name: "Premium Summer Co-ords", mainCat: "Women", subCat: "Coords", price: 3800, img: "coord2.png" },
    { id: 3, name: "Elegant Party Co-ords", mainCat: "Women", subCat: "Coords", price: 4200, img: "coord3.png" },
    { id: 4, name: "Classic Embroidered", mainCat: "Women", subCat: "Unstitched", price: 2900, img: "unstitched1.png" },
    { id: 5, name: "Luxury Lawn Suit", mainCat: "Women", subCat: "Unstitched", price: 3400, img: "unstitched2.png" },
    { id: 8, name: "Pret Kurti", mainCat: "Women", subCat: "Ready to Wear", price: 3900, img: "ready1.png" },
    { id: 11, name: "Festive Stitched", mainCat: "Women", subCat: "Stitched", price: 5500, img: "suit1.jpg" },
    { id: 15, name: "Men Stitched Kurta", mainCat: "Men", subCat: "Stitched", price: 3500, img: "men_stitched1.png" },
    { id: 18, name: "Men Unstitched", mainCat: "Men", subCat: "Unstitched", price: 3200, img: "men_unstitched1.png" }
  ];

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
        <nav className="flex justify-center gap-6 py-3 font-bold">
            {['All', 'Women', 'Men', 'Fragrances', 'Footwear'].map(cat => (
                <button key={cat} onClick={() => {setActiveTab(cat); setActiveSubTab('All');}}>{cat}</button>
            ))}
        </nav>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <img src="/main_banner1.jpg" alt="Banner" className="w-full h-64 object-cover rounded-xl shadow-lg" />
      </div>

      <main className="max-w-7xl mx-auto p-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map(p => (
            <div key={p.id} className="bg-white p-3 rounded shadow">
                <img src={`/${p.img}`} alt={p.name} className="w-full h-48 object-cover rounded" onError={(e) => e.target.src = "https://via.placeholder.com/200"} />
                <h4 className="text-sm font-bold mt-2">{p.name}</h4>
                <p className="text-pink-600 font-bold">Rs. {p.price}</p>
                <button onClick={() => setCart([...cart, p])} className="w-full bg-pink-600 text-white py-1 rounded mt-2 text-xs">Add to Bag</button>
            </div>
        ))}
      </main>
    </div>
  );
}

export default App;