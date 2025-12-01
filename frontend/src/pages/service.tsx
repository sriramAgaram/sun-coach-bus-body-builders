import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";

const Service = () => {
  const servicesData = useSelector((state: RootState) => state.data.servicesPage);

  if (!servicesData) {
    return <div className="min-h-screen flex items-center justify-center bg-[#111a22] text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#111a22] text-white font-sans">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-b from-gray-900 to-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {servicesData.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {servicesData.description}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.services.map((service: any) => (
            <div
              key={service.id}
              className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center text-4xl">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-gray-900/50 rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.keyFeatures.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
