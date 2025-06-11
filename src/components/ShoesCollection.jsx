import { ShoesData } from "./ShoesData";  
import { useState } from "react";

function ShoesCollection({ setCartItems, cartItems }) {

  const handleAddToCart = (shoe) => {
    const existingItem = cartItems.find((item) => item.id === shoe.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: shoe.id,
          name: shoe.name,
          price: parseFloat(shoe.price.replace("$", "")),
          image: shoe.img,
          quantity: 1,
        },
      ]);
    }
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="w-full  text-black pt-22 pb-5 px-6 md:px-20 relative"
      id="shopping-section"
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-[#f8f05e]">
          Shoes Collection
        </h2>
        <p className="text-center text-white">
          Explore our popular shoe collection - blending fashion and
          functionality for every step you take.
        </p>
      </div>

      <div
        className={` w-full overflow-hidden ${
          expanded ? `md:h-full h-full` : `md:h-70 h-358`
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {ShoesData.map((shoe) => (
            <div
              key={shoe.id}
              className="bg-[#1E2939] text-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
              style={{ width: "100%", maxWidth: "290px" }}
            >
              <div className="overflow-hidden">
                <img
                  src={shoe.img}
                  alt={shoe.name}
                  className="w-full h-50 object-cover transition-transform duration-300 hover:scale-120"
                />
              </div>
              <div className="p-2 flex flex-col items-start justify-between">
                <div className="flex flex-row justify-between items-center w-full">
                  <h3 className="text-lg font-semibold">{shoe.name}</h3>
                  <p className="text-[#f8f05e] font-bold text-lg">
                    {shoe.price}
                  </p>
                </div>

                <button
                  onClick={() => handleAddToCart(shoe)}
                  className="  cursor-pointer text-sm  w-full text-center py-1 rounded-2xl font-bold
                hover:bg-[#f8f05e] text-white font-white px-6  transition transform active:scale-95 bg-yellow-400"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start md:justify-center items-center mt-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="hover:bg-[#f8f05e] text-white md:w-54 w-72 py-2 rounded-4xl font-bold bg-yellow-400 transition duration-300"
        >
          {expanded ? "Hide extra Shoes" : "Explore more Shoes"}
        </button>
      </div>
    </section>
  );
}
export default ShoesCollection;
