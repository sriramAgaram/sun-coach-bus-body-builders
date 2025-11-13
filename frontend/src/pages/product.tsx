import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";

const Product = () => {
  const productsData = useSelector((state: RootState) => state.data.productsPage);
  const busImages = useSelector((state: RootState) => state.data.busImages);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  if (!productsData) {
    return <div className="min-h-screen bg-[#111a22] text-white flex items-center justify-center">Loading...</div>;
  }

  const getProductImages = (imageType: string) => {
    return (busImages as Record<string, string[]>)[imageType] || [];
  };

  return (
    <div className="relative w-full bg-[#111a22] overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-[#0d1419] to-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              {productsData.title}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {productsData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-[#111a22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.products.map((product) => {
              const images = getProductImages(product.imageType);
              const mainImage = images[0] || "";
              
              return (
                <div
                  key={product.id}
                  className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                >
                  {/* Product Image */}
                  <div className="relative aspect-video overflow-hidden bg-gray-900">
                    {mainImage ? (
                      <img
                        src={mainImage}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <span className="text-6xl">{product.icon}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-lg font-semibold">{product.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{product.icon}</span>
                      <h3 className="text-white text-xl font-bold">{product.name}</h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center text-blue-400 text-sm font-medium">
                      {selectedProduct === product.id ? "Show Less" : "View Details"}
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${selectedProduct === product.id ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedProduct === product.id && (
                    <div className="px-6 pb-6 space-y-4 border-t border-gray-700/50 pt-6">
                      {/* Key Features */}
                      <div>
                        <h4 className="text-white text-lg font-semibold mb-3 flex items-center gap-2">
                          <span className="text-blue-400">✅</span>
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {product.keyFeatures.map((feature, index) => (
                            <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Additional Info */}
                      {product.additionalInfo && (
                        <div className="bg-blue-600/10 border-l-4 border-blue-600 p-4 rounded-r-lg">
                          <p className="text-white/90 text-sm leading-relaxed">
                            {product.additionalInfo}
                          </p>
                        </div>
                      )}

                      {/* Product Images Gallery */}
                      {images.length > 1 && (
                        <div>
                          <h4 className="text-white text-lg font-semibold mb-3">Gallery</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {images.slice(1, 5).map((image, index) => (
                              <div key={index} className="aspect-video overflow-hidden rounded-lg">
                                <img
                                  src={image}
                                  alt={`${product.name} ${index + 2}`}
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      <section className="py-16 md:py-24 bg-[#0d1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productsData.products.map((product, index) => {
            const images = getProductImages(product.imageType);
            const isEven = index % 2 === 0;

            return (
              <div
                key={product.id}
                className={`mb-24 last:mb-0 ${index > 0 ? "pt-12 border-t border-gray-700/50" : ""}`}
              >
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}>
                  {/* Image Section */}
                  <div className="flex-1 w-full">
                    {images.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {images.slice(0, 4).map((image, imgIndex) => (
                          <div key={imgIndex} className="aspect-video overflow-hidden rounded-xl">
                            <img
                              src={image}
                              alt={`${product.name} ${imgIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
                        <span className="text-9xl">{product.icon}</span>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl">{product.icon}</span>
                      <h2 className="text-white text-3xl sm:text-4xl font-bold">{product.name}</h2>
                    </div>
                    <div className="w-24 h-1 bg-blue-600 mb-6"></div>
                    
                    <p className="text-white/90 text-lg leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
                        <span className="text-blue-400">✅</span>
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {product.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-white/80 flex items-start gap-3">
                            <span className="text-blue-400 mt-1 shrink-0">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {product.additionalInfo && (
                      <div className="bg-blue-600/10 border-l-4 border-blue-600 p-6 rounded-r-lg">
                        <p className="text-white/90 leading-relaxed">
                          {product.additionalInfo}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Product;
