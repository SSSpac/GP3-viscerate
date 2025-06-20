import Image from "next/image";
import logo from "/public/images/title_2.png";
import {footerContactDetails, footerLinks, footerDevelopersList, footerCopyright, footerLocation} from "@/data/footerData";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image src={logo} alt="Viscerate Logo" className="w-48 h-auto"/>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-lg font-semibold text-red-500 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="hover:text-red-500 transition flex items-center justify-center sm:justify-start gap-8"
                >
                  {link.label ? (
                    link.label
                  ) : (
                    <Image src={link.logo!} alt="Logo" width={80} height={20} />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-lg font-semibold text-red-500 mb-3">
            {footerLocation.title}
          </h3>
          <p className="hover:text-red-500 transition text-sm max-w-xs">
            {footerLocation.address}
          </p>
        </div>

        {/* Contact & Developers */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-lg font-semibold text-red-500 mb-3">
            {footerContactDetails.title}
          </h3>
          <p className="text-sm break-words w-full">
            📞 <span className="font-medium">Phone:</span>{" "}
            {footerContactDetails.phone}
          </p>
          <p className="text-sm break-all w-full">
            📧 <span className="font-medium">Email:</span>{" "}
            {footerContactDetails.email}
          </p>

          <h4 className="font-semibold text-red-500 mt-5 mb-2">
            Web Developers
          </h4>
          <ul className="space-y-1">
            {footerDevelopersList.map((dev) => (
              <li key={dev.id} className="text-sm">
                {dev.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
        <p>{footerCopyright.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
