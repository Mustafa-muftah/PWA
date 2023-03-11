import Link from "next/link";
import styles from "./bottomNav.module.scss";
import { navLinks } from "./navLinks";

export const BottomNav: React.FC = () => {
  return (
    <div className={styles.container}>
      <button>Home & Family</button>
      <div className={styles.linkContainer}>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <div key={`${index}${link.name}`}>
                <li >
                  <Link href={link.link}>{link.name}</Link>
                </li>
                <div className={styles.vl}></div>
              </div>
            );
          })}
        </ul>
      </div>
      <button className={styles.blackBtn}>Earthquake Products</button>
    </div>
  );
};
