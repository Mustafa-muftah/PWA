import { StaticImageData } from "next/image";
import privilage1 from "../../public/privilage/Privilage1.png";
import privilage2 from "../../public/privilage/Privilage2.png";
import privilage3 from "../../public/privilage/Privilage3.png";
import privilage4 from "../../public/privilage/Privilage4.png";
import privilage5 from "../../public/privilage/Privilage5.png";
import privilage6 from "../../public/privilage/Privilage6.png";
import privilage7 from "../../public/privilage/Privilage7.png";
import privilage8 from "../../public/privilage/Privilage8.png";



interface privilageData {
  image: StaticImageData | string;
  privilageType: string;
}

export const privilageData: privilageData[] = [
    {
        image: privilage7,
        privilageType: "Same-day Delivery",
      },
      {
        image: privilage8,
        privilageType: "Easy Return",
      },
  {
    image: privilage1,
    privilageType: "Instant Transfer",
  },
  {
    image: privilage2,
    privilageType: "Cash on Delivery",
  },
  {
    image: privilage3,
    privilageType: "Payment with Multiple Cards",
  },
  {
    image: privilage4,
    privilageType: "Expert Technical Support",
  },
  {
    image: privilage5,
    privilageType: "Medical Needs at Your Fingertips",
  },
  {
    image: privilage6,
    privilageType: "All Medical Sepeciality",
  },
];
