import { Card } from "../global/card";
import { CustomSlider } from "../global/customSlider";
import { specialOffersData } from "./specialOffersData";
import styles from "./specialOffer.module.scss"

export const SpecialOffers: React.FC = () => {
  return (
    <>
      <CustomSlider slidesToShow={5} numberOfRows={1} title={"Special Offers"} numberOfSlidesProps={specialOffersData.length}>
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
