import { StaticImageData } from "next/image";
import specialOfferImage1 from "../../public/specialOfferImages/specialOfferImage1.jpg";
import specialOfferImage2 from "../../public/specialOfferImages/specialOfferImage2.jpg";
import specialOfferImage3 from "../../public/specialOfferImages/specialOfferImage3.jpg";
import specialOfferImage4 from "../../public/specialOfferImages/specialOfferImage4.jpg";
import specialOfferImage5 from "../../public/specialOfferImages/specialOfferImage5.jpg";
import specialOfferImage6 from "../../public/specialOfferImages/specialOfferImage6.jpg";
import specialOfferImage7 from "../../public/specialOfferImages/specialOfferImage7.jpg";
import specialOfferImage8 from "../../public/specialOfferImages/specialOfferImage8.jpg";
import specialOfferImage9 from "../../public/specialOfferImages/specialOfferImage9.jpg";

interface discover {
  image: StaticImageData | string;
  link: string;
  productName: string;
}

export const discover: discover[] = [
  {
    image: specialOfferImage1,
    link: "/",
    productName: "Sudemed Rulo Otoklav Sterilizasyon Poşeti - 5Cm",
  },
  {
    image: specialOfferImage2,
    link: "/",
    productName: "Allcem Core - Siman - Yapıştırıcı - Fgm",
  },
  {
    image: specialOfferImage3,
    link: "/",
    productName: "Koi̇nsmh Pudralı Eldiven Medium 100'Lü",
  },
  {
    image: specialOfferImage4,
    link: "/",
    productName: " Meta Biomed Meta Paper Point 200 Points Mix - Dl-420-5",
  },
  {
    image: specialOfferImage5,
    link: "/",
    productName: "Cerrahi Önlük Non-Steril",
  },
  {
    image: specialOfferImage6,
    link: "/",
    productName: "Sıcak Soğuk Termo Jel Kompres",
  },
  {
    image: specialOfferImage7,
    link: "/",
    productName: "Katsan Cerrahi Sütur İpek 3/0 Keskin",
  },
  {
    image: specialOfferImage8,
    link: "/",
    productName: "Zhermack Zetaplus C Silikon Ölçü Takım",
  },
  {
    image: specialOfferImage9,
    link: "/",
    productName: "Opalescence Boost Ofis Tipi Beyazlatma 1 Tüp",
  },
];
