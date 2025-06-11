import HeroSection from "../components/HeroSection";
import LatestShoes from "../components/LatestShoes";
import ShoesCollection from "../components/ShoesCollection";
import ServiceCards from "../components/ServiceCards";
import DiscountSection from "../components/DiscountSection";
import AboutSection from "../components/About";

function Home({
  cartItems,
  setCartItems,
  isDiscountApplied,
  setIsDiscountApplied,
  isDiscountUsed,
  setIsDiscountUsed,
}) {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <AboutSection />
      <ShoesCollection cartItems={cartItems} setCartItems={setCartItems} />
      <LatestShoes cartItems={cartItems} setCartItems={setCartItems} />
      <DiscountSection
        cartItems={cartItems}
        isDiscountApplied={isDiscountApplied}
        setIsDiscountApplied={setIsDiscountApplied}
        isDiscountUsed={isDiscountUsed}
        setIsDiscountUsed={setIsDiscountUsed}
      />
    </>
  );
}

export default Home;
