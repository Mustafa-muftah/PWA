import styles from "./textField.module.scss";
import Image from "next/image";
import Search from "../../../public/search.svg";
import MenuSvg from "../../../public/icons/menuSVG"
export const TextField: React.FC = () => {
  return (
    <div className={styles.container}> 
      <button className={styles.mobileNavLinks}>
         <MenuSvg className={styles.menuImage}/>
      </button>
      <input
        data-testid={"text-feild"}
        // value={value}
        // onChange={(e) => search(e.target.value)}
        type="text"
        required
        placeholder="Search by product name,category and type…"
      />
      <button className={styles.SearchBtn}>
        <Image src={Search} alt="SearchIcon" />
      </button>
    </div>
  );
};
