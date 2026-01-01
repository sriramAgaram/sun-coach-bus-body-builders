import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import QuoteModal from "../components/QuoteModal";
import type { RootState } from "../redux/store/store";



const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const productsData = useSelector((state: RootState) => state.data.productsPage);
    const busImages = useSelector((state: RootState) => state.data.busImages);

    const [activeImage, setActiveImage] = useState<string | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveImage(null);
    }, [id]);

    if (!productsData) {
        return <div className="min-h-screen bg-[#111a22] text-white flex items-center justify-center">Loading...</div>;
    }

    const product = productsData.products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#111a22] text-white flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
                <Link to="/products" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Return to Products
                </Link>
            </div>
        );
    }

    const getProductImages = (imageType: string) => {
        return (busImages as Record<string, string[]>)[imageType] || [];
    };

    const images = getProductImages(product.imageType);

    return (
        <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>



            {/* Main Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative w-full py-20 bg-gradient-to-b from-transparent to-black/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <Link to="/products" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Products
                            </Link>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 bg-black/20 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/5">
                            {/* Image Gallery */}
                            <div className="w-full lg:w-1/2">
                                <div className="space-y-4">
                                    {/* Main Image */}
                                    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900 shadow-xl">
                                        {images.length > 0 ? (
                                            <img
                                                src={activeImage || images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span className="text-6xl">{product.icon}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Thumbnails */}
                                    {images.length > 1 && (
                                        <div className="grid grid-cols-4 gap-4">
                                            {images
                                                .filter(img => img !== (activeImage || images[0]))
                                                .slice(0, 4)
                                                .map((image, index) => (
                                                    <div
                                                        key={index}
                                                        className="aspect-video overflow-hidden rounded-lg border border-gray-700/50 cursor-pointer hover:border-blue-500 transition-colors shadow-md bg-gray-900"
                                                        onClick={() => setActiveImage(image)}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`${product.name} thumbnail ${index + 1}`}
                                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                        />
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-5xl drop-shadow-md">{product.icon}</span>
                                    <h1 className="text-white text-4xl sm:text-5xl font-bold drop-shadow-lg">{product.name}</h1>
                                </div>

                                <div className="w-24 h-1 bg-blue-600 mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>

                                <p className="text-white/90 text-lg leading-relaxed mb-8 drop-shadow-sm">
                                    {product.description}
                                </p>

                                <div className="bg-gray-800/40 rounded-xl p-8 border border-gray-700/50 mb-8 backdrop-blur-sm shadow-inner">
                                    <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                                        <span className="text-blue-400">✅</span>
                                        Key Features
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {product.keyFeatures.map((feature, index) => (
                                            <li key={index} className="text-white/80 flex items-start gap-3">
                                                <span className="text-blue-400 mt-1 shrink-0">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {product.additionalInfo && (
                                    <div className="bg-blue-600/10 border-l-4 border-blue-600 p-6 rounded-r-lg backdrop-blur-sm">
                                        <h4 className="text-blue-400 font-semibold mb-2">Additional Information</h4>
                                        <p className="text-white/90 leading-relaxed">
                                            {product.additionalInfo}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-10">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-600/30 transform hover:scale-105 w-full sm:w-auto cursor-pointer"
                                    >
                                        Get Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <QuoteModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    productName={product.name}
                />
            </div>
        </div>
    );
};

export default ProductDetails;
