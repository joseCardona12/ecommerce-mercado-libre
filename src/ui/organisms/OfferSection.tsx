import { PRODUCT_DEFAULT_DATA } from "@/utils/constants/productData";
import CardProduct from "../molecules/CardProduct";
import CardSection from "../molecules/CardSection";

export default function OfferSection(): React.ReactNode {
  return (
    <CardSection title="Offer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CardProduct
          after_price={PRODUCT_DEFAULT_DATA[0].after_price}
          before_price={PRODUCT_DEFAULT_DATA[0].before_price}
          description={PRODUCT_DEFAULT_DATA[0].description}
          isFull={PRODUCT_DEFAULT_DATA[0].isFull}
          percent_discount={PRODUCT_DEFAULT_DATA[0].percent_discount}
          title={PRODUCT_DEFAULT_DATA[0].title}
          url_image={PRODUCT_DEFAULT_DATA[0].url_image}
          url_view={PRODUCT_DEFAULT_DATA[0].url_view}
          priceQuota={PRODUCT_DEFAULT_DATA[0].priceQuota}
          quota={PRODUCT_DEFAULT_DATA[0].quota}
        />
        <CardProduct
          after_price={PRODUCT_DEFAULT_DATA[0].after_price}
          before_price={PRODUCT_DEFAULT_DATA[0].before_price}
          description={PRODUCT_DEFAULT_DATA[0].description}
          isFull={PRODUCT_DEFAULT_DATA[0].isFull}
          percent_discount={PRODUCT_DEFAULT_DATA[0].percent_discount}
          title={PRODUCT_DEFAULT_DATA[0].title}
          url_image={PRODUCT_DEFAULT_DATA[0].url_image}
          url_view={PRODUCT_DEFAULT_DATA[0].url_view}
          priceQuota={PRODUCT_DEFAULT_DATA[0].priceQuota}
          quota={PRODUCT_DEFAULT_DATA[0].quota}
        />
        <CardProduct
          after_price={PRODUCT_DEFAULT_DATA[0].after_price}
          before_price={PRODUCT_DEFAULT_DATA[0].before_price}
          description={PRODUCT_DEFAULT_DATA[0].description}
          isFull={PRODUCT_DEFAULT_DATA[0].isFull}
          percent_discount={PRODUCT_DEFAULT_DATA[0].percent_discount}
          title={PRODUCT_DEFAULT_DATA[0].title}
          url_image={PRODUCT_DEFAULT_DATA[0].url_image}
          url_view={PRODUCT_DEFAULT_DATA[0].url_view}
          priceQuota={PRODUCT_DEFAULT_DATA[0].priceQuota}
          quota={PRODUCT_DEFAULT_DATA[0].quota}
        />
        <CardProduct
          after_price={PRODUCT_DEFAULT_DATA[0].after_price}
          before_price={PRODUCT_DEFAULT_DATA[0].before_price}
          description={PRODUCT_DEFAULT_DATA[0].description}
          isFull={PRODUCT_DEFAULT_DATA[0].isFull}
          percent_discount={PRODUCT_DEFAULT_DATA[0].percent_discount}
          title={PRODUCT_DEFAULT_DATA[0].title}
          url_image={PRODUCT_DEFAULT_DATA[0].url_image}
          url_view={PRODUCT_DEFAULT_DATA[0].url_view}
          priceQuota={PRODUCT_DEFAULT_DATA[0].priceQuota}
          quota={PRODUCT_DEFAULT_DATA[0].quota}
        />
      </div>
    </CardSection>
  );
}
