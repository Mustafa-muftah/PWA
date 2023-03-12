import { brandsData } from "./brandsData"
import Image from "next/image"
import Link from "next/link"
import { CustomSlider } from "../global/customSlider"
import styles from "./brands.module.scss"



export const Brands:React.FC =()=>{
    return<>
    <CustomSlider slidesToShow={6} numberOfRows={1} title={"Brands"} numberOfSlidesProps={brandsData.length}>
    {brandsData.map((brand,index)=>{
        return <div key={index}>
           <Link href={brand.link}> <Image className={styles.image} src={brand.image} alt={brand.brandsName}></Image></Link>
            <Link className={styles.brandLink} href={brand.link}>{brand.brandsName}</Link>
        </div>
    } )}
    </CustomSlider>
     </>
}