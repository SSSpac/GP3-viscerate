import Link from "next/link"
import {link} from '../../data'

const SubHeader = () => {
    return(
      <div className="top-0 w-full bg-[#000D15] text-white font-thin opacity-100 pt-4 pl-7 font-['Aboreto']
         hover:text-gray-300 transition-colors "> 
        <Link  href={link.href} >{link.text}</Link>
      </div>
     
    )
}

export default SubHeader