import { LINK_IMAGES } from "@/utils/constants/images";
import CardBuyQuota from "../molecules/CardBuyQuota";
import CreateAccountSection from "../organisms/CreateAccountSection";
import FreeDeliverySection from "../organisms/FreeDeliverySection";
import HeroSection from "../organisms/HeroSection";
import OfferDaySection from "../organisms/OfferDaySection";
import OfferSection from "../organisms/OfferSection";
import { QUOTA_PRODUCTS_DEFAULT } from "@/utils/constants/freeShipping";

export default function HomeTemplate(): React.ReactNode {
  return (
    <div className="bg-[var(--color-gray-light)] flex flex-col gap-4">
      <HeroSection />
      <FreeDeliverySection />
      <CreateAccountSection />

      <div className="flex flex-col md:flex-row gap-4 md:gap-0">
        <OfferDaySection />
        <div className="md:hidden">
          <CardBuyQuota
            alt_image={LINK_IMAGES.image_discount.alt}
            text_button="Learn more"
            title={`Buy to ${QUOTA_PRODUCTS_DEFAULT} quotas with 0% interests`}
            url_image={LINK_IMAGES.image_discount.url}
          />
        </div>
        <OfferSection />
        <div className="md:hidden">
          <CardBuyQuota
            alt_image={LINK_IMAGES.remates.alt}
            text_button="Show all"
            title={`Discover the best offers`}
            url_image={LINK_IMAGES.remates.url}
            second_title="Take Advantage Now"
          />
        </div>
      </div>
    </div>
  );
}
