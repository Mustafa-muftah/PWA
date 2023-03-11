import Link from "next/link"
import styles from"./topNav.module.scss"
import Image from 'next/image';
import WalletIcon from "../../../../public/wallet.svg"
import Headphone from "../../../../public/headphone.svg"
import Language from "../../../../public/wallet.svg"
import { useState } from "react";
import { LanguageModal } from "./languageModal";
import upNavvarImage from "../../../../public/upNavbarImage.jpg"





export const TopNav:React.FC = () => {
    const [openLangDropdown , setOpenLangDropdown] = useState(false);

    return(
      <>
      <Image className={styles.topImage} src={upNavvarImage} alt={""}/>
    <div className={styles.container}>
    <div className={styles.linksWrapper}>
    <Link href={"/"} >
    <Image
      priority
      src={WalletIcon}
      alt="wallet Icon"
    />
     Become a Seller on MedexSepeti 
    </Link>
    <div className={styles.vl}></div>
    <Link href={"/"} >
    <Image
      priority
      src={Headphone}
      alt="Headphone Icon"
    />
    Help & Support 
    </Link>
    <div className={styles.vl}></div>
    <div className={styles.langWrapper}>
    <button onClick={() => setOpenLangDropdown (!openLangDropdown)}  >
    <Image
      priority
      src={Language}
      alt="Language Icon"
    />
    Language 
    </button>
    {openLangDropdown && <LanguageModal/> }
    </div>
    </div>
    </div>
    </>
    )
}