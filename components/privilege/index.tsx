import { CustomSlider } from "../global/customSlider"
import {privilageData} from "./privilageData"
import styles from "./privilage.module.scss"
import Image from "next/image"

export const Privilage:React.FC =()=>{
    return<>
     <span className={styles.privilageTitle}>MedexSepeti has a privilege for everyone</span>
    <CustomSlider numberOfSlides={6} numberOfRows={1}>
    {privilageData.map((privilage,index)=>{
        return <div key={index}>
            <Image className={styles.image} src={privilage.image} alt={privilage.privilageType}></Image>
            <span className={styles.privilageType}>{privilage.privilageType}</span>
        </div>
    } )}
    </CustomSlider>
    
    </>
}