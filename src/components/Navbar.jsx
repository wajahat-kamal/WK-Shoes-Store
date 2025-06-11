// src/components/Navbar.js
import { useState } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import CartBox from "./CartBox";

const navItems = [
  { name: "Home", href: "#hero-section" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about-section" },
  { name: "Shopping", href: "#shopping-section" },
  { name: "Discount", href: "#discount-section" },
];

function Navbar({ cartItems, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#100F0F] text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <a
          href="#"
          className="text-3xl md:text-4xl font-bold flex flex-row items-center gap-2"
        >
          <img
            className="w-10 h-10 md:w-15 md:h-15 rounded-2xl"
            src="wk-shoes-icon.png"
            alt="WK Shoes Logo"
          />
          WK <span className="text-[#f8f05e]">Shoes</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, key) => (
            <li>
              {" "}
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary text-xl hover:text-[#f8f05e] font-semibold transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden fixed right-14 top-4 hover:text-yellow-400">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>

        {/* Icons */}
        <div className="flex flex-row gap-1 items-center">
          <button
            onClick={onCartClick}
            className="relative flex items-center flex-row gap-1 hover:text-yellow-400 transform transition duration-300"
          >
            <h2 className="text-xl font-semibold hidden md:block">Your Cart</h2>
            <ShoppingCart size={33}/>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-1 absolute top-full left-0 w-full z-40">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={toggleMenu}
              className="text-foreground/80 hover:text-primary block hover:text-[#f8f05e] text-lg font-semibold transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Cart Popup */}
      {cartOpen && <CartBox onClose={toggleCart} />}
    </nav>
  );
}

export default Navbar;
