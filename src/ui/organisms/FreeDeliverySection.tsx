import { CIRCLE_ELEMENT_CARD_DATA } from "@/utils/constants/circleElementCardData";
import { IconTruck } from "../../../public/icons";
import CircleElementCard from "../molecules/CircleElementCard";
import { ICircleElementCardData } from "@/interfaces/circleElementCardData";

export default function FreeDeliverySection(): React.ReactNode {
  return (
    <section className="p-[var(--padding-small)] bg-[var(--color-gray-light)] flex flex-col gap-4">
      <div className="md:hidden bg-white rounded-[var(--border-radius-small)] border border-[var(--color-gray)] text-sm p-2 flex items-center justify-center gap-2">
        <IconTruck className="w-4 h-4 text-[var(--color-green)]" />
        <p>
          <span className="text-[var(--color-green)]">Free Shipping </span>
          on millions products from
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
      <div></div>
    </section>
  );
}
