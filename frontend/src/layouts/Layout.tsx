import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import type { RootState } from "../redux/store/store";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  const navbarWidgetId = useSelector((state: RootState) => state.data.layout.navbar.widgetId);
  const footerWidgetId = useSelector((state: RootState) => state.data.layout.footer.widgetId);

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
    </>
  );
};

export default Layout;
