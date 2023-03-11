import FacebookIcon from "@/public/icons/facebookSVG"
import InstgramIcon from "@/public/icons/instgramSVG"
import LinkedInIcon from "@/public/icons/linkedinSVG"
import PinterestIcon from "@/public/icons/pinterest"
import TwitterIcon from "@/public/icons/twitterSVG"
import YoutubeIcon from "@/public/icons/youtubeSVG"
import AppStore from "@/public/app-store.png"
import GoogleStore from "@/public/google-store.png"
import footer1 from "@/public/footer/footer1.svg"
import footer2 from "@/public/footer/footer2.svg"
import footer3 from "@/public/footer/footer3.svg"
import footer4 from "@/public/footer/footer4.svg"
import footer5 from "@/public/footer/footer5.svg"

import { StaticImageData } from "next/image"

interface footerLinks {
    name:string,
    link:string,
    icon?:SVGImageElement | any
 }

interface footerSectionTypes {
section:string,
links:footerLinks[],
className:string
}

interface AppInfo {
    link:string,
    image:StaticImageData
}

export const footerLinks:footerSectionTypes[] = [
    {
        section:"MedexSepeti",
        links:[
            {
                name:"About us",
                link:"/"
            },
            {
                name:"Membership Agreement",
                link:"/"
            },
            {
                name:"Contact Us",
                link:"/"
            },
            {
                name:"Privacy policy",
                link:"/"
            }
        ],
        className:"MedexSepeti",

    },
    {
        section:"Categories",
        links:[
            {
                name:"Home & Family",
                link:"/"
            },
            {
                name:"Specialties Products",
                link:"/"
            },
            {
                name:"Dental",
                link:"/"
            },
            {
                name:"Imaging & Lab",
                link:"/"
            },
            {
                name:"Medical Facilities",
                link:"/"
            },
            {
                name:"Rehabilitation & Wellness",
                link:"/"
            },
            {
                name:"Consumables & Clothing",
                link:"/"
            },
            {
                name:"Pharmacy & Personal Care",
                link:"/"
            },
        ],
        className:"Categories",


    },
    {
        section:"Popular Brands",
        links:[
            {
                name:"MOCOM",
                link:"/"
            },
            {
                name:"Dr. Schumacher",
                link:"/"
            },
            {
                name:"Respirox",
                link:"/"
            },
            {
                name:"FİXFLEX",
                link:"/"
            },
            {
                name:"Zhermack",
                link:"/"
            },
            {
                name:"Ultradent",
                link:"/"
            },
            {
                name:"Ultradent",
                link:"/"
            },
            {
                name:"Tokuyama",
                link:"/"
            },
            {
                name:"Voco",
                link:"/"
            },
            {
                name:"FGM - Kibar Dental - Diş Deposu",
                link:"/"
            },
            {
                name:"LASCOD",
                link:"/"
            },
        ],
        className:"Popular_Brands",

    },
    {
        section:"Follow Us",
        links:[
            {
                name:"Facebook",
                link:"/",
                icon: FacebookIcon
            },
            {
                name:"Twitter",
                link:"/",
                icon:TwitterIcon
            },
            {
                name:"Pinterest",
                link:"/",
                icon:PinterestIcon
            },
            {
                name:"YouTube",
                link:"/",
                icon:YoutubeIcon
            },
            {
                name:"Instagram",
                link:"/",
                icon:InstgramIcon
            },
            {
                name:"LinkedIn",
                link:"/",
                icon:LinkedInIcon
            },
        ],
        className:"Follow_Us",

    },
    {
        section:"Payment",
        links:[
            {
                name:"Payment options",
                link:"/",
            },
            {
                name:"Bank Campaigns",
                link:"/"
            }
        ],
        className:"Payment",
    }
]

export const getApp:AppInfo[] = [
    {
        link:"/",
        image:AppStore
    },
    {
        link:"/",
        image:GoogleStore
    },
]
interface TopFooter{
    text:string,
    image:StaticImageData
}
export const topFooter:TopFooter[] =[
    {
        text:"Delivery Today",
        image:footer1
    },
    {
        text:"Easy Return",
        image:footer2
    },
    {
        text:"Instant Transfer",
        image:footer3
    },
    {
        text:"Pay At Door",
        image:footer5
    },
    {
        text:"Multiple Credit Cards",
        image:footer4
    },
    // {
    //     text:"Multiple Credit Cards",
    //     image:footer5
    // }
]