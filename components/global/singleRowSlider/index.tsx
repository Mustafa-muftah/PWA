import Slider from "react-slick";
import { VerticalCard } from "../card/verticalCard/verticalCard";
import specialOffer from "../../../public/specialOfferImages/specialOfferImage1.jpg"
import { Card } from "../card";
import { ReactNode, useRef } from "react";


interface oneRowSliderProps{
  children:ReactNode,
  numberOfSlides:number,
}

export const SingleRowSlider:React.FC<oneRowSliderProps> =({children , numberOfSlides})=>{
    const slider = useRef<any>();
    const next = () => {
      slider.current.slickNext();
    };
    const previous = () => {
      slider.current.slickPrev();
    };
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: numberOfSlides,
        slidesToScroll: 1,
        initialSlide: 0,
        dotsClass:"customSliderDots",
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
              slidesToShow: numberOfSlides-3,
              slidesToScroll: 1
            }
          }
        ]
      };
    return <div className={"oneRowSliderContainer"}> 
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {children}
        </Slider>
      </div>
}