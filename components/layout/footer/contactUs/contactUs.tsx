import WhatsAppIcon from "@/public/icons/whatsAppSVG";
import Link from "next/link";
import { getApp } from "../links";
import styles from "./contactUs.module.scss";
import Image from "next/image";
import QR from "@/public/download.jpg";

export const ContactUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Do you have a question?</div>
      <div className={styles.callUs}>Or call us</div>
      <Link className={styles.support} href="/">
        Customer Support
      </Link>
      <Link className={styles.whatsappBtn} href="/">
        {" "}
        <WhatsAppIcon className={styles.whatsappIcon} />
        <b>Whatsapp</b> &nbsp; Support
      </Link>
      <div className={styles.download}>Download application</div>
      <div className={styles.stores}>
        {getApp.map((store, index) => {
          return (
            <Link key={index} href={store.link}>
              <Image src={store.image} alt={store.link} />
            </Link>
          );
        })}
      </div>
      <div className={styles.QR}>
        <Link href={"/"}>
          <Image src={QR} alt={"qr"} />
        </Link>
      </div>
    </div>
  );
};
