'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HpHeader = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
     
    useEffect(() => {
        const controlHeader = () => {
          if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                    setVisible(false);

                } else {
                    setVisible(true);
                }
                setLastScrollY(window.scrollY);
                 }
        };
         window.addEventListener('scroll', controlHeader);
           return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY]);
    return (
        <header className={`fixed top-0 w-full bg-[#000D15] text-white py-5 font-thin opacity-100 tracking-wide z-50 min-h-[80px] flex items-center md:justify-end justify-center transition-transform duration-300 ${ 
            visible ? 'translate-y-0' : '-translate-y-full '}`}>
             <Link 
                href="/team" 
                className="md:relative md:right-28 font-['Aboreto'] text-xl hover:text-gray-300 transition-colors md:mr-7 tracking-wider"
             >
                ABOUT DEVELOPERS
             </Link>
        </header>
    )
}

export default HpHeader;