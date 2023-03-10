import { StaticImageData } from "next/image";
import brand1 from "../../public/brands/brand1.jpg";
import brand2 from "../../public/brands/brand2.jpg";
import brand3 from "../../public/brands/brand3.jpg";
import brand4 from "../../public/brands/brand4.jpg";
import brand5 from "../../public/brands/brand5.jpg";
import brand6 from "../../public/brands/brand6.jpg";
import brand7 from "../../public/brands/brand7.jpg";
import brand8 from "../../public/brands/brand8.jpg";

interface brandsData {
  image: StaticImageData | string;
  link: string;
  brandsName: string;
}

export const brandsData: brandsData[] = [
  {
    image: brand1,
    link: "/",
    brandsName: "MOCOM",
  },
  {
    image: brand2,
    link: "/",
    brandsName: "WOODPECKER",
  },
  {
    image: brand3,
    link: "/",
    brandsName: "VERICOM",
  },
  {
    image: brand4,
    link: "/",
    brandsName: "3M",
  },
  {
    image: brand5,
    link: "/",
    brandsName: "SINOL",
  },
  {
    image: brand6,
    link: "/",
    brandsName: "Dr. Schumacher",
  },
  {
    image: brand7,
    link: "/",
    brandsName: "Respirox",
  },
  {
    image: brand8,
    link: "/",
    brandsName: "ALBA",
  },
];
