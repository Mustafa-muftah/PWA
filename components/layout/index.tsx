import { ReactNode } from "react"
import { Footer } from "./footer"
import { NavBar } from "./navBar"

interface layOutProps {
    children:ReactNode
}

export const Layout:React.FC<layOutProps> =({children}) => {
    return(
        <>
         <NavBar/>
          {children}
         <Footer/>
        </>
    )

}