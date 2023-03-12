import { Card } from "../global/card";
import { CustomSlider } from "../global/customSlider";
import { notableProducts } from "./notableProductData";



export const NotableProduct:React.FC =() => {
    return<>
      <CustomSlider slidesToShow={3} numberOfRows={2} title={"Notable Products"} numberOfSlidesProps={notableProducts.length}>
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