import CreateAccountSection from "../organisms/CreateAccountSection";
import FreeDeliverySection from "../organisms/FreeDeliverySection";
import HeroSection from "../organisms/HeroSection";

export default function HomeTemplate(): React.ReactNode {
  return (
    <div className="bg-[var(--color-gray-light)] flex flex-col gap-4">
      <HeroSection />
      <FreeDeliverySection />
      <CreateAccountSection />
    </div>
  );
}
