import React, { ReactElement, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { promotedProductsData } from "./carouselData";
import styles from "./promotedProducts.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export const PromotedProducts: React.FC = () => {
  const slider = useRef<any>();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            className={styles.smallSizeImage}
            src={`/promotedProductsImages/promotedProduct0${i + 1}.jpg`}
            alt={`promotedProduct0${i + 1}`}
            width={100}
            height={100}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <div className={styles.container}>
      <Slider ref={(c) => (slider.current = c)} {...settings}>
        {promotedProductsData.map((promotedProduct, index) => {
          return (
            <div key={index}>
              <Link href={promotedProduct.link}>
                {" "}
                <Image
                  className={styles.fullSizeImage}
                  src={promotedProduct.image}
                  alt={`${index}`}
                />
              </Link>
            </div>
          );
        })}
      </Slider>
      <div className={styles.buttonWrapper}>
        <button className={styles.isPrevBtn} onClick={previous}>
          {" "}
        </button>
        <button className={styles.isNextBtn} onClick={next}>
          {" "}
        </button>
      </div>
    </div>
  );
};
