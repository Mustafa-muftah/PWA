import { Card } from "../global/card";
import { SingleRowSlider } from "../global/singleRowSlider";
import { specialOffersData } from "./specialOffersData";
import styles from "./specialOffer.module.scss"

export const SpecialOffers: React.FC = () => {
  return (
    <>
    <span className={styles.specialOfferTitle}>Special Offers</span>
      <SingleRowSlider numberOfSlides={5}>
        {specialOffersData.map((specialOffer, index) => {
          return (
            <Card
              key={index}
              type="vertical"
              ImageUrl={specialOffer.image}
              productName={specialOffer.productName}
              link={specialOffer.link}
            />
          );
        })}
      </SingleRowSlider>
    </>
  );
};
