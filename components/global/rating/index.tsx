import StarIcon from "@/public/icons/starSVG"
import styles from "./rating.module.scss"



export const Rating:React.FC =()=>{
    return(
        <div className={styles.container}>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        <StarIcon/>
        </div>
    )
}