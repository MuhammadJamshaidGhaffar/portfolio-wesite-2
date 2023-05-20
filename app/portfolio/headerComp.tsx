import Image from "next/image"
import PortfolioLabel from "./portfolioLabel"


const links = ["Home" , "About" , "Servies" , "Projects"]

export default function HeaderComp(){


    return <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <PortfolioLabel />
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {links.map(link=> <a key={link} className="mr-5 text-red-600 hover:text-white hover:border-b-2 hover:bg-red-500 py-1 px-2 rounded-lg  cursor-pointer" href={`#${link.toLowerCase()}`}>{link}</a>    )}
      </nav>
      
    </div>
  </header>
}