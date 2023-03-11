import Link from "next/link";
import React from "react";
import styles from "./bottomNav.module.scss";
import { navLinks } from "./navLinks";

export const BottomNav: React.FC = () => {
  return (
    <div className={styles.container}>
      <button>Home & Family</button>
      <div className={styles.linkContainer}>
        <ul>
          {navLinks.map((link, index) => {
            return (<React.Fragment key={`${index}${link.name}`}>
                <li >
                  <Link href={link.link}>{link.name}</Link>
                </li>
                <div className={styles.vl}></div>
                </React.Fragment>
            );
          })}
        </ul>
      </div>
      <button className={styles.blackBtn}>Earthquake Products</button>
    </div>
  );
};
