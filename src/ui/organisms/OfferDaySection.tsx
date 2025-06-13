"use client";
import CardProduct from "../molecules/CardProduct";
import CardSection from "../molecules/CardSection";
import { useEffect, useState } from "react";
import { PRODUCT_DEFAULT_DATA } from "@/utils/constants/productData";

export default function OfferDaySection(): React.ReactNode {
  const [indexImage, setIndexImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImage((prev) => {
        return prev + 1 < PRODUCT_DEFAULT_DATA.length ? prev + 1 : 0;
      });
    }, 9000);
    return () => clearInterval(interval);
  }, []);
  return (
    <CardSection title="Offer day">
      <CardProduct
        after_price={PRODUCT_DEFAULT_DATA[indexImage].after_price}
        before_price={PRODUCT_DEFAULT_DATA[indexImage].before_price}
        description={PRODUCT_DEFAULT_DATA[indexImage].description}
        isFull={PRODUCT_DEFAULT_DATA[indexImage].isFull}
        percent_discount={PRODUCT_DEFAULT_DATA[indexImage].percent_discount}
        title={PRODUCT_DEFAULT_DATA[indexImage].title}
        url_image={PRODUCT_DEFAULT_DATA[indexImage].url_image}
        url_view={PRODUCT_DEFAULT_DATA[indexImage].url_view}
        priceQuota={PRODUCT_DEFAULT_DATA[indexImage].priceQuota}
        quota={PRODUCT_DEFAULT_DATA[indexImage].quota}
      />
    </CardSection>
  );
}
