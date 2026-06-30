import React, { useState } from 'react';

function App() {
  // --- J. Style Junaid Jamshed Inspired Database (100% Frozen) ---
  const products = [
    // ==========================================
    // WOMEN COLLECTION
    // ==========================================
    { id: 101, name: "LA_ROSE Ruby Red Floral Embroidered 2pc Suit", price: 4850, mainCategory: "WOMEN", subCategory: "SUMMER COLLECTION", image: "/suit1.jpg.png" },
    { id: 102, name: "LA_ROSE Navy Blue Embroidered Premium 2pc Suit", price: 5200, mainCategory: "WOMEN", subCategory: "SUMMER COLLECTION", image: "/suit2.jpg.png" },
    { id: 103, name: "LA_ROSE Raw Silk White Luxury 3pc Suit with Dupatta", price: 8950, mainCategory: "WOMEN", subCategory: "SUMMER COLLECTION", image: "/suit3.jpg.png" },
    { id: 104, name: "LA_ROSE Heritage Style Blue Lawn Stitched 3pc", price: 6450, mainCategory: "WOMEN", subCategory: "SUMMER COLLECTION", image: "/suit4.jpg.png" },
    
    { id: 201, name: "LA_ROSE Luxe Velvet Matching Co-Ords Set", price: 4500, mainCategory: "WOMEN", subCategory: "CO-ORDS", prefix: "coord", num: 1, image: "/coord1.png" },
    { id: 202, name: "LA_ROSE Statement Printed Co-Ords Suit", price: 4150, mainCategory: "WOMEN", subCategory: "CO-ORDS", prefix: "coord", num: 2, image: "/coord2.png" },
    { id: 203, name: "LA_ROSE Elegant Formal Co-Ords Set", price: 4990, mainCategory: "WOMEN", subCategory: "CO-ORDS", prefix: "coord", num: 3, image: "/coord3.png" },

    { id: 301, name: "LA_ROSE Ready-To-Wear Premium Designer Kurti", price: 2950, mainCategory: "WOMEN", subCategory: "READY TO WEAR", prefix: "ready", num: 1, image: "/ready1.png" },
    { id: 302, name: "LA_ROSE Elegant Stitched Summer Kurti", price: 3200, mainCategory: "WOMEN", subCategory: "READY TO WEAR", prefix: "ready", num: 2, image: "/ready2.png" },
    { id: 303, name: "LA_ROSE Daily Wear Classic Printed Pret", price: 2850, mainCategory: "WOMEN", subCategory: "READY TO WEAR", prefix: "ready", num: 3, image: "/ready3.png" },

    { id: 401, name: "LA_ROSE Luxury Unstitched 3pc Lawn Fabric", price: 3850, mainCategory: "WOMEN", subCategory: "UNSTITCHED", prefix: "unstitched", num: 1, image: "/unstitched1.png" },
    { id: 402, name: "LA_ROSE Premium Embroidered Unstitched 3pc Suit", price: 4650, mainCategory: "WOMEN", subCategory: "UNSTITCHED", prefix: "unstitched", num: 2, image: "/unstitched1.png" },
    { id: 403, name: "LA_ROSE Classic Printed Unstitched 2pc Suit", price: 2990, mainCategory: "WOMEN", subCategory: "UNSTITCHED", prefix: "unstitched", num: 3, image: "/unstitched1.png" },
    { id: 404, name: "LA_ROSE Traditional Chikankari Unstitched Fabric", price: 5400, mainCategory: "WOMEN", subCategory: "UNSTITCHED", prefix: "unstitched", num: 4, image: "/unstitched1.png" },

    { id: 501, name: "LA_ROSE Festive Handcrafted Traditional Khussa", price: 1650, mainCategory: "WOMEN", subCategory: "FOOTWEAR", prefix: "footwear", num: 1, image: "/footwear1.png" },
    { id: 502, name: "LA_ROSE Elegant Summer Flat Sandals", price: 1850, mainCategory: "WOMEN", subCategory: "FOOTWEAR", prefix: "footwear", num: 2, image: "/footwear1.png" },
    { id: 503, name: "LA_ROSE Daily Casual Comfort Slippers", price: 1490, mainCategory: "WOMEN", subCategory: "FOOTWEAR", prefix: "footwear", num: 3, image: "/footwear1.png" },

    // ==========================================
    // MEN COLLECTIONS
    // ==========================================
    { id: 601, name: "LA_ROSE Men Premium Stitched Kurta Shalwar", price: 5450, mainCategory: "MEN", subCategory: "STITCHED", prefix: "men_stitched", num: 1, image: "/men_stitched1.png" },
    { id: 602, name: "LA_ROSE Men Embroidered Festive Kurta", price: 4200, mainCategory: "MEN", subCategory: "STITCHED", prefix: "men_stitched", num: 2, image: "/men_stitched1.png" },
    { id: 603, name: "LA_ROSE Men Casual Soft Cotton Kurta Set", price: 4850, mainCategory: "MEN", subCategory: "STITCHED", prefix: "men_stitched", num: 3, image: "/men_stitched1.png" },
    
    { id: 701, name: "LA_ROSE Men Premium Wash & Wear Fabric 4M", price: 3250, mainCategory: "MEN", subCategory: "UN-STITCHED", prefix: "men_unstitched", num: 1, image: "/men_unstitched1.png" },
    { id: 702, name: "LA_ROSE Men Royal Latha Premium Cotton", price: 3950, mainCategory: "MEN", subCategory: "UN-STITCHED", prefix: "men_unstitched", num: 2, image: "/men_unstitched1.png" },
    { id: 703, name: "LA_ROSE Men Executive Soft Sovereign Fabric", price: 3600, mainCategory: "MEN", subCategory: "UN-STITCHED", prefix: "men_unstitched", num: 3, image: "/men_unstitched1.png" },
    { id: 704, name: "LA_ROSE Men Luxury Fine Egyptian Cotton", price: 4450, mainCategory: "MEN", subCategory: "UN-STITCHED", prefix: "men_unstitched", num: 4, image: "/men_unstitched1.png" },
    
    { id: 801, name: "LA_ROSE Men Premium Winter Khaddar Suite", price: 3850, mainCategory: "MEN", subCategory: "WINTER COLLECTION", prefix: "men_winter", num: 1, image: "/men_winter1.png" },
    { id: 802, name: "LA_ROSE Men Wool Blend Traditional Shawl", price: 4990, mainCategory: "MEN", subCategory: "WINTER COLLECTION", prefix: "men_winter", num: 2, image: "/men_winter1.png" },
    { id: 803, name: "LA_ROSE Men Luxury Karandi Winter Fabric", price: 4650, mainCategory: "MEN", subCategory: "WINTER COLLECTION", prefix: "men_winter", num: 3, image: "/men_winter1.png" },

    // ==========================================
    // FRAGRANCE COLLECTIONS
    // ==========================================
    { id: 901, name: "LA_ROSE Fragrances Janan Pour Homme (Men Perfume)", price: 6500, mainCategory: "FRAGRANCE", subCategory: "MENS FRAGRANCES", prefix: "frag_men", num: 1, image: "/frag_men1.png" },
    { id: 902, name: "LA_ROSE Fragrances Exclusive Vocal Oud Intense", price: 8200, mainCategory: "FRAGRANCE", subCategory: "MENS FRAGRANCES", prefix: "frag_men", num: 2, image: "/frag_men1.png" },
    { id: 903, name: "LA_ROSE Fragrances Defender Marine Eau De Parfum", price: 5400, mainCategory: "FRAGRANCE", subCategory: "MENS FRAGRANCES", prefix: "frag_men", num: 3, image: "/frag_men1.png" },
    
    { id: 951, name: "LA_ROSE Bloom Pour Femme Luxury Perfume", price: 5800, mainCategory: "FRAGRANCE", subCategory: "WOMENS FRAGRANCES", prefix: "frag_women", num: 1, image: "/frag_women1.png" },
    { id: 952, name: "LA_ROSE Musk & Rose Premium Scent", price: 4950, mainCategory: "FRAGRANCE", subCategory: "WOMENS FRAGRANCES", prefix: "frag_women", num: 2, image: "/frag_women1.png" },
    { id: 953, name: "LA_ROSE Eternal Shine Sparkling Floral EDP", price: 6200, mainCategory: "FRAGRANCE", subCategory: "WOMENS FRAGRANCES", prefix: "frag_women", num: 3, image: "/frag_women1.png" }
  ];

  // --- STATE CONTROLS ---
  const [selectedMain, setSelectedMain] = useState("WOMEN");
  const [selectedSub, setSelectedSub] = useState("SUMMER COLLECTION");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutHistory, setCheckoutHistory] = useState([]);

  const categoriesList = selectedMain === "WOMEN" 
    ? ["SUMMER COLLECTION", "CO-ORDS", "READY TO WEAR", "UNSTITCHED", "FOOTWEAR"]
    : selectedMain === "MEN"
    ? ["STITCHED", "UN-STITCHED", "WINTER COLLECTION"]
    : ["MENS FRAGRANCES", "WOMENS FRAGRANCES"];

  const filteredProducts = products.filter(
    (p) => p.mainCategory === selectedMain && p.subCategory === selectedSub
  );

  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const handleCheckout = () => {
    const newOrder = {
      orderId: Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleString(),
      items: [...cart],
      totalAmount: totalCartPrice
    };
    setCheckoutHistory([newOrder, ...checkoutHistory]);
    setCart([]);
    setIsCartOpen(false);
    alert(`🎉 Order successful! Order ID: #${newOrder.orderId}`);
  };

  // Smooth Scroll and Filter Functionality for Single Shop Now Button
  const handleShopNow = () => {
    setSelectedMain("WOMEN");
    setSelectedSub("READY TO WEAR");
    const targetSection = document.getElementById('shop-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#18181b', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* TOP BRAND BANNER */}
      <div style={{ backgroundColor: '#B85C61', color: '#ffffff', fontSize: '10px', letterSpacing: '0.1em', textAlign: 'center', padding: '8px 0', fontWeight: 'bold', textTransform: 'uppercase' }}>
        🇵🇰 LA_ROSE ATELIER — FREE SHIPPING NATIONWIDE ON ORDERS ABOVE RS. 3000
      </div>
      
      {/* MAIN HEADER */}
      <header style={{ borderBottom: '1px solid #f4f4f5', backgroundColor: '#ffffff', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          
          <div style={{ display: 'flex', gap: '24px', fontSize: '12px', fontWeight: '900', letterSpacing: '0.1em' }}>
            {["WOMEN", "MEN", "FRAGRANCE"].map((cat) => (
              <button 
                key={cat} 
                onClick={() => {
                  setSelectedMain(cat);
                  if (cat === "WOMEN") setSelectedSub("SUMMER COLLECTION");
                  else if (cat === "MEN") setSelectedSub("STITCHED");
                  else if (cat === "FRAGRANCE") setSelectedSub("MENS FRAGRANCES");
                }}
                style={{ 
                  paddingBottom: '4px', 
                  backgroundColor: 'transparent', 
                  border: 'none',
                  cursor: 'pointer',
                  color: selectedMain === cat ? '#000000' : '#a1a1aa',
                  borderBottom: selectedMain === cat ? '2px solid #000000' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '30px', fontFamily: 'serif', fontWeight: '900', letterSpacing: '0.2em', color: '#18181b', margin: 0 }}>LA-ROSE</h1>
            <p style={{ fontSize: '8px', color: '#a1a1aa', letterSpacing: '0.4em', textTransform: 'uppercase', margin: '2px 0 0 0' }}>ATELIER</p>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3f3f46', border: '1px solid #e4e4e7', padding: '8px 16px', backgroundColor: '#fafafa', cursor: 'pointer' }}
          >
            BAG (<span style={{ color: '#b45309', fontWeight: '900' }}>{cart.length}</span>)
          </button>
        </div>

        {/* SUB MENU */}
        <div style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #f4f4f5', borderBottom: '1px solid #f4f4f5', padding: '12px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase', overflowX: 'auto', padding: '0 16px' }}>
            {categoriesList.map((subCat) => (
              <button 
                key={subCat}
                onClick={() => setSelectedSub(subCat)} 
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  paddingBottom: '2px',
                  color: selectedSub === subCat ? '#000000' : '#52525b',
                  borderBottom: selectedSub === subCat ? '2px solid #000000' : 'none',
                  fontWeight: selectedSub === subCat ? '900' : 'bold'
                }}
              >
                {subCat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* SHOPPING BAG DRAWER */}
      {isCartOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#ffffff', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '-4px 0 20px rgba(0,0,0,0.1)' }}>
            
            <div style={{ padding: '24px', borderBottom: '1px solid #e4e4e7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '900', letterSpacing: '0.05em', margin: 0 }}>YOUR BAG ({cart.length})</h3>
              <button onClick={() => setIsCartOpen(false)} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer', fontWeight: 'bold', color: '#71717a' }}>✕</button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', color: '#a1a1aa', marginTop: '40px', fontSize: '14px' }}>Your shopping bag is empty.</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cart.map((item, index) => (
                    <div key={index} style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #f4f4f5', paddingBottom: '16px' }}>
                      <div style={{ width: '70px', aspectRatio: '3/4', backgroundColor: '#f4f4f5', borderRadius: '4px', overflow: 'hidden' }}>
                        <img 
                          src={item.image.replace('1.png', item.num + '.png')} 
                          alt={item.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '12px', fontWeight: '700', margin: '0 0 4px 0', color: '#27272a' }}>{item.name}</h4>
                        <p style={{ fontSize: '13px', fontWeight: '900', margin: '0 0 8px 0', color: '#111827' }}>Rs. {item.price.toLocaleString()}</p>
                        <button onClick={() => removeFromCart(index)} style={{ backgroundColor: 'transparent', border: 'none', color: '#ef4444', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', padding: 0 }}>REMOVE</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: '24px', borderTop: '1px solid #e4e4e7', backgroundColor: '#fafafa' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '900', marginBottom: '16px' }}>
                  <span>TOTAL ESTIMATED:</span>
                  <span style={{ color: '#b45309' }}>Rs. {totalCartPrice.toLocaleString()}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  style={{ width: '100%', backgroundColor: '#B85C61', color: '#ffffff', fontSize: '12px', padding: '14px 0', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* --- PREMIUM SINGLE FRONT HERO BANNER SECTION (AS REQUESTED) --- */}
      <section style={{ width: '100%', position: 'relative', height: '70vh', backgroundColor: '#eae9e7', overflow: 'hidden' }}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <img 
            src="/main_banner1.jpg" 
            alt="La-Rose New Arrival Front Banner" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              // Safety Fallback agar image public folder me na ho to premium texture dikhe
              e.target.src = "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=cover";
            }}
          />
          {/* Subtle elegant shadow overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0.05))' }}></div>
          
          {/* Exact Text Alignment matching Screenshot (275) */}
          <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', color: '#ffffff', textAlign: 'left' }}>
            <h2 style={{ fontSize: '42px', fontFamily: 'serif', fontWeight: '100', letterSpacing: '0.15em', margin: '0 0 8px 0', textTransform: 'uppercase' }}>
              READY TO WEAR
            </h2>
            <p style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', margin: '0 0 24px 0', color: '#f3f4f6' }}>
              SUMMER COLLECTION '26
            </p>
            <button 
              onClick={handleShopNow}
              style={{ backgroundColor: '#ffffff', color: '#18181b', border: 'none', padding: '12px 32px', fontSize: '11px', fontWeight: '900', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '2px', transition: '0.3s ease', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCT DISPLAY & FILTER ANCHOR SECTION */}
      <div id="shop-section" style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px 0 24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.1em', color: '#18181b', textTransform: 'uppercase', borderLeft: '4px solid #000000', paddingLeft: '12px', margin: 0 }}>
          SHOP BY CATEGORY — {selectedSub}
        </h2>
      </div>

      {/* PRODUCTS DISPLAY GRID */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#a1a1aa', fontSize: '14px', fontWeight: 'bold' }}>
            No products available in this section yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #e4e4e7', padding: '12px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
                
                <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#f4f4f5', position: 'relative', borderRadius: '4px' }}>
                  <img 
                    src={product.image.replace('1.png', product.num + '.png')} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                    onError={(e) => {
                      const currentSrc = e.target.src;
                      if (product.prefix) {
                        const base = `/${product.prefix}${product.num}`;
                        if (currentSrc.endsWith('.png') && !currentSrc.includes('.jpg.png')) {
                          e.target.src = base + '.jpg';
                        } else if (currentSrc.endsWith('.jpg')) {
                          e.target.src = base + '.jpeg';
                        } else if (currentSrc.endsWith('.jpeg')) {
                          e.target.src = base + '.jpg.png';
                        } else if (currentSrc.includes('.jpg.png')) {
                          e.target.src = base + '.png.png';
                        }
                      }
                    }}
                  />
                </div>
                
                <div style={{ marginTop: '16px', textAlign: 'center', display: 'block' }}>
                  <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#27272a', margin: '0 0 8px 0', minHeight: '32px', lineHeight: '1.4' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '15px', fontWeight: '900', color: '#111827', margin: '0 0 12px 0' }}>
                    Rs. {product.price.toLocaleString()}
                  </p>
                  <button 
                    onClick={() => {
                      setCart([...cart, product]);
                      setIsCartOpen(true);
                    }}
                    style={{ width: '100%', backgroundColor: '#18181b', color: '#ffffff', fontSize: '11px', padding: '10px 0', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
                  >
                    ADD TO BAG
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </main>

      {/* CHECKOUT & ORDER HISTORY PANEL */}
      <section style={{ backgroundColor: '#fafafa', borderTop: '1px solid #e4e4e7', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', borderLeft: '4px solid #B85C61', paddingLeft: '12px' }}>
            📜 CHECKOUT & ORDER HISTORY
          </h2>

          {checkoutHistory.length === 0 ? (
            <div style={{ border: '1px dashed #d4d4d8', padding: '30px', textAlign: 'center', color: '#71717a', borderRadius: '8px', fontSize: '13px', backgroundColor: '#ffffff' }}>
              No orders placed yet. Add items to bag and click "PROCEED TO CHECKOUT".
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {checkoutHistory.map((order) => (
                <div key={order.orderId} style={{ backgroundColor: '#ffffff', border: '1px solid #e4e4e7', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f4f4f5', paddingBottom: '12px', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <span style={{ fontSize: '13px', fontWeight: '900', color: '#18181b' }}>ORDER #{order.orderId}</span>
                      <span style={{ fontSize: '11px', color: '#71717a', marginLeft: '12px' }}>{order.date}</span>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '900', color: '#b45309' }}>
                      Total Paid: Rs. {order.totalAmount.toLocaleString()}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                    {order.items.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#fafafa', border: '1px solid #f4f4f5', padding: '6px 12px', borderRadius: '6px', minWidth: '220px', flexShrink: 0 }}>
                        <div style={{ width: '35px', aspectRatio: '3/4', backgroundColor: '#e4e4e7', overflow: 'hidden', borderRadius: '3px' }}>
                          <img src={item.image.replace('1.png', item.num + '.png')} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                          <p style={{ fontSize: '11px', fontWeight: 'bold', margin: 0, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', color: '#27272a' }}>{item.name}</p>
                          <p style={{ fontSize: '10px', margin: '2px 0 0 0', color: '#71717a' }}>Rs. {item.price.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* J. STYLE BRAND FOOTER */}
      <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e4e4e7', padding: '60px 24px 20px 24px', fontFamily: 'sans-serif' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', paddingBottom: '40px' }}>
          
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '0.1em', margin: '0 0 20px 0', color: '#18181b', textTransform: 'uppercase' }}>CONTACT</h4>
            <p style={{ fontSize: '12px', color: '#4b5563', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
              📞 11223344
            </p>
            <p style={{ fontSize: '11px', color: '#71717a', margin: '0 0 15px 0', lineHeight: '1.6' }}>
              (MON - SAT: 9:30AM - 10:00PM | SUN: 11AM - 8PM)
            </p>
            <p style={{ fontSize: '12px', color: '#4b5563', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              ✉️ la-rosestore@gmail.com
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '0.1em', margin: '0 0 20px 0', color: '#18181b', textTransform: 'uppercase' }}>COMPANY</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '11px', fontWeight: 'bold', color: '#4b5563' }}>
              <li>ABOUT US</li>
              <li>CAREERS</li>
              <li>STORE LOCATOR</li>
              <li>CORPORATE</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '0.1em', margin: '0 0 20px 0', color: '#18181b', textTransform: 'uppercase' }}>CUSTOMER SUPPORT</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '11px', fontWeight: 'bold', color: '#4b5563' }}>
              <li>CONTACT US</li>
              <li>DELIVERY & ORDERS</li>
              <li>RETURNS & EXCHANGES</li>
              <li>TRACK MY ORDER</li>
              <li>PAYMENT GUIDE</li>
              <li>FABRIC GLOSSARY</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '0.1em', margin: '0 0 20px 0', color: '#18181b', textTransform: 'uppercase' }}>CONNECT</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '11px', fontWeight: 'bold', color: '#4b5563' }}>
              <li>FACEBOOK</li>
              <li>X</li>
              <li>INSTAGRAM</li>
              <li>YOUTUBE</li>
              <li>PINTEREST</li>
              <li>LINKEDIN</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '0.1em', margin: '0 0 15px 0', color: '#18181b', textTransform: 'uppercase' }}>SIGN UP FOR OUR NEWSLETTER</h4>
            <div style={{ display: 'flex', border: '1px solid #d1d5db', marginBottom: '12px' }}>
              <input type="email" placeholder="EMAIL ADDRESS" style={{ flex: 1, padding: '10px 12px', fontSize: '11px', border: 'none', outline: 'none' }} />
              <button style={{ backgroundColor: '#18181b', color: '#ffffff', border: 'none', padding: '0 16px', cursor: 'pointer', fontSize: '14px' }}>→</button>
            </div>
            <p style={{ fontSize: '10px', color: '#71717a', lineHeight: '1.4', margin: '0 0 20px 0' }}>
              By providing your email, you agree to receive marketing communications according to our Privacy Policy and Terms.
            </p>
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', opacity: 0.85 }}>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#1f2937', border: '1px solid #e5e7eb', padding: '2px 6px', borderRadius: '3px', backgroundColor: '#f9fafb' }}>VISA</span>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#1f2937', border: '1px solid #e5e7eb', padding: '2px 6px', borderRadius: '3px', backgroundColor: '#f9fafb' }}>MasterCard</span>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#1f2937', border: '1px solid #e5e7eb', padding: '2px 6px', borderRadius: '3px', backgroundColor: '#f9fafb' }}>PayPak</span>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#1f2937', border: '1px solid #e5e7eb', padding: '2px 6px', borderRadius: '3px', backgroundColor: '#f9fafb' }}>Amex</span>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ display: 'flex', gap: '20px', fontSize: '11px', fontWeight: 'bold', color: '#4b5563' }}>
            <span>TERMS & CONDITIONS</span>
            <span>PRIVACY POLICY</span>
          </div>
          <div style={{ fontSize: '11px', color: '#71717a', fontWeight: '500' }}>
            © 2026 LA_ROSE. All Rights Reserved
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;