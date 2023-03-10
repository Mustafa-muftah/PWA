import HeartSVG from "@/public/icons/heartSVG";
import  { StaticImageData } from "next/image";
import styles from "./card.module.scss";
import { HorizntalCard } from "./horizntalCard/horizntalCard";
import { VerticalCard } from "./verticalCard/verticalCard";

interface cardProps {
  type: string;
  ImageUrl: StaticImageData | string
  productName:string,
  link:string
}

export const Card: React.FC<cardProps> = ({ type, ImageUrl ,productName , link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        {type === "vertical" ? (
         <VerticalCard ImageUrl={ImageUrl} productName={productName} link={link}/>
        ) : (
          <HorizntalCard ImageUrl={ImageUrl}/>
          )}
      </div>
    </div>
  );
};
