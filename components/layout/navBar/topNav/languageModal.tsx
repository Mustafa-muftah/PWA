
import Link from "next/link"
import styles from"./topNav.module.scss"
import { Cairo } from 'next/font/google'

const cairo = Cairo({
    weight: '500',
    style: 'normal',
    subsets: ['latin'],
  })

export const LanguageModal:React.FC = () => {
    return(
        <div className={styles.modalContainer}>
           <Link href={"/"} className={cairo.className} style={{textTransform:"uppercase"}}>
            English
           </Link>
           <Link href={"/"} className={cairo.className} style={{textTransform:"uppercase"}}>
            Turkish
           </Link>
        </div>
    )
}