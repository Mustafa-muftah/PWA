import HeartSVG from "@/public/icons/heartSVG"
import Link from "next/link"
import { Rating } from "../../rating"
import styles from "../card.module.scss"
import Image, { StaticImageData } from "next/image";



interface cardProps {
    ImageUrl:StaticImageData | string,
}

export const HorizntalCard:React.FC<cardProps> = ({ImageUrl}) => {
    return(
        <div className={styles.horizintal}>
        <div className={styles.upperSection}>
          <button>
            {" "}
            <HeartSVG />{" "}
          </button>
          <Link href={"/"}>
            <Image src={ImageUrl || ""} alt="" />
          </Link>
        </div>
        <div className={styles.lowerSection}>
          <Rating />
          <div className={styles.productName}>
            <Link href={"/"}>Cerrahi Önlük Non-Steril</Link>
          </div>
          <div className={styles.ProContainer} >
            <span className={styles.IsPro}>PRO</span>
           </div>
        </div>
      </div>
    )
}