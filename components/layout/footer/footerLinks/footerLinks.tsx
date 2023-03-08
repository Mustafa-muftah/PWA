import Link from "next/link"
import { footerLinks } from "../links"
import Image from "next/image"
import style from "./footerLinks.module.scss"

export const FooterLinks:React.FC = () => {
    return (
        <div className={style.container}>
         {footerLinks.map((section, index) => {
           return (<div className={style.wrapper} key={index}>
            <div className={style[section.className]} >{section.section}</div>
            <ul>
            {section.links.map((link , index) => {
             return <li key={index}>
                <Link href={link.link}>
                {link.icon && <link.icon/>}
                {link.name}
                </Link>
                </li>
            })}
            </ul>
       </div> )})}
        </div>
    )
}