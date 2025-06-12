import { ICircleElementCardData } from "@/interfaces/circleElementCardData";
import {
  IconCar,
  IconHam,
  IconLaptopMinimal,
  IconPercent,
  IconPlay,
  IconShirt,
  IconSmartphone,
  IconTV,
} from "../../../public/icons";

export const CIRCLE_ELEMENT_CARD_DATA: ICircleElementCardData[] = [
  {
    icon: <IconPercent />,
    isFree: false,
    text: "Offer",
    url_view: "",
  },
  {
    icon: <IconPlay />,
    isFree: false,
    text: "MarketPlay",
    url_view: "",
  },
  {
    icon: <IconHam />,
    isFree: false,
    text: "Supermarket",
    url_view: "",
  },
  {
    icon: <IconTV />,
    isFree: false,
    text: "TV",
    url_view: "",
  },
  {
    icon: <IconShirt />,
    isFree: false,
    text: "Fashion",
    url_view: "",
  },
  {
    icon: <IconCar />,
    isFree: false,
    text: "Vehicles",
    url_view: "",
  },
  {
    icon: <IconSmartphone />,
    isFree: false,
    text: "Cellphones",
    url_view: "",
  },
  {
    icon: <IconLaptopMinimal />,
    isFree: false,
    text: "Computation",
    url_view: "",
  },
];
