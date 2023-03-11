import Image from "next/image"
import { topFooter } from "../links"
import styles from "./topFooter.module.scss"


export const TopFooter:React.FC =()=>{
    return<div className={styles.container}>
        {topFooter.map((section , index) => {
            return <div className={styles.sec} key={index}>
                <div className={styles.content}>                
                <span>{section.text}</span>
                <Image src={section.image} alt={section.text}/>
                </div>
                <div className={styles.VL}></div>
            </div>
        })}
    </div>
}