const CartBox = ({
  onClose,
  cartItems,
  setCartItems,
  isDiscountApplied,
  setIsDiscountApplied,
  setIsDiscountUsed,
}) => {
  const handleRemove = (idToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== idToRemove));
  };

  const total = cartItems.reduce((acc, item) => {
    const discountedPrice = isDiscountApplied ? item.price * 0.5 : item.price;
    return acc + discountedPrice * item.quantity;
  }, 0);

  const CheckoutFunction = () => {
    setCartItems([]);
    setIsDiscountApplied(false);
    setIsDiscountUsed(true);
    localStorage.setItem("isDiscountApplied", "false");
    localStorage.setItem("isDiscountUsed", "true");

    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white text-black rounded-lg p-3 w-[310px] md:w-360px shadow-lg relative max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => {
              const discountedPrice = isDiscountApplied
                ? item.price * 0.7
                : item.price;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price:{" "}
                      {isDiscountApplied ? (
                        <>
                          <span className="line-through text-gray-400">
                            ${item.price.toFixed(2)}
                          </span>{" "}
                          <span className="font-bold text-red-600">
                            ${discountedPrice.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <>${item.price.toFixed(2)}</>
                      )}
                    </p>
                  </div>
                  <div className="font-bold flex flex-col items-end">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-sm text-gray-500 hover:text-red-500"
                    >
                      ✖
                    </button>
                    <div>
                      {isDiscountApplied
                        ? `$${(discountedPrice * item.quantity).toFixed(2)}`
                        : `$${(item.price * item.quantity).toFixed(2)}`}
                    </div>
                  </div>
                </div>
              );
            })}

            {isDiscountApplied && (
              <div className="text-center text-yellow-400 font-bold mb-2 text-lg">
                🎉 30% Discount Applied!
              </div>
            )}

            <div className="text-right font-semibold text-lg pt-2 border-t mt-4 flex items-center justify-between flex-row">
              <button
                onClick={CheckoutFunction}
                className="cursor-pointer  text-center py-1 rounded-2xl font-bold
                hover:bg-[#f8f05e] hover:text-black text-white font-white px-6  transition transform active:scale-95 bg-yellow-400"
              >
                Checkout
              </button>
              <p>Total: ${total.toFixed(2)}</p>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-3 text-sm text-gray-500 hover:text-red-500"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default CartBox;
