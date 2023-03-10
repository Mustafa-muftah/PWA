import Slider from "react-slick";
import { VerticalCard } from "../card/verticalCard/verticalCard";
import specialOffer from "../../../public/specialOfferImages/specialOfferImage1.jpg"
import { Card } from "../card";
import { ReactNode, useRef } from "react";


interface oneRowSliderProps{
  children:ReactNode
}

export const SingleRowSlider:React.FC<oneRowSliderProps> =({children})=>{
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
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        dotsClass:"customSliderDots",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    return <div className={"oneRowSliderContainer"}> 
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {children}
            {/* <Card type="vertical" ImageUrl={specialOffer} />
            <Card type="vertical" ImageUrl={specialOffer} />
            <Card type="vertical" ImageUrl={specialOffer} />
            <Card type="vertical" ImageUrl={specialOffer} />
            <Card type="vertical" ImageUrl={specialOffer} />
            <Card type="vertical" ImageUrl={specialOffer} />
            <Card type="vertical" ImageUrl={specialOffer} /> */}

        </Slider>
      </div>
}