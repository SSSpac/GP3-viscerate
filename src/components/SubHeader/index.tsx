'use client';
import Link from "next/link"
import {link} from '../../data/data'
import { usePathname } from 'next/navigation';


const SubHeader = () => {
      const pathname = usePathname();
     if (pathname === '/') return null;

  
  return(
      <div className="top-0 w-full bg-[#000D15] text-white font-thin opacity-100 pt-4 pl-7 font-['Aboreto']
         hover:text-gray-300 transition-colors "> 
        <Link  href={link.href} >{link.text}</Link>
      </div>
     
    )
}

export default SubHeader