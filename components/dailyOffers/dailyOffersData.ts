import { StaticImageData } from "next/image";
import dailyOffers1 from "../../public/dailyOffers/DailyOffer1.jpg";
import dailyOffers2 from "../../public/dailyOffers/DailyOffer2.jpg";
import dailyOffers3 from "../../public/dailyOffers/DailyOffer3.jpg";
import dailyOffers4 from "../../public/dailyOffers/DailyOffer4.jpg";
import dailyOffers5 from "../../public/dailyOffers/DailyOffer5.jpg";

interface dailyOffers {
  image: StaticImageData | string;
  offerType: string;
  link: string;
}

export const dailyOffers: dailyOffers[] = [
  {
    image: dailyOffers1,
    offerType: "Restoratif",
    link: "/",
  },
  {
    image: dailyOffers2,
    offerType: "Protez",
    link: "/",
  },
  {
    image: dailyOffers3,
    offerType: "Endodonti",
    link: "/",
  },
  {
    image: dailyOffers4,
    offerType: "Genel",
    link: "/",
  },
  {
    image: dailyOffers5,
    offerType: "Ortodonti",
    link: "/",
  },
];
