import { PRICE_MONTH_PLAN_MOVIE } from "@/utils/constants/freeShipping";
import transformToPesos from "@/utils/transformToPesos";
import Button from "../atoms/Button";
import Line from "../atoms/line";
import { IconArrowRight } from "../../../public/icons";

export default function SubscribeMovie(): React.ReactNode {
  return (
    <div className="bg-white rounded-[var(--border-radius-small)] border border-[var(--color-gray)] flex flex-col gap-2">
      <div className="bg-gradient-to-l from-[var(--color-pink-gradient)] to-[var(--color-purple-gradient)] p-[var(--padding-small)] text-white rounded-tl-[var(--border-radius-small)] rounded-tr-[var(--border-radius-small)]">
        <h2 className="font-bold">
          Subscribe to level 6 for{" "}
          {transformToPesos(Number(PRICE_MONTH_PLAN_MOVIE))}
        </h2>
      </div>
      <div className="p-[var(--padding-small)] flex flex-col gap-2">
        <h3>Get the best benefits in Mercado Libre</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline">Disney</Button>
          <p>Disney+Include</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Disney</Button>
          <p>Disney+Include</p>
        </div>
      </div>
      <Line />
      <Button
        variant="link"
        className="w-full flex items-center justify-between"
      >
        Subscribe
        <IconArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
