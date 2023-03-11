import { PromotedProducts } from "@/components/promotedProducts";
import styles from "./landingPage.module.scss";
import { SpecialOffers } from "@/components/specialOffer";
import { Brands } from "@/components/brands";
import { Privilage } from "@/components/privilege";
import { DailyOffers } from "@/components/dailyOffers";
import { NotableProduct } from "@/components/notableProduct";
import { MostViewedProduct } from "@/components/mostViewedProduct";
import { Discover } from "@/components/discover";

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <PromotedProducts />
      <div className={styles.seperator}></div>
      <div className={styles.specialOfferWrapper}>
        <SpecialOffers />
      </div>
      <div className={"brandsWrapper"}>
        <Brands />
      </div>
      <div className={"privilageWrapper"}>
        <Privilage/>
      </div>
      <div className={styles.dailyOffersWrapper}>
        <DailyOffers/>
      </div>
      <div className={styles.notableProductWrapper}>
        <NotableProduct/>
      </div>
      <div className={styles.mostViewedProductWrapper}>
      <MostViewedProduct/>
      </div>
      <div className={styles.discover}>
      <Discover/>
      </div>
    </div>
    </div>
  );
};
