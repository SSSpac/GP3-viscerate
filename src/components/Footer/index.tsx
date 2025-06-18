import Image from "next/image";
import logo from "/public/images/title.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-4">

                {/* Logo & Title */}
                <div className="flex flex-col items-center">
                    <Image src={logo} alt="Viscreate Logo" className="w-28 h-auto" />
                    <h2 className="text-red-500 text-2xl font-bold mt-3">Webcrafters</h2>
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
                    <h3 className="text-lg font-semibold text-red-500 mb-3">Social Media</h3>
                    <ul className="space-y-2">
                        <li><a href="/Twitter" className="hover:text-red-500 transition">Twitter</a></li>
                        <li><a href="/youtube" className="hover:text-red-500 transition">youtube</a></li>
                        <li><a href="/Instagram" className="hover:text-red-500 transition">Instagram</a></li>
                    </ul>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-lg font-semibold text-red-500 mb-3">Contact</h3>
                    <p>📞 Phone: +123 456 7890</p>
                    <p>📧 Email: contact@viscreate.com</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
                <p>&copy; 2025 Viscreate. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer