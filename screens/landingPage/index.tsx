import { PromotedProducts } from "@/components/promotedProducts";
import styles from "./landingPage.module.scss";
import { SpecialOffers } from "@/components/specialOffer";
import { Brands } from "@/components/brands";

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <PromotedProducts />
      <div className={styles.seperator}></div>
      <div className={styles.specialOfferWrapper}>
        <SpecialOffers />
      </div>
      <div className={"brandsWrapper"}>
        <Brands />
      </div>

    </div>
  );
};