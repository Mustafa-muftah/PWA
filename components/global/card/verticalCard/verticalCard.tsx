import HeartSVG from "@/public/icons/heartSVG"
import Link from "next/link"
import { Rating } from "../../rating"
import styles from "../card.module.scss"
import Image, { StaticImageData } from "next/image";



interface cardProps {
    ImageUrl:StaticImageData | string,
    productName:string,
    link:string
}

export const VerticalCard:React.FC<cardProps> = ({ImageUrl , productName ,link}) => {
    return(
        <div className={styles.vertical}>
        <div className={styles.upperSection}>
          <button>
            {" "}
            <HeartSVG />{" "}
          </button>
          <Link href={link}>
            <Image src={ImageUrl} alt="" />
          </Link>
        </div>
        <div className={styles.lowerSection}>
          <Rating />
          <div className={styles.productName}>
            <Link href={link}>{productName}</Link>
          </div>
          <div className={styles.ProContainer} >
            <span className={styles.IsPro}>PRO</span>
           </div>
        </div>
      </div>
    )
}