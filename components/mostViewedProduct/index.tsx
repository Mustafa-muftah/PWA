import { Card } from "../global/card";
import { CustomSlider } from "../global/customSlider";
import { mostViewedProduct } from "./mostViewedMocked";

export const MostViewedProduct: React.FC = () => {
  return (
    <>
      <CustomSlider slidesToShow={5} numberOfRows={1} title={"Most Viewed Products"} numberOfSlidesProps={mostViewedProduct.length}>
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