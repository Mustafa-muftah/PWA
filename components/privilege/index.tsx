import { CustomSlider } from "../global/customSlider"
import {privilageData} from "./privilageData"
import styles from "./privilage.module.scss"
import Image from "next/image"

export const Privilage:React.FC =()=>{
    return<>
    <CustomSlider slidesToShow={6} numberOfRows={1} title={"MedexSepeti has a privilege for everyone"} numberOfSlidesProps={privilageData.length}>
    {privilageData.map((privilage,index)=>{
        return <div key={index}>
            <Image className={styles.image} src={privilage.image} alt={privilage.privilageType}></Image>
            <span className={styles.privilageType}>{privilage.privilageType}</span>
        </div>
    } )}
    </CustomSlider>
    
    </>
}