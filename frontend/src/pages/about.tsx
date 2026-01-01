import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { FadeIn } from "../components/ui/FadeIn";

const About = () => {
  const aboutData = useSelector((state: RootState) => state.data.aboutPage);

  if (!aboutData) {
    return <div className="min-h-screen bg-[#111a22] text-white flex items-center justify-center">Loading...</div>;
  }


  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>



      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <FadeIn direction="up">
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8 tracking-tight drop-shadow-lg">
                  {aboutData.title}
                </h1>
                <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Who We Are Section - Scroll Reveal */}
        <section className="py-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <FadeIn direction="up">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 tracking-tight drop-shadow-md">
                  {aboutData.whoWeAre.title}
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                <h3 className="text-blue-400 text-xl md:text-2xl font-semibold drop-shadow-sm">
                  {aboutData.whoWeAre.companyName}
                </h3>
              </FadeIn>
            </div>
            <div className="max-w-4xl mx-auto px-4">
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl font-medium text-white/95 mb-12 text-center leading-relaxed drop-shadow-sm">
                  {aboutData.whoWeAre.description}
                </p>
              </FadeIn>

              <div className="space-y-8 mt-16">
                {aboutData.whoWeAre.details.map((detail: string, index: number) => (
                  <FadeIn key={index} delay={index * 0.2}>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center font-light drop-shadow-sm">
                      {detail}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <FadeIn>
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
                  {aboutData.whatWeDo.title}
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              </FadeIn>
            </div>
            <div className="max-w-5xl mx-auto">
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl font-medium text-white/95 mb-12 text-center leading-relaxed drop-shadow-sm">
                  {aboutData.whatWeDo.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-12">
                <div className="bg-blue-600/10 border border-blue-600/20 p-8 md:p-10 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                  <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed text-center">
                    "{aboutData.whatWeDo.highlight}"
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-24 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Vision */}
              <FadeIn className="h-full">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-10 border border-white/10 h-full hover:border-blue-500/30 transition-all duration-500 backdrop-blur-md shadow-lg">
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 drop-shadow-md">
                    {aboutData.vision.title}
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                  <p className="text-white/80 text-lg leading-relaxed font-light">
                    {aboutData.vision.description}
                  </p>
                </div>
              </FadeIn>

              {/* Mission */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-3xl p-10 border border-white/10 h-full hover:border-blue-500/30 transition-all duration-500 backdrop-blur-md shadow-lg">
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 drop-shadow-md">
                    {aboutData.mission.title}
                  </h2>
                  <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                  <p className="text-white/80 text-lg leading-relaxed font-light">
                    {aboutData.mission.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
                  {aboutData.whyChooseUs.title}
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                <p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light drop-shadow-sm">
                  {aboutData.whyChooseUs.description}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Customers Trust Us Section */}
        <section className="py-16 md:py-24 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
                {aboutData.whyCustomersTrustUs.title}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-sm">
                {aboutData.whyCustomersTrustUs.promise}
              </p>
            </div>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutData.whyCustomersTrustUs.points.map((point: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-md shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl shrink-0 drop-shadow-md">{point.icon}</span>
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

        {/* Certificates Section */}
        <section className="py-16 md:py-24 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
                {aboutData.certificates.title}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              {aboutData.certificates.description && (
                <p className="text-white/70 text-lg max-w-2xl mx-auto drop-shadow-sm">
                  {aboutData.certificates.description}
                </p>
              )}
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {aboutData.certificates.items.map((cert: any, index: number) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 backdrop-blur-md shadow-lg"
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
                      <p className="text-white text-lg font-semibold drop-shadow-md">
                        {cert.name}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800/80 backdrop-blur-sm">
                    <p className="text-white text-sm font-medium text-center">
                      {cert.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
