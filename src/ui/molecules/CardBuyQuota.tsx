import { QUOTA_PRODUCTS_DEFAULT } from "@/utils/constants/freeShipping";
import { LINK_IMAGES } from "@/utils/constants/images";
import Link from "next/link";

interface ICardBuyQuotaProps {
  title: string;
  text_button: string;
  url_image: string;
  alt_image: string;
  second_title?: string;
}
export default function CardBuyQuota({
  title,
  text_button,
  url_image,
  alt_image,
  second_title,
}: ICardBuyQuotaProps): React.ReactNode {
  return (
    <div className="pl-[var(--padding-small)] pr-[var(--padding-small)]">
      <div className="bg-white rounded-[var(--border-radius-small)] flex items-center justify-between h-[130px]">
        <div className="flex flex-col justify-between h-full p-[var(--padding-small)]">
          {second_title && (
            <h5 className="text-sm text-[var(--color-gray-paragraph)] p-0 m-0">
              {second_title}
            </h5>
          )}
          <h2 className="font-medium">{title}</h2>
          <Link className="text-sm text-[var(--color-blue)]" href="">
            {text_button}
          </Link>
        </div>
        <div className="w-[40%] h-full">
          <img
            className="w-full h-full block rounded-[var(--border-radius-small)] object-cover"
            src={url_image}
            alt={alt_image}
          />
        </div>
      </div>
    </div>
  );
}
