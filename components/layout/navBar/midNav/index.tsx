import Image from "next/image";
import Link from "next/link";
import styles from "./midNav.module.scss";
import Logo from "../../../../public/logo_.svg";
import { TextField } from "@/components/global/textField";
import { UserLinks } from "./userLinks";

export const MidNav: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"}>
      <Image src={Logo} alt="Logo" />
      </Link>
      <TextField />
      <UserLinks/>
      
    </div>
  );
};
