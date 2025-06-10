import Link from 'next/link';

const HpHeader = () => {
    return (
        <header className="fixed top-0 w-full bg-[#000D15] text-white py-5 font-thin opacity-100 tracking-wide z-50 min-h-[80px] flex items-center md:justify-end justify-center">
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