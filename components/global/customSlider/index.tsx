import Slider from 'react-slick'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface oneRowSliderProps {
    children: ReactNode
    slidesToShow: number
    numberOfSlidesProps: number
    numberOfRows: number
    title: string
}

export const CustomSlider: React.FC<oneRowSliderProps> = ({
    children,
    slidesToShow,
    numberOfSlidesProps,
    numberOfRows,
    title,
}) => {
    const [numOfSlides, setNumOfSlides] = useState(0)
    const [numberOfSlidesAvailable, setNumOfSlidesAvailable] = useState<number>()
    const [isLastSlide, setLastSlide] = useState<boolean>()

    const breakPoint = {
        bigScreen: 1024,
        midScreen: 600,
        smallScreen: 480,
    }

    const slider = useRef<any>()
    const next = () => {
        slider?.current?.slickNext()
    }
    const previous = () => {
        slider?.current?.slickPrev()
    }

    const mainSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        arrow: false,
        dotsClass: 'customSliderDots',
        mobileFirst: true,
        slidesPerRow: numberOfRows,
        beforeChange: (currentIndex: number, nextIndex: number) => {
            nextIndex === numberOfSlidesAvailable ? setLastSlide(true) : setLastSlide(false)
            !isLastSlide && setNumOfSlides(nextIndex)
        },
        responsive: [
            {
                breakpoint: breakPoint.bigScreen,
                settings: {
                    slidesToShow: slidesToShow - 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: breakPoint.midScreen,
                settings: {
                    slidesToShow: slidesToShow - 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: breakPoint.smallScreen,
                settings: {
                    slidesToShow:
                        (slidesToShow === 6 && slidesToShow - 3) || (slidesToShow === 5 && slidesToShow - 3) || 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const setSlideIndexToRelatedWidnow = () => {
        const windowWidth = window.innerWidth
        if (breakPoint.bigScreen < windowWidth) {
            return 0
        } else if (windowWidth >= breakPoint.smallScreen && windowWidth <= breakPoint.midScreen) {
            return 1
        } else if (windowWidth < breakPoint.smallScreen) {
            return 2
        } else {
            return 0
        }
    }

    useEffect(() => {
        console.log(window.innerWidth)
        console.log(setSlideIndexToRelatedWidnow())
        console.log(mainSettings.responsive[setSlideIndexToRelatedWidnow()])
        if (numberOfRows === 1) {
            window.innerWidth >= breakPoint.bigScreen
                ? setNumOfSlidesAvailable(numberOfSlidesProps - slidesToShow)
                : setNumOfSlidesAvailable(
                      numberOfSlidesProps -
                          mainSettings.responsive[setSlideIndexToRelatedWidnow()].settings.slidesToShow
                  )
        } else {
            window.innerWidth >= breakPoint.bigScreen
                ? setNumOfSlidesAvailable(Math.floor(numberOfSlidesProps / slidesToShow) - 1)
                : setNumOfSlidesAvailable(
                      Math.floor(
                          numberOfSlidesProps /
                              numberOfRows /
                              mainSettings.responsive[setSlideIndexToRelatedWidnow()].settings.slidesToShow
                      )
                  )
        }
    }, [setSlideIndexToRelatedWidnow, isLastSlide])

    useEffect(() => {
        console.log(
            'numberOfSlidesAvailable',
            mainSettings.responsive[setSlideIndexToRelatedWidnow()].settings.slidesToShow
        )
    })

    return (
        <div className={'oneRowSliderContainer'}>
            <div className={'sliderTop'}>
                <div className="sliderTitle">
                    <span>{title}</span>
                </div>
                <div className={'sliderButtons__wrapper'}>
                    <button className="prev" disabled={numOfSlides === 0} onClick={() => previous()}></button>
                    <button className="next" disabled={isLastSlide} onClick={() => next()}></button>
                </div>
            </div>
            <Slider ref={(c) => (slider.current = c)} {...mainSettings}>
                {children}
            </Slider>
        </div>
    )
}
