import {
  PORCENT_FREE_SHIPPING_PLAN_MOVIE,
  PRICE_FREE_SHIPPING_PLAN_MOVIE,
  PRICE_FREE_SHIPPING_PLAN_MOVIE_SECOND,
  PRICE_MONTH_PLAN_MOVIE,
} from "@/utils/constants/freeShipping";
import transformToPesos from "@/utils/transformToPesos";
import Button from "../atoms/Button";
import Line from "../atoms/line";
import { IconArrowRight } from "../../../public/icons";
import ButtonImage from "./ButtonImage";

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
        <ButtonImage
          alt_image="image-brand-disney"
          url_image="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/widget-l6/disney_plus_widget_dark.png"
          text="Disney+Include"
        />
        <ButtonImage
          alt_image="image-brand-disney"
          url_image="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/widget-l6/disney_plus_widget_dark.png"
          text={`Free and fast shipping from ${transformToPesos(
            Number(PRICE_FREE_SHIPPING_PLAN_MOVIE)
          )} and ${PORCENT_FREE_SHIPPING_PLAN_MOVIE}% OFF on shipments from ${transformToPesos(
            Number(PRICE_FREE_SHIPPING_PLAN_MOVIE_SECOND)
          )} keep onwards`}
        />
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
