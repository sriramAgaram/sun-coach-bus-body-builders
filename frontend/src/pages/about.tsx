import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store/store";

const About = () => {
  const aboutData = useSelector((state: RootState) => state.data.aboutPage);

  if (!aboutData) {
    return <div className="min-h-screen bg-[#111a22] text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="relative w-full bg-[#111a22] overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-[#0d1419] to-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              {aboutData.title}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {aboutData.whoWeAre.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-6"></div>
            <h3 className="text-blue-400 text-2xl sm:text-3xl font-semibold mb-4">
              {aboutData.whoWeAre.companyName}
            </h3>
          </div>
          <div className="max-w-4xl">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
              {aboutData.whoWeAre.description}
            </p>
            <div className="space-y-4">
              {aboutData.whoWeAre.details.map((detail: string, index: number) => (
                <p key={index} className="text-white/80 text-base md:text-lg leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {aboutData.whatWeDo.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-6"></div>
          </div>
          <div className="max-w-4xl">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
              {aboutData.whatWeDo.description}
            </p>
            <div className="bg-blue-600/10 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                {aboutData.whatWeDo.highlight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 md:py-24 bg-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300">
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                {aboutData.vision.title}
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                {aboutData.vision.description}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300">
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                {aboutData.mission.title}
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                {aboutData.mission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {aboutData.whyChooseUs.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {aboutData.whyChooseUs.description}
            </p>
          </div>
        </div>
      </section>

      {/* Why Customers Trust Us Section */}
      <section className="py-16 md:py-24 bg-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {aboutData.whyCustomersTrustUs.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              {aboutData.whyCustomersTrustUs.promise}
            </p>
          </div>
          
          {/* Trust Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.whyCustomersTrustUs.points.map((point: any, index: number) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{point.icon}</span>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {point.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Insights Section */}
      <section className="py-16 md:py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {aboutData.clientInsights.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          
          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.clientInsights.items.map((insight: any, index: number) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border-t-4 border-blue-600 hover:border-blue-500 transition-all duration-300"
              >
                <p className="text-blue-400 text-sm font-medium mb-2 uppercase tracking-wide">
                  {insight.label}
                </p>
                <p className="text-white text-lg md:text-xl font-semibold">
                  {insight.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 md:py-24 bg-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {aboutData.certificates.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            {aboutData.certificates.description && (
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                {aboutData.certificates.description}
              </p>
            )}
          </div>
          
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {aboutData.certificates.items.map((cert: any, index: number) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-lg font-semibold">
                      {cert.name}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-gray-800/90">
                  <p className="text-white text-sm font-medium text-center">
                    {cert.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Certificates Link */}
          <div className="text-center mt-12">
            <Link
              to="/certificates"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Certificates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
