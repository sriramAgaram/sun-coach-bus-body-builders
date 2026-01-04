import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store/store";


// SVG Icon Components
const BusRebodyIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {/* Crossed Wrench and Screwdriver Icon */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5l-3 3" />
  </svg>
);

const CertificateIcon = () => (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {/* Certificate/Document Icon for FC Work */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    {/* Checkmark for certification */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Icon mapping function
const getServiceIcon = (serviceId: string) => {
  switch (serviceId) {
    case "bus-rebody":
      return <BusRebodyIcon />;
    case "bus-fc-work":
      return <CertificateIcon />;
    default:
      return <BusRebodyIcon />;
  }
};



const Service = () => {
  const servicesData = useSelector((state: RootState) => state.data.servicesPage);

  if (!servicesData) {
    return <div className="min-h-screen flex items-center justify-center bg-[#111a22] text-white">Loading...</div>;
  }

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>



      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-linear-to-b from-transparent via-[#0d1419]/80 to-[#0d1419]/90 overflow-hidden backdrop-blur-sm">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-6">
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider drop-shadow-sm">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 drop-shadow-lg">
              <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {servicesData.title}
              </span>
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              {servicesData.description}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-transparent backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {servicesData.services.map((service: any) => (
                <div
                  key={service.id}
                  className="group relative bg-linear-to-br from-gray-800/40 via-gray-800/20 to-gray-900/40 rounded-2xl p-8 md:p-10 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2 overflow-hidden backdrop-blur-md"
                >
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon Section */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="shrink-0 w-20 h-20 bg-linear-to-br from-blue-600/20 to-blue-800/20 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-blue-600/30 backdrop-blur-sm shadow-lg">
                        <div className="filter drop-shadow-lg">
                          {getServiceIcon(service.id)}
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 drop-shadow-md">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Key Features Section */}
                    <div className="bg-linear-to-br from-gray-900/60 to-gray-800/40 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1 h-6 bg-linear-to-b from-blue-600 to-blue-400 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
                        <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider drop-shadow-sm">
                          Key Features
                        </h4>
                      </div>
                      <ul className="space-y-4">
                        {service.keyFeatures.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start gap-3 group/feature">
                            <div className="shrink-0 mt-1">
                              <div className="w-6 h-6 rounded-full bg-linear-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300 shadow-sm">
                                <svg
                                  className="w-4 h-4 text-green-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                            </div>
                            <span className="text-white/80 text-base leading-relaxed group-hover/feature:text-white transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-8 pt-6 border-t border-gray-700/50">
                      <a
                        href="https://wa.me/919943143945"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 group/cta"
                      >
                        <span>Get Started</span>
                        <svg
                          className="w-5 h-5 transform group-hover/cta:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-transparent backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-linear-to-br from-blue-600/10 via-blue-700/5 to-transparent rounded-2xl p-8 md:p-12 border border-blue-600/20 backdrop-blur-sm shadow-xl shadow-blue-900/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                Ready to Get Started?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your bus body building and maintenance needs. We're here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919943143945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-600/50 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5 font-semibold rounded-lg transition-all duration-200"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
