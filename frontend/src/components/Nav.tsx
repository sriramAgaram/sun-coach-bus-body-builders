import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store/store";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = useSelector((state: RootState) => state.data.layout.navbar.navLinks);
  const brand = useSelector((state: RootState) => state.data.layout.navbar.brand);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo and Name */}
          <div className="flex items-center space-x-3">
            <img
              src={brand?.logo}
              alt={brand?.name}
              className="h-10 w-auto rounded-lg shadow-md"
            />
            {/* <div className="text-white font-bold text-lg tracking-tight">
              {brand?.name}
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 4).map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-slate-800"
              >
                {link.label === "About" ? "About Us" : link.label}
              </Link>
            ))}
            <Link
              to="/gallery"
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-slate-800"
            >
              Clients
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-md hover:bg-slate-800 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2 shadow-lg">
              {navLinks.slice(0, 4).map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label === "About" ? "About Us" : link.label}
                </Link>
              ))}
              <Link
                to="/gallery"
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Clients
              </Link>
              <div className="pt-4 border-t border-slate-700">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-md">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
