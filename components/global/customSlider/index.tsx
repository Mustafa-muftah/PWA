import Slider from "react-slick";
import { ReactNode, useEffect, useRef, useState } from "react";

interface oneRowSliderProps {
  children: ReactNode;
  slidesToShow: number;
  numberOfSlidesProps: number;
  numberOfRows: number;
  title: string;
}

export const CustomSlider: React.FC<oneRowSliderProps> = ({
  children,
  slidesToShow,
  numberOfSlidesProps,
  numberOfRows,
  title,
}) => {
  const [numOfSlides, setNumOfSlides] = useState(0);
  const [numberOfSlidesAvailable, setNumOfSlidesAvailable] = useState<number>();
  const slider = useRef<any>();
  const next = () => {
    slider.current.slickNext();
    setNumOfSlides(numOfSlides + 1);
  };
  const previous = () => {
    slider.current.slickPrev();
    setNumOfSlides(numOfSlides - 1);
  };

  useEffect(() => {
    if (numberOfRows === 1) {
      setNumOfSlidesAvailable(numberOfSlidesProps - slidesToShow);
    } else {
      setNumOfSlidesAvailable(
        Math.floor(numberOfSlidesProps / slidesToShow) - 1
      );
    }
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: false,
    dotsClass: "customSliderDots",
    slidesPerRow: numberOfRows,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow - 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow - 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesToShow - 3 == 0 ? 1 : slidesToShow - 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={"oneRowSliderContainer"}>
      <div className={"sliderTop"}>
        <div className="sliderTitle">
          <span>{title}</span>
        </div>
        <div className={"sliderButtons__wrapper"}>
          <button
            className="prev"
            disabled={numOfSlides === 0}
            onClick={() => previous()}
          ></button>
          <button
            className="next"
            disabled={numOfSlides === numberOfSlidesAvailable}
            onClick={() => next()}
          ></button>
        </div>
      </div>
      <Slider ref={(c) => (slider.current = c)} {...settings}>
        {children}
      </Slider>
    </div>
  );
};
