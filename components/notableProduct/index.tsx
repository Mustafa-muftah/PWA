import { Card } from "../global/card";
import { CustomSlider } from "../global/customSlider";
import { notableProducts } from "./notableProductData";
import styles from "./notableProduct.module.scss"



export const NotableProduct:React.FC =() => {
    return<>
    {/* <span className={styles.notableProductTitle}>Notable Products</span> */}
      <CustomSlider numberOfSlides={3} numberOfRows={2} title={"Notable Products"}>
        {notableProducts.map((product, index) => {
          return (
            <Card
              key={index}
              type="horizontal"
              ImageUrl={product.image}
              productName={product.productName}
              link={product.link}
            />
          );
        })}
      </CustomSlider>
    </>
}