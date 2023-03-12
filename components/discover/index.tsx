import { Card } from "../global/card";
import { CustomSlider } from "../global/customSlider";
import { discover } from "./discoverMockedData";
import styles from "./discover.module.scss"



export const Discover:React.FC =() => {
    return<>
      <CustomSlider slidesToShow={3} numberOfRows={2} title={"Discover"} numberOfSlidesProps={discover.length}>
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