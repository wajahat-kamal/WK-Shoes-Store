const LatestShoes = ({ cartItems, setCartItems }) => {
  const handleAddToCart = (name, price, img) => {
    const existingItem = cartItems.find((item) => item.name === name);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: Date.now(),
          name,
          price: parseFloat(price.replace("$", "")),
          image: img,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 ">
          <h2 className="text-4xl font-bold text-center text-[#f8f05e] ">
            Latest Shoes
          </h2>
          <p className="text-center text-white ">
            Browse our top diverse collection and find the perfect pair that
            suits your personality.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-4">
          {/* Left - Tall Shoe */}
          <div className="overflow-hidden md:w-80 w-full rounded-2xl relative group h-[500px]">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src="/shoes-offer-images/shoe-offer-1.webp"
              alt="Summit Sneakers"
            />
            <div className="absolute bottom-11 left-3 flex flex-row w-[90%] items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-black font-bold text-xl">Summit Sneakers</h2>
              <h2 className="text-black font-bold text-xl">$169</h2>
            </div>
            <button
              onClick={() =>
                handleAddToCart(
                  "Summit Sneakers",
                  "$169",
                  "/shoes-offer-images/shoe-offer-1.webp"
                )
              }
              className="absolute bottom-3 left-3 text-sm w-[92.5%] text-center py-1 rounded-2xl font-bold
              hover:bg-[#f8f05e] text-white active:scale-95 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              Add to Cart
            </button>
          </div>

          {/* Middle Column - Two stacked Shoes */}
          <div className="flex flex-col gap-4">
            {/* Shoe 2 */}
            <div className="overflow-hidden md:w-80 w-full rounded-2xl relative group h-[245px]">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="/shoes-offer-images/shoe-offer-2.webp"
                alt="Darkwave Runners"
              />
              <div className="absolute bottom-9 left-3 flex flex-row w-[90%] items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white font-bold text-xl">
                  Darkwave Runners
                </h2>
                <h2 className="text-white font-bold text-xl">$79</h2>
              </div>
              <button
                onClick={() =>
                  handleAddToCart(
                    "Darkwave Runners",
                    "$79",
                    "/shoes-offer-images/shoe-offer-2.webp"
                  )
                }
                className="absolute bottom-2 left-3 text-sm w-[92.5%] text-center py-1 rounded-2xl font-bold
                hover:bg-[#f8f05e] text-white active:scale-95 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                Add to Cart
              </button>
            </div>

            {/* Shoe 3 */}
            <div className="overflow-hidden md:w-80 w-full rounded-2xl relative group h-[245px]">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src="/shoes-offer-images/shoe-offer-3.webp"
                alt="Midnight Oxford"
              />
              <div className="absolute bottom-9 left-3 flex flex-row w-[90%] items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-white font-bold text-xl">
                  Midnight Oxford
                </h2>
                <h2 className="text-white font-bold text-xl">$99</h2>
              </div>
              <button
                onClick={() =>
                  handleAddToCart(
                    "Midnight Oxford",
                    "$99",
                    "/shoes-offer-images/shoe-offer-3.webp"
                  )
                }
                className="absolute bottom-2 left-3 text-sm w-[92.5%] text-center py-1 rounded-2xl font-bold
                hover:bg-[#f8f05e] text-white active:scale-95 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Right - Tall Shoe */}
          <div className="overflow-hidden md:w-80 w-full rounded-2xl relative group h-[500px]">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              src="/shoes-offer-images/shoe-offer-4.webp"
              alt="Cardinal Sneakers"
            />
            <div className="absolute bottom-11 left-3 flex flex-row w-[90%] items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-black font-bold text-xl">
                Cardinal Sneakers
              </h2>
              <h2 className="text-black font-bold text-xl">$159</h2>
            </div>
            <button
              onClick={() =>
                handleAddToCart(
                  "Cardinal Sneakers",
                  "$159",
                  "/shoes-offer-images/shoe-offer-4.webp"
                )
              }
              className="absolute bottom-3 left-3 text-sm w-[92.5%] text-center py-1 rounded-2xl font-bold
              hover:bg-[#f8f05e] text-white active:scale-95 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestShoes;
