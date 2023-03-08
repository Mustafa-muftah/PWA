import { Footer } from "@/components/layout/footer"
import { NavBar } from "@/components/layout/navBar"
import styles from "./landingPage.module.scss"


export const LandingPage:React.FC = () => {
    return(
        <div className={styles.container}>
            <NavBar/>
            <Footer/>
        </div>
    )
}