import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CartBox from "./components/CartBox";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isDiscountApplied, setIsDiscountApplied] = useState(() => {
    const saved = localStorage.getItem("isDiscountApplied");
    return saved === "true";
  });

  const [isDiscountUsed, setIsDiscountUsed] = useState(() => {
    const used = localStorage.getItem("isDiscountUsed");
    return used === "true";
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("isDiscountApplied", isDiscountApplied);
  }, [isDiscountApplied]);

  useEffect(() => {
    localStorage.setItem("isDiscountUsed", isDiscountUsed);
  }, [isDiscountUsed]);

  return (
    <>
      <Navbar cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      <div className="p-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                setCartItems={setCartItems}
                isDiscountApplied={isDiscountApplied}
                setIsDiscountApplied={setIsDiscountApplied}
                isDiscountUsed={isDiscountUsed}
                setIsDiscountUsed={setIsDiscountUsed}
              />
            }
          />
        </Routes>
      </div>

      <Footer />

      {isCartOpen && (
        <CartBox
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setIsCartOpen(false)}
          isDiscountApplied={isDiscountApplied}
          setIsDiscountApplied={setIsDiscountApplied}
          setIsDiscountUsed={setIsDiscountUsed}
        />
      )}
    </>
  );
}

export default App;
