import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { FadeIn } from "../components/ui/FadeIn";



const Product = () => {
  const productsData = useSelector((state: RootState) => state.data.productsPage);
  const busImages = useSelector((state: RootState) => state.data.busImages);
  const navigate = useNavigate();

  if (!productsData) {
    return <div className="min-h-screen bg-[#111a22] text-white flex items-center justify-center">Loading...</div>;
  }

  const getProductImages = (imageType: string) => {
    return (busImages as Record<string, string[]>)[imageType] || [];
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>



      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <FadeIn direction="up">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 drop-shadow-lg">
                  {productsData.title}
                </h1>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                  {productsData.description}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.products.map((product, index) => {
                const images = getProductImages(product.imageType);
                const mainImage = images[0] || "";

                return (
                  <FadeIn key={product.id} delay={index * 0.1} direction="up" className="h-full">
                    <div
                      className="group bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full flex flex-col backdrop-blur-md shadow-lg"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {/* Product Image */}
                      <div className="relative aspect-video overflow-hidden bg-gray-900 shrink-0">
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
                            <p className="text-white text-lg font-semibold drop-shadow-md">{product.name}</p>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Details - Removed as we now navigate to detail page */}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
