import { QUOTA_PRODUCTS_DEFAULT } from "@/utils/constants/freeShipping";

interface ICardProductProps {
  url_image: string;
  description: string;
  before_price: string;
  after_price: string;
  percent_discount: number;
  isFull: boolean;
  title: string;
  url_view: string;
  quota: number;
  priceQuota: string;
  isBorder?: boolean;
}
export default function CardProduct({
  url_image,
  description,
  before_price,
  after_price,
  percent_discount,
  isFull,
  title,
  url_view,
  priceQuota,
  quota,
  isBorder,
}: ICardProductProps): React.ReactNode {
  return (
    <div
      className={`flex flex-col gap-4 justify-center items-center p-[var(--padding-small)] ${
        isBorder && "border border-[var(--color-gray)]"
      }`}
    >
      <div className="w-full h-[200px]">
        <img
          className="h-full w-full object-contain"
          alt={`${title}-${new Date()}`}
          src={url_image}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[var(--color-gray-paragraph)]">{description}</p>
        <span className="text-[.7rem] text-[var(--color-text-paragraph)] line-through">
          {before_price}
        </span>
        <div className="flex items-center gap-2">
          <span className="font-medium">{after_price}</span>
          <span className="text-sm text-[var(--color-green)]">
            {percent_discount}% OFF
          </span>
        </div>
        <p className="text-sm">
          in{" "}
          <span className="text-[var(--color-green)]">
            {quota} quotas of {priceQuota} with 0% interests
          </span>
        </p>
        <p className="font-medium text-[var(--color-green)] text-sm">
          Free Shipping
        </p>
      </div>
    </div>
  );
}
