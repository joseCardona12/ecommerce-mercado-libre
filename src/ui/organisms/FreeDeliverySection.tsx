import { CIRCLE_ELEMENT_CARD_DATA } from "@/utils/constants/circleElementCardData";
import { IconTruck } from "../../../public/icons";
import CircleElementCard from "../molecules/CircleElementCard";
import { ICircleElementCardData } from "@/interfaces/circleElementCardData";
import CardFree from "../molecules/CardFree";
import { FREE_CARD_DATA } from "@/utils/constants/freeCardData";
import { IFreeCardData } from "@/interfaces/freeCardData";
import { FREE_SHIPPING_PRODUCTS } from "@/utils/constants/freeShipping";
import transformToPesos from "@/utils/transformToPesos";

export default function FreeDeliverySection(): React.ReactNode {
  return (
    <section className="bg-[var(--color-gray-light)] flex flex-col gap-6 pl-[var(--padding-small)] pr-[var(--padding-small)]">
      <div className="md:hidden bg-white rounded-[var(--border-radius-small)] border border-[var(--color-gray)] text-sm p-2 flex items-center justify-center gap-2">
        <IconTruck className="w-4 h-4 text-[var(--color-green)]" />
        <p className="text-sm">
          <span className="text-[var(--color-green)]">Free Shipping </span>
          on millions products from{" "}
          {transformToPesos(Number(FREE_SHIPPING_PRODUCTS))}
        </p>
      </div>
      <div className="md:hidden flex items-center gap-8 w-full overflow-x-scroll scrollbar-hide">
        {CIRCLE_ELEMENT_CARD_DATA.map(
          (item: ICircleElementCardData, index: number) => (
            <CircleElementCard
              icon={item.icon}
              text={item.text}
              isFree={item.isFree}
              key={index}
            />
          )
        )}
      </div>
      <div className="flex items-center gap-4 w-full overflow-x-scroll scrollbar-hide">
        {FREE_CARD_DATA.map((item: IFreeCardData, index: number) => (
          <div className="w-[calc(50%-0.5rem)] md:w-[calc(20%-0.5rem)] flex-shrink-0">
            <CardFree key={index} {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
