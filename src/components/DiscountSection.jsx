import React, { useState, useEffect } from "react";

function DiscountSection({
  cartItems,
  isDiscountApplied,
  setIsDiscountApplied,
  isDiscountUsed,
  setIsDiscountUsed,
}) {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const showCustomPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  const handleSubscribe = () => {
    if (cartItems.length === 0) {
      showCustomPopup("First, add a product to the cart.");
      setEmail("");
      return;
    }

    if (!email.includes("@")) {
      showCustomPopup("Please enter a valid email.");
      setEmail("");
      return;
    }

    if (isDiscountApplied || isDiscountUsed) {
      showCustomPopup("You have already used your discount.");
      setEmail("");
      return;
    }

    const wantsDiscount = showCustomPopup(
      "Do you want to get a 30% discount? (Subscription is optional)"
    );

    if (wantsDiscount) {
      setIsDiscountApplied(true);
      setIsDiscountUsed(true);
      setEmail(" ");
      showCustomPopup("🎉 30% discount applied to your cart!");
    } else {
      showCustomPopup("Alright! You can subscribe anytime.");
    }
  };

  return (
    <div
      className="w-full flex items-center justify-center py-18 relative"
      id="discount-section"
    >
      <div className="md:w-[73dvw] w-full rounded-2xl h-85 text-white bg-[linear-gradient(45deg,_#da2700,_#965454)] flex items-center justify-around">
        <div className="w-80 flex flex-col gap-10 px-3">
          <div>
            <p>JOIN OUR NEWSLATTER</p>
            <h1 className="font-bold text-3xl">Get Discount up to 30% off!</h1>
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-13 border-b-2 border-white mb-5 bg-transparent placeholder-white"
              placeholder="Enter your email here"
              type="email"
            />
            <button
              onClick={handleSubscribe}
              className="w-full h-13 bg-white rounded-xl text-black font-semibold border border-black hover:bg-amber-200"
            >
              SUBSCRIBE
            </button>
            <p className="text-[13px]">
              Make sure Discount will be applied only one time.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Popup */}
      {showPopup && (
        <div className="absolute top-4 md:top-10 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-6 py-3 rounded-lg shadow-lg text-center font-semibold z-50 animate-fade-in">
          {popupMessage}
        </div>
      )}
    </div>
  );
}

export default DiscountSection;
