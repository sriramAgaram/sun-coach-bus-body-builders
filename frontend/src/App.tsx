import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

// Lazy load page components
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Service = lazy(() => import("./pages/service"));
const Product = lazy(() => import("./pages/product"));
const Contact = lazy(() => import("./pages/contact"));
const Gallery = lazy(() => import("./pages/gallery"));
const Certificates = lazy(() => import("./pages/certificates"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-[#111a22] text-white"><div className="text-xl">Loading...</div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
            <Route path="products" element={<Product />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="certificates" element={<Certificates />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
