import Link from "next/link"
import {link} from '../../data/data'

const SubHeader = () => {
    return(
      <div className="top-0 w-full bg-transparent text-white font-thin text-xl opacity-100 py-5 px-12 font-aboreto
         hover:text-gray-300 transition-colors "> 
        <Link  href={link.href} >{link.text}</Link>
      </div>
     
    )
}

export default SubHeader
