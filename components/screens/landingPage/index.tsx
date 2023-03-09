import { PromotedProducts } from "@/components/promotedProducts"
import styles from "./landingPage.module.scss"


export const LandingPage:React.FC = () => {
    return(
        <div className={styles.container}>
            <PromotedProducts/>
        </div>
    )
}