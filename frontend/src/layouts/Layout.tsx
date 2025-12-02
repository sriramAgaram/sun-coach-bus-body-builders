import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import type { RootState } from "../redux/store/store";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import QuoteModal from "../components/QuoteModal";
import { useContentProtection } from "../hooks/useContentProtection";

const Layout = () => {
  useContentProtection();
  const navbarWidgetId = useSelector((state: RootState) => state.data.layout.navbar.widgetId);
  const footerWidgetId = useSelector((state: RootState) => state.data.layout.footer.widgetId);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const renderNav = () => {
    switch (navbarWidgetId) {
      case 'navbar_001':
        return <Nav />;
      default:
        return null;
    }
  };

  const renderFooter = () => {
    switch (footerWidgetId) {
      case 'footer_001':
        return <Footer />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderNav()}
      <main className="relative">
        <Outlet />
      </main>
      {renderFooter()}

      {/* Floating Quote Button */}
      <button
        onClick={() => setIsQuoteOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Get a Quote"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:ml-2">
          Get a Quote
        </span>
      </button>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        productName="General Inquiry"
      />
    </>
  );
};

export default Layout;
