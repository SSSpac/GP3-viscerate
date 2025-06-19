import Image from "next/image";
import logo from "/Public/images/title_2.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-4">

                {/* Logo & Title */}
                <div className="flex flex-col items-center">
                    <Image src={logo} alt="Viscreate Logo" className="w-48 h-auto " />
                    <h2 className="text-red-500 text-2xl font-bold mt-3">VISCERATE</h2>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-red-500 mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
                        <li><a href="/game" className="hover:text-red-500 transition">Game</a></li>
                        <li><a href="/team" className="hover:text-red-500 transition">Team</a></li>
                    </ul>
                </div>

                      {/* Navigation Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-red-500 mb-3">Location</h3>
                    <div className="space-y-2">
                        <p className="hover:text-red-500 transition">Address</p>
                    </div>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-lg font-semibold text-red-500 mb-3">Contact Us</h3>
                    <p>📞 Phone: 08 33 60 36</p>
                    <p>📧 Email: info@futuregames.se</p>
                    <p className='font-semibold text-red-500'>Webdevelopers</p>
                    <p>Bushra Rauf</p>
                    <p>Dimitar Manastirski</p>
                    <p>May Sunktong</p>
                    <p>Sirilatha Potnuru</p>
                    <p>Lava Sharif</p>
                    <p>Saifelislam Eisa</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
                <p>&copy; 2025 Viscerate. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer