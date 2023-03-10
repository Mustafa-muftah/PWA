import { Card } from "../global/card";
import { CustomSlider } from "../global/customSlider";
import { mostViewedProduct } from "./mostViewedMocked";
import styles from "./mostViewedProduct.module.scss"

export const MostViewedProduct: React.FC = () => {
  return (
    <>
    <span className={styles.mostViewedTitle}>Most Viewed Products</span>
      <CustomSlider numberOfSlides={5} numberOfRows={1}>
        {mostViewedProduct.map((product, index) => {
          return (
            <Card
              key={index}
              type="vertical"
              ImageUrl={product.image}
              productName={product.productName}
              link={product.link}
            />
          );
        })}
      </CustomSlider>
    </>
  );
};