
import Image from "next/image";
import Link from "next/link";
import UserFillIcon from "../../../../public/user_fill_icon.svg"
import UserIcon from "../../../../public/user_icon.svg"
import FavouriteIcon from "../../../../public/heart_icon.svg"
import CartIcon from "../../../../public/cart_icon.svg"
import styles from "./midNav.module.scss"




export const UserLinks:React.FC =() => {
    return(
    <div className={styles.userLinksWrapper}>
    <Link href={"/"} >
    <Image
      priority
      src={UserIcon}
      alt="User Icon"
    />
    <span>Profile</span>
    </Link>
    <Link href={"/"} >
    <Image
      priority
      src={FavouriteIcon}
      alt="Favourite Icon"
    />
    <span>Favourite</span>
    </Link>
    <Link href={"/"} >
    <Image
      priority
      src={CartIcon}
      alt="wallet Icon"
    />
    <span>My Cart</span>
    </Link>

    </div>
    )
}