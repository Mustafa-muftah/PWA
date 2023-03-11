import Link from "next/link";
import styles from "./midFooter.module.scss";

export const MidFooter: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSec}>
        About <br></br> US
      </div>
      <div className={styles.rightSec}>
        MedexSepeti is the largest online medical marketplace in Turkey and the
        Middle East. We connect medical staff with vendors to provide the
        ultimate and the most reliable shopping experience, to diminish any
        effort or hassle the buyer can go through in the shopping process.
        Browse and select your preferred products, add them to your cart,
        checkout and leave the rest for us to deliver your orders easily.
        MedexSepeti is an online medical marketplace with web interface and
        mobile applications, serving medical staff from all over Turkey. <Link href={"'/"}>More</Link>
      </div>
    </div>
  );
};
