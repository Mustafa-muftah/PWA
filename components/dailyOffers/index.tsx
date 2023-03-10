import Link from "next/link"
import { dailyOffers } from "./dailyOffersData"
import styles from "./dailyOffers.module.scss"
import Image from "next/image"

export const DailyOffers:React.FC =() => {
    return<>
     <span className={styles.dailyOffersTitle}>Daily Offers</span>
     <div className={styles.cardWrapper}>
     {dailyOffers.map((offer,index)=>{
        return <div className={styles.dailyOfferCardWrapper} key={index}>
           <Link href={offer.link}> <Image className={styles.image} src={offer.image} alt={offer.offerType}></Image></Link>
            <Link className={styles.offerLink} href={offer.link}>{offer.offerType}</Link>
        </div>
    } )}
    </div>
    </>
}