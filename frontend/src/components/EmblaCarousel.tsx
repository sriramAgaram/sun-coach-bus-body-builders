import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  image: string;
  alt: string;
}

interface EmblaCarouselProps {
  slides: Slide[];
  enableAutoplay?: boolean;
  imageHeight?: string;
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", right: "10px" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default function EmblaCarousel({ slides, enableAutoplay = false, imageHeight }: EmblaCarouselProps) {
  const settings = {
    dots: enableAutoplay ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: enableAutoplay ? 5 : 1,
    slidesToScroll: 1,
    autoplay: enableAutoplay,
    autoplaySpeed: 3000,
    nextArrow: enableAutoplay ? <NextArrow /> : undefined,
    prevArrow: enableAutoplay ? <PrevArrow /> : undefined,
    responsive: enableAutoplay ? [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ] : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full ${imageHeight || "h-auto max-h-96"} object-contain rounded-lg shadow-lg`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
