import { ContactUs } from "./contactUs/contactUs"
import { FooterLinks } from "./footerLinks/footerLinks"
import styles from "./footer.module.scss"
import Image from "next/image";
import PaymentImage from "../../../public/footer/paymentMethods.jpg"
import { TopFooter } from "./topFooter";
import { MidFooter } from "./midFooter";
import { useAction } from '../../../appState/Hooks/useAction';
import { useTypeSelector } from '../../../appState/Hooks/useTypedSelector';


export const Footer:React.FC =() => {
  const isFooterVisible = useTypeSelector((state)=>state.global.isFooterVisible);
   const { setFooterVisibilty } = useAction();

    return (
      <div className={styles.container}>
        <TopFooter/>
        <div className={styles.mobileOnly}>
        {!isFooterVisible && <button onClick={()=>setFooterVisibilty(true)}>Show More</button>}
        </div>
        {isFooterVisible  && 
        <>
         <div className={styles.midFooterContainer}>
        <MidFooter/>
        </div>
        <div className={styles.wrapper}>
      <FooterLinks/>
      <ContactUs/>
        </div>
        <Image src={PaymentImage} alt={"payment"} />
        <span>© Copyright 2023   medexsepeti.com </span>
        </> }
        <div className={styles.mobileOnly}>
        {isFooterVisible && <button onClick={()=>setFooterVisibilty(false)}>Show less</button>}
        </div>
        </div>
    )
}