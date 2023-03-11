import { Card } from "../global/card";
import { CustomSlider } from "../global/customSlider";
import { discover } from "./discoverMockedData";
import styles from "./discover.module.scss"



export const Discover:React.FC =() => {
    return<>
    {/* <span className={styles.discoverTitle}>Discover</span> */}
      <CustomSlider numberOfSlides={3} numberOfRows={2} title={"Discover"}>
        {discover.map((product, index) => {
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