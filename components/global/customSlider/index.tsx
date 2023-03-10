import Slider from "react-slick";
import { VerticalCard } from "../card/verticalCard/verticalCard";
import specialOffer from "../../../public/specialOfferImages/specialOfferImage1.jpg"
import { Card } from "../card";
import { ReactNode, useRef } from "react";


interface oneRowSliderProps{
  children:ReactNode,
  numberOfSlides:number,
  numberOfRows:number,
}

export const CustomSlider:React.FC<oneRowSliderProps> =({children , numberOfSlides , numberOfRows})=>{
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: numberOfSlides,
        slidesToScroll: 1,
        initialSlide: 0,
        dotsClass:"customSliderDots",
        slidesPerRow:numberOfRows,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: numberOfSlides -1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: numberOfSlides-2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: numberOfSlides-3 == 0 ? 1 : numberOfSlides-3,
              slidesToScroll: 1
            }
          }
        ]
      };
    return <div className={"oneRowSliderContainer"}> 
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
}