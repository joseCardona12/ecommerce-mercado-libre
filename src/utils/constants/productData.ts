import { IProduct } from "@/interfaces/product";
import transformToPesos from "../transformToPesos";
import { QUOTA_PRODUCTS_DEFAULT } from "./freeShipping";

export const PRODUCT_DEFAULT_DATA: IProduct[] = [
  {
    after_price: transformToPesos(1483900),
    before_price: transformToPesos(1999900),
    description: "Xiaomi Poco X7 Pro 5g 512gb Verde 12ram 50mpx",
    isFull: false,
    percent_discount: 20,
    title: "",
    url_image:
      "https://http2.mlstatic.com/D_NQ_NP_823732-MLA81806997422_012025-O.webp",
    url_view: "",
    priceQuota: transformToPesos(Math.round(1999900 / QUOTA_PRODUCTS_DEFAULT)),
    quota: QUOTA_PRODUCTS_DEFAULT,
  },
  {
    after_price: transformToPesos(1483900),
    before_price: transformToPesos(1999900),
    description: "Xiaomi Poco X7 Pro 5g 512gb Verde 12ram 50mpx",
    isFull: false,
    percent_discount: 20,
    title: "",
    url_image:
      "https://http2.mlstatic.com/D_NQ_NP_877811-MLA83102329491_032025-O.webp",
    url_view: "",
    priceQuota: transformToPesos(Math.round(1483900 / QUOTA_PRODUCTS_DEFAULT)),
    quota: QUOTA_PRODUCTS_DEFAULT,
  },
  {
    after_price: transformToPesos(1919900),
    before_price: transformToPesos(2249000),
    description:
      "Laptop Asus Vivobook X1502 Ci5-12500h 24gb ssd512 Fhd15.6 color Quiet Blue",
    isFull: false,
    percent_discount: 14,
    title: "",
    url_image:
      "https://http2.mlstatic.com/D_NQ_NP_823732-MLA81806997422_012025-O.webp",
    url_view: "",
    priceQuota: transformToPesos(Math.round(1919900 / QUOTA_PRODUCTS_DEFAULT)),
    quota: QUOTA_PRODUCTS_DEFAULT,
  },
];
