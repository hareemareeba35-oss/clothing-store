import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetail({
  products = [],
  addToCart,
  toggleWishlist,
  wishlist = [],
  selectedSizes = {},
  handleSizeChange,
}) {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  // Works locally and on GitHub Pages
  const appBase =
    import.meta.env.BASE_URL !== "/"
      ? import.meta.env.BASE_URL.replace(/\/$/, "")
      : window.location.hostname.endsWith("github.io")
        ? "/clothing-store"
        : "";

  const getImagePath = (imagePath) => {
    if (!imagePath) return "";

    if (/^https?:\/\//i.test(imagePath)) {
      return imagePath;
    }

    return `${appBase}/${imagePath.replace(/^\/+/, "")}`;
  };

  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("");

  if (!product) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Product Not Found
          </h1>

          <p className="text-gray-500 mb-6">
            Sorry, this product is no longer available.
          </p>

          <Link
            to="/"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-bold"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const isInWishlist = wishlist.some(
    (item) => item.id === product.id
  );

  const currentSize =
    selectedSizes[product.id] || "Medium";

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 2500);
  };

  const handleAddToBag = () => {
    if (addToCart) {
      addToCart(product);
    }

    showMessage("✓ Added to Bag", "bag");
  };

  const handleWishlist = () => {
    if (toggleWishlist) {
      toggleWishlist(product);
    }

    if (isInWishlist) {
      showMessage("Removed from Wishlist", "wishlist");
    } else {
      showMessage("♥ Added to Wishlist", "wishlist");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* SUCCESS MESSAGE */}
      {message && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-full shadow-2xl text-sm font-bold text-white animate-bounce ${
            messageType === "wishlist"
              ? "bg-rose-500"
              : "bg-pink-600"
          }`}
        >
          {message}
        </div>
      )}

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">

          <Link
            to="/"
            className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-pink-600"
          >
            LA-ROSE
          </Link>

          <Link
            to="/"
            className="text-sm md:text-base font-semibold text-gray-700 hover:text-pink-600 transition"
          >
            ← Back to Shop
          </Link>

        </div>
      </header>

      {/* PRODUCT AREA */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

        {/* BREADCRUMB */}
        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wide">
          <Link
            to="/"
            className="hover:text-pink-600"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <span>{product.mainCat}</span>

          <span className="mx-2">/</span>

          <span className="text-gray-800">
            {product.name}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT - IMAGE */}
          <div className="bg-gray-50">

            <div className="w-full bg-white overflow-hidden">

              <img
                src={getImagePath(product.img)}
                alt={product.name}
                className="w-full h-auto max-h-[780px] object-contain"
              />

            </div>

          </div>

          {/* RIGHT - INFORMATION */}
          <div className="flex flex-col py-2">

            {/* CATEGORY */}
            <div className="mb-4">
              <span className="inline-block bg-pink-50 text-pink-600 border border-pink-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                {product.subCat === "All"
                  ? product.mainCat
                  : product.subCat}
              </span>
            </div>

            {/* NAME */}
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* PRODUCT ID */}
            {product.productId && (
              <p className="text-xs text-gray-400 mt-4">
                Product ID: {product.productId}
              </p>
            )}

            {/* PRICE */}
            <div className="mt-5 pb-6 border-b border-gray-200">
              <p className="text-3xl md:text-4xl font-black text-pink-600">
                Rs. {Number(product.price).toLocaleString()}
              </p>
            </div>

            {/* SIZE */}
            {product.hasSizes && (
              <div className="mt-6">

                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    Select Size
                  </h3>

                  <span className="text-xs text-gray-400">
                    Size Guide
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">

                  {["Small", "Medium", "Large", "XL"].map(
                    (size) => (
                      <button
                        key={size}
                        onClick={() =>
                          handleSizeChange &&
                          handleSizeChange(product.id, size)
                        }
                        className={`min-w-[55px] px-4 py-3 text-xs font-bold border transition ${
                          currentSize === size
                            ? "bg-pink-600 text-white border-pink-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-pink-500 hover:text-pink-600"
                        }`}
                      >
                        {size}
                      </button>
                    )
                  )}

                </div>

              </div>
            )}

            {/* ACTIONS */}
            <div className="mt-7 flex gap-3">

              <button
                onClick={handleAddToBag}
                className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-4 px-5 font-bold text-sm uppercase tracking-wide transition-all active:scale-[0.98]"
              >
                Add To Bag
              </button>

              <button
                onClick={handleWishlist}
                aria-label="Wishlist"
                className={`w-14 flex items-center justify-center border transition-all ${
                  isInWishlist
                    ? "bg-rose-500 text-white border-rose-500"
                    : "bg-white text-gray-800 border-gray-300 hover:border-pink-500 hover:text-pink-600"
                }`}
              >
                <span className="text-2xl">
                  {isInWishlist ? "♥" : "♡"}
                </span>
              </button>

            </div>

            {/* PRODUCT DETAILS */}
            <div className="mt-8 border-t border-gray-200">

              <div className="py-5 border-b border-gray-200">

                <h2 className="text-lg font-bold text-gray-900 mb-5">
                  Product Details
                </h2>

                <div className="space-y-4 text-sm">

                  <div className="flex justify-between gap-6">
                    <span className="font-semibold text-gray-800">
                      Category
                    </span>

                    <span className="text-gray-600 text-right">
                      {product.mainCat}
                    </span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="font-semibold text-gray-800">
                      Collection
                    </span>

                    <span className="text-gray-600 text-right">
                      {product.subCat}
                    </span>
                  </div>

                  {product.fabric && (
                    <div className="flex justify-between gap-6">
                      <span className="font-semibold text-gray-800">
                        Fabric
                      </span>

                      <span className="text-gray-600 text-right">
                        {product.fabric}
                      </span>
                    </div>
                  )}

                  {product.season && (
                    <div className="flex justify-between gap-6">
                      <span className="font-semibold text-gray-800">
                        Season
                      </span>

                      <span className="text-gray-600 text-right">
                        {product.season}
                      </span>
                    </div>
                  )}

                </div>

              </div>

              {/* WHAT'S INCLUDED */}
              {product.details && (
                <div className="py-5 border-b border-gray-200">

                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    What's Included
                  </h2>

                  <div className="space-y-3 text-sm text-gray-600">

                    {product.details.shirt && (
                      <div className="flex gap-3">
                        <span className="text-pink-600 font-bold">
                          ✓
                        </span>

                        <span>
                          {product.details.shirt}
                        </span>
                      </div>
                    )}

                    {product.details.dupatta && (
                      <div className="flex gap-3">
                        <span className="text-pink-600 font-bold">
                          ✓
                        </span>

                        <span>
                          {product.details.dupatta}
                        </span>
                      </div>
                    )}

                    {product.details.trouser && (
                      <div className="flex gap-3">
                        <span className="text-pink-600 font-bold">
                          ✓
                        </span>

                        <span>
                          {product.details.trouser}
                        </span>
                      </div>
                    )}

                    {product.details.addon && (
                      <div className="flex gap-3">
                        <span className="text-pink-600 font-bold">
                          ✓
                        </span>

                        <span>
                          {product.details.addon}
                        </span>
                      </div>
                    )}

                  </div>

                </div>
              )}

              {/* SHIPPING */}
              <div className="py-5 border-b border-gray-200">

                <h2 className="text-sm font-bold text-gray-900">
                  Shipping & Returns
                </h2>

                <p className="text-sm text-gray-600 mt-3">
                  Delivery available across Pakistan.
                  Easy returns within 7 days.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 mt-12">

        <div className="max-w-7xl mx-auto px-6 py-8 text-center">

          <p className="text-2xl font-serif font-bold text-pink-600">
            LA-ROSE
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Elegance in Every Stitch
          </p>

          <p className="text-xs text-gray-400 mt-4">
            © 2026 LA-ROSE. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default ProductDetail;