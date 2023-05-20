import Image from "next/image"
import programmingSvg from "./programing.svg"

export default function PortfolioLabel(){
    return <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={programmingSvg} alt="SVG" width={60}/>
    <span className="ml-3 text-xl">Portfolio</span>
  </a>
}