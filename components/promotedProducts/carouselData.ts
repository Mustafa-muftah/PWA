import { StaticImageData } from "next/image"
import promotedProduct01 from "../../public/promotedProductsImages/promotedProduct01.jpg"
import promotedProduct02 from "../../public/promotedProductsImages/promotedProduct02.jpg"
import promotedProduct03 from "../../public/promotedProductsImages/promotedProduct03.jpg"
import promotedProduct04 from "../../public/promotedProductsImages/promotedProduct04.jpg"
import promotedProduct05 from "../../public/promotedProductsImages/promotedProduct05.jpg"
import promotedProduct06 from "../../public/promotedProductsImages/promotedProduct06.jpg"
import promotedProduct07 from "../../public/promotedProductsImages/promotedProduct07.jpg"
import promotedProduct08 from "../../public/promotedProductsImages/promotedProduct08.jpg"
import promotedProduct09 from "../../public/promotedProductsImages/promotedProduct09.jpg"
import promotedProduct010 from "../../public/promotedProductsImages/promotedProduct010.jpg"


interface promotedData {
    image:StaticImageData | string ,
    link:string
}

export const promotedProductsData:promotedData[] =[
    {
      image:promotedProduct01,
      link:"/"
    },
    {
        image:promotedProduct02,
        link:"/"
      },
      {
        image:promotedProduct03,
        link:"/"
      },
      {
        image:promotedProduct04,
        link:"/"
      },
      {
        image:promotedProduct05,
        link:"/"
      },
      {
        image:promotedProduct06,
        link:"/"
      },
      {
        image:promotedProduct07,
        link:"/"
      },
      {
        image:promotedProduct08,
        link:"/"
      },
      {
        image:promotedProduct09,
        link:"/"
      },
      {
        image:promotedProduct010,
        link:"/"
      },
]