
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import type { RootState } from "../redux/store/store";

const Footer = () => {
  const footerData = useSelector((state: RootState) => state.data.layout.footer);

  const getSocialIcon = (platform: string) => {
    const iconClass = "w-5 h-5";
    switch (platform.toLowerCase()) {
      case "facebook":
        return <FaFacebookF className={iconClass} />;
      case "linkedin":
        return <FaLinkedinIn className={iconClass} />;
      case "instagram":
        return <FaInstagram className={iconClass} />;
      case "twitter":
        return <FaTwitter className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={footerData.brand.logo}
                  alt={footerData.brand.name}
                  className="h-12 w-auto rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {footerData.brand.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {footerData.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                  <span>{footerData.contact.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <FaEnvelope className="text-blue-400 flex-shrink-0" />
                  <a href={`mailto:${footerData.contact.email}`} className="hover:text-blue-400 transition-colors">
                    {footerData.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <FaPhoneAlt className="text-blue-400 flex-shrink-0" />
                  <a href={`tel:${footerData.contact.phone}`} className="hover:text-blue-400 transition-colors">
                    {footerData.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1 md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200 inline-block transform hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links & CTA */}
            <div className="lg:col-span-1 md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
              <div className="flex space-x-4 mb-6">
                {footerData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110 group"
                    aria-label={social.platform}
                  >
                    <div className="group-hover:rotate-12 transition-transform duration-200">
                      {getSocialIcon(social.platform)}
                    </div>
                  </a>
                ))}
              </div>
              {footerData.cta.map((cta, index) => (
                <Link
                  key={index}
                  to={cta.action}
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {cta.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom separator and copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400 font-medium">
              © {new Date().getFullYear()} {footerData.brand.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
