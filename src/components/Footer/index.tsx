import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/title_2.png";
import { footerContactDetails, footerLinks, footerDevelopersList, footerCopyright, footerLocation, footerMedia} from "@/data/footerData";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
        <div className="flex flex-col items-center sm:items-center text-center sm:text-left">
             <Link href="/">
            <Image src={logo} alt="Viscreate Logo" className="w-48 h-auto cursor-pointer" />
          </Link>
          </div>
          {/* Navigation Links */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-red-500 mb-3">{footerLinks.title}</h3>
                <ul className="space-y-2">
                  {footerLinks.links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="hover:text-red-500 transition flex items-center justify-center gap-2"
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
        <div className="flex flex-col items-center sm:items-center text-center sm:text-left">
          <h3 className="text-lg font-semibold text-red-500 mb-3">
            {footerLocation.title}
          </h3>
           <a
              href={footerLocation.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition text-sm max-w-xs"
            >
              {footerLocation.address}
            </a>
        </div>

        {/* Contact & Developers */}
        <div className="flex flex-col items-center sm:items-center text-center sm:text-center">
          <h3 className="text-lg font-semibold text-red-500 mb-3">
            {footerContactDetails.title}
          </h3>
          <p className="text-sm break-words w-full">
            📞 <span className="font-medium">Phone:</span>{" "}
            <a href={`tel:${footerContactDetails.phone}`}
              className="hover:text-red-500">
            {footerContactDetails.phone}
            </a>
          </p>
          <p className="text-sm break-all w-full">
            📧 <span className="font-medium">Email:</span>{" "}
            <a href={`mailto:${footerContactDetails.email}`}
              className="hover:text-red-500">
            {footerContactDetails.email}
            </a>
          </p>
          <h4 className="font-semibold text-red-500 mt-5 mb-2">
            {footerMedia.developers.title}
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

export default Footer