import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";
import { useState } from "react";



const Gallery = () => {
  const busImages = useSelector((state: RootState) => state.data.busImages);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Flatten all images for "all" view, or filter by category
  const allImages = [
    ...(busImages.tourBus?.map(img => ({ src: img, category: "Tourist Bus" })) || []),
    ...(busImages.moffusilBus?.map(img => ({ src: img, category: "Mofussil Bus" })) || []),
    ...(busImages.cityBus?.map(img => ({ src: img, category: "City Bus" })) || []),
    ...(busImages.schoolBus?.map(img => ({ src: img, category: "School Bus" })) || []),
    ...(busImages.collageBus?.map(img => ({ src: img, category: "College Bus" })) || []),
    ...(busImages.miniBus?.map(img => ({ src: img, category: "Mini Bus" })) || []),
    ...(busImages.seatImages?.map(img => ({ src: img, category: "Seat Images" })) || []),
  ];

  const categories = ["all", "Tourist Bus", "Mofussil Bus", "City Bus", "School Bus", "College Bus", "Mini Bus", "Seat Images"];

  const filteredImages = activeTab === "all"
    ? allImages
    : allImages.filter(img => img.category === activeTab);

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>



      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Our Gallery</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto drop-shadow-sm">
              Explore our extensive collection of custom-built buses, showcasing our craftsmanship and attention to detail.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${activeTab === category
                  ? "bg-blue-600 text-white shadow-lg scale-105 shadow-blue-600/30"
                  : "bg-gray-800/60 text-white/70 hover:bg-gray-700/80 hover:text-white border border-transparent hover:border-gray-600"
                  }`}
              >
                {category === "all" ? "All Images" : category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800/40 aspect-[4/3] cursor-pointer backdrop-blur-md shadow-lg border border-gray-700/30"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm bg-blue-600/90 px-3 py-1 rounded-full backdrop-blur-sm shadow-md">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center text-white/50 py-12">
              <p>No images found for this category.</p>
            </div>
          )}

          {/* Lightbox Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Gallery Preview"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
