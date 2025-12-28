import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmblaCarousel from "../components/EmblaCarousel";
import type { RootState } from "../redux/store/store";

const Home = () => {
  const heroBanner = useSelector((state: RootState) => state.data.homePage.heroBanner.bgImages[0]);
  const heroData = useSelector((state: RootState) => state.data.homePage.heroBanner);
  const busImages = useSelector((state: RootState) => state.data.busImages);
  const clientImages = useSelector((state: RootState) => state.data.clientImages);
  // const servicesData = useSelector((state: RootState) => state.data.homePage.services);

  // Prepare client slides
  const clientSlides = useMemo(() =>
    clientImages.map(image => ({ image, alt: 'Client Logo' })),
    [clientImages]
  );

  // // Prepare service slides
  // const serviceSlides = useMemo(() => {
  //   if (!servicesData?.items) return [];
  //   return servicesData.items.map((service: any) => ({
  //     title: service.name,
  //     description: service.description,
  //     icon: service.icon,
  //   }));
  // }, [servicesData]);

  // Prepare product slides from bus types
  const productSlides = useMemo(() => {
    const products = [
      {
        id: "tourist-bus",
        name: "Tourist Bus",
        description: "Luxury and comfort focused, AC/Non-AC options, aerodynamic design.",
        image: busImages.tourBus?.[0] || busImages.moffusilBus?.[0] || "",
      },
      {
        id: "school-bus",
        name: "School Bus",
        description: "High-strength structure, anti-slip flooring, and bright yellow identification for safety.",
        image: busImages.schoolBus?.[0] || "",
      },
      {
        id: "city-town-bus",
        name: "City / Town Bus",
        description: "Strong structure for urban transport, easy passenger movement with wide doors.",
        image: busImages.cityBus?.[0] || "",
      },
      {
        id: "mofussil-bus",
        name: "Mofussil Bus",
        description: "Built for long-distance/intercity travel with robust chassis and high luggage space.",
        image: busImages.moffusilBus?.[0] || "",
      },
      {
        id: "mini-bus",
        name: "Mini Bus",
        description: "Compact and versatile for various uses including staff and tourism.",
        image: busImages.miniBus?.[0] || "",
      },
      {
        id: "college-bus",
        name: "College Bus",
        description: "Rugged body and student safety focused manufacturing.",
        image: busImages.collageBus?.[0] || "",
      },
    ];
    return products.filter(p => p.image);
  }, [busImages]);

  return (
    <div className="relative w-full bg-[#111a22] overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      {/* Hero Banner Section - Full Width */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-24">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            {heroData.title}
          </h1>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
            {heroData.subtitle1}
          </p>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
            {heroData.subtitle2}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Our Fleet
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 text-base font-semibold rounded-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 md:py-24 bg-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed text-center">
              Sun Coach Builders, an ISO 9001 certified company in Karur, Tamil Nadu, is a trusted and leading name in bus body manufacturing with a legacy of over two decades. Our journey began with a vision to redefine bus body building in India by blending engineering precision, craftsmanship, and modern design excellence.
            </p>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed text-center mt-4">
              Detailed Product Information: Travels/Tourist Bus, Mofussil Bus, City / Town Bus, Staff Bus, College Bus, School Bus, and Mini Bus. We specialize in high-quality bus manufacturing for tourism, education, and corporate mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview Carousel */}
      <section className="py-16 md:py-24 bg-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Product Overview
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Explore our diverse range of buses designed for every transportation need
            </p>
          </div>
          <div className="mt-12">
            <EmblaCarousel
              slides={productSlides.map(p => ({
                image: p.image,
                alt: p.name,
                link: `/product/${p.id}`
              }))}
            />
          </div>
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {productSlides.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 block"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 md:py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our Clients
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Trusted by leading organizations across the country
            </p>
          </div>
          <div className="mt-12">
            <EmblaCarousel slides={clientSlides} enableAutoplay={true} imageHeight="h-32" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
