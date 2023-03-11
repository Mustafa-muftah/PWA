import { Card } from "../global/card";
import { CustomSlider } from "../global/customSlider";
import { specialOffersData } from "./specialOffersData";
import styles from "./specialOffer.module.scss"

export const SpecialOffers: React.FC = () => {
  return (
    <>
    {/* <span className={styles.specialOfferTitle}>Special Offers</span> */}
      <CustomSlider numberOfSlides={5} numberOfRows={1} title={"Special Offers"}>
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
      </CustomSlider>
    </>
  );
};
