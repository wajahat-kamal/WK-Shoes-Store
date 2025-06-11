// import React, { useState, useEffect } from "react";

// function DiscountSection({
//   cartItems,
//   isDiscountApplied,
//   setIsDiscountApplied,
//   isDiscountUsed,
//   setIsDiscountUsed,
// }) {
//   const [email, setEmail] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");

//   useEffect(() => {
//     if (showPopup) {
//       const timer = setTimeout(() => setShowPopup(false), 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [showPopup]);

//   const showCustomPopup = (message) => {
//     setPopupMessage(message);
//     setShowPopup(true);
//   };

//   const handleSubscribe = () => {
//     if (cartItems.length === 0) {
//       showCustomPopup("First, add a product to the cart.");
//       setEmail("");
//       return;
//     }

//     if (!email.includes("@")) {
//       showCustomPopup("Please enter a valid email.");
//       setEmail("");
//       return;
//     }

//     if (isDiscountApplied || isDiscountUsed) {
//       showCustomPopup("You have already used your discount.");
//       setEmail("");
//       return;
//     }

//     const wantsDiscount = window.confirm(
//       "Do you want to get a 30% discount? (Subscription is optional)"
//     );

//     if (wantsDiscount) {
//       setIsDiscountApplied(true);
//       setIsDiscountUsed(true);
//       setEmail(" ");
//       showCustomPopup("🎉 30% discount applied to your cart!");
//     } else {
//       showCustomPopup("Alright! You can subscribe anytime.");
//     }
//   };

//   return (
//     <div
//       className="w-full flex items-center justify-center py-18 relative"
//       id="discount-section"
//     >
//       <div className="md:w-[73dvw] w-full rounded-2xl h-85 text-white bg-[linear-gradient(45deg,_#da2700,_#965454)] flex items-center justify-around">
//         <div className="w-80 flex flex-col gap-10 px-3">
//           <div>
//             <p>JOIN OUR NEWSLATTER</p>
//             <h1 className="font-bold text-3xl">Get Discount up to 30% off!</h1>
//           </div>
//           <div>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full h-13 border-b-2 border-white mb-5 bg-transparent placeholder-white"
//               placeholder="Enter your email here"
//               type="email"
//             />
//             <button
//               onClick={handleSubscribe}
//               className="w-full h-13 bg-white rounded-xl text-black font-semibold border border-black hover:bg-amber-200"
//             >
//               SUBSCRIBE
//             </button>
//             <p className="text-[13px]">
//               Make sure Discount will be applied only one time.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Custom Popup */}
//       {showPopup && (
//         <div className="absolute top-4 md:top-10 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-6 py-3 rounded-lg shadow-lg text-center font-semibold z-50 animate-fade-in">
//           {popupMessage}
//         </div>
//       )}
//     </div>
//   );
// }

// export default DiscountSection;


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
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

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

  const handleConfirmYes = () => {
    setShowConfirmPopup(false);
    setIsDiscountApplied(true);
    setIsDiscountUsed(true);
    setEmail("");
    showCustomPopup("🎉 30% discount applied to your cart!");
  };

  const handleConfirmNo = () => {
    setShowConfirmPopup(false);
    showCustomPopup("Alright! You can subscribe anytime.");
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

    // window.confirm ki jagah custom popup show karenge
    setShowConfirmPopup(true);
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

      {/* Regular Custom Popup */}
      {showPopup && (
        <div className="absolute top-4 md:top-10 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-6 py-3 rounded-lg shadow-lg text-center font-semibold z-50 animate-fade-in">
          {popupMessage}
        </div>
      )}

      {/* Confirmation Popup (window.confirm replacement) */}
      {showConfirmPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
            <div className="text-center">
              <p className="text-gray-800 mb-6 text-lg">
                Do you want to get a 30% discount? (Subscription is optional)
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleConfirmYes}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold"
                >
                  Yes
                </button>
                <button
                  onClick={handleConfirmNo}
                  className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-semibold"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DiscountSection;