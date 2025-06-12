import FreeDeliverySection from "../organisms/FreeDeliverySection";
import HeroSection from "../organisms/HeroSection";

export default function HomeTemplate(): React.ReactNode {
  return (
    <div>
      <HeroSection />
      <FreeDeliverySection />
    </div>
  );
}
