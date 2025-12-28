import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface Slide {
  image: string;
  alt: string;
  link?: string;
}

interface EmblaCarouselProps {
  slides: Slide[];
  enableAutoplay?: boolean;
  imageHeight?: string;
}

export default function EmblaCarousel({ slides, enableAutoplay = false, imageHeight }: EmblaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Convert Tailwind height class to CSS if provided
  const getImageStyle = () => {
    const baseStyle: React.CSSProperties = {
      objectFit: 'contain',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      margin: '0 auto',
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    };
    
    if (imageHeight) {
      // Handle Tailwind classes like "h-32" (128px)
      if (imageHeight.includes('h-32')) {
        baseStyle.height = '128px';
        baseStyle.maxHeight = '128px';
        baseStyle.width = 'auto';
      } else if (imageHeight.includes('h-24')) {
        baseStyle.height = '96px';
        baseStyle.maxHeight = '96px';
        baseStyle.width = 'auto';
      } else if (imageHeight.includes('h-40')) {
        baseStyle.height = '160px';
        baseStyle.maxHeight = '160px';
        baseStyle.width = 'auto';
      } else {
        baseStyle.maxHeight = '384px';
        baseStyle.width = '100%';
      }
    } else {
      baseStyle.maxHeight = '384px';
      baseStyle.width = '100%';
    }
    
    return baseStyle;
  };

  // Auto-play functionality
  useEffect(() => {
    if (enableAutoplay && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enableAutoplay, slides.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    // Reset autoplay timer when manually changing slides
    if (enableAutoplay && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
    }
  };

  const goToPrevious = () => {
    goToSlide((activeIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    goToSlide((activeIndex + 1) % slides.length);
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg w-full">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full shrink-0 flex justify-center items-center"
              style={{
                width: '100%',
                minWidth: '100%',
                flexShrink: 0,
              }}
            >
              {slide.link ? (
                <Link to={slide.link} className="w-full block px-2 md:px-4">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    style={getImageStyle()}
                    className="block mx-auto"
                  />
                </Link>
              ) : (
                <div className="w-full px-2 md:px-4">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    style={getImageStyle()}
                    className="block mx-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-10 md:h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200 z-10"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-10 md:h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200 z-10"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
