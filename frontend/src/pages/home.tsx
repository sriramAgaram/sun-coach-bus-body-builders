import { useMemo } from "react";
import { useSelector } from "react-redux";
import EmblaCarousel from "../components/EmblaCarousel";
import type { RootState } from "../redux/store/store";

const Home = () => {
  const heroBanner = useSelector((state: RootState) => state.data.homePage.heroBanner.bgImages[0]);
  const busImages = useSelector((state: RootState) => state.data.busImages);
  const clientImages = useSelector((state: RootState) => state.data.clientImages);

  const slides = useMemo(() => {
    return Object.entries(busImages).flatMap(([type, images]) =>
      images.map((image) => ({
        image,
        alt: `${type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} Bus`,
      }))
    );
  }, [busImages]);

  const clientSlides = useMemo(() => clientImages.map(image => ({ image, alt: 'Client Logo' })), [clientImages]);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#111a22] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section Container */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="w-full">
              <div
                className="flex min-h-[400px] md:min-h-[480px] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-6 sm:p-8 text-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${heroBanner})` }}
              >
                <div className="flex flex-col gap-2 max-w-4xl">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                    Crafting Journeys, Building Dreams
                  </h1>
                  <h2 className="text-white text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                    SRI MURUGA VILAS is a leading manufacturer of high-quality buses, dedicated to providing innovative and reliable transportation solutions.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 sm:h-12 px-4 sm:px-6 bg-[#1380ec] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#1170d8] transition-colors duration-200">
                  <span className="truncate">Explore Our Fleet</span>
                </button>
              </div>
            </div>

            {/* Insights Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-4 pt-5 pb-3">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">
                Insights
              </h2>
              <p className="text-white text-sm sm:text-base font-normal leading-normal">
                With over 30 years of experience, SRI MURUGA VILAS has established itself as a pioneer in the bus manufacturing industry. Our commitment to excellence, innovation,
                and customer satisfaction drives us to create vehicles that exceed expectations. We blend cutting-edge technology with meticulous craftsmanship to deliver buses that
                are not only durable and safe but also comfortable and stylish.
              </p>
            </div>

            {/* Product Overview Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-4 pt-5 pb-3">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Product Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4 hover:bg-gray-750 transition-colors duration-200">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-CHkicsQGhFyO0mM2m9k8L5uxYE_EHgg90Zf2RdaaDuOAxlauwRdtoRB_Me6TlKpi9HQLKf2YnTcyP1wbxloB41itpPf-TrIuPMsasfDf_3Lw0FHXU1H8sr93d2h7-0-pFSz3_ROD3fhgGvCuC_LGOtrz5Nj6qLSGun_lnOwvFeX2pgobk1ii0Q-Nfgbozkoqe2DXuG5EKJZQHZ-HRulcehEtQi6Gc1JHjza1ojd5jt53IxZmwRC5UeT5UWrAkZmhh0E7UbHzt2K8"
                    alt="Luxury Coaches"
                    className="w-full aspect-video bg-cover rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-white text-lg font-medium leading-normal">Luxury Coaches</p>
                    <p className="text-[#92adc9] text-sm font-normal leading-normal">Experience the ultimate in comfort and style with our range of luxury coaches.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4 hover:bg-gray-750 transition-colors duration-200">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVHdOd4Ic38omzfl1DB3uT3hKAo_G3UDyGQHL7Nzrqk2GyhM61W_XGLmh_OdQpIk8qSoV3q6cCCwq7u3J9KRkOoaHjka8EL4u8v8dCG_13X4PB4H--OoBvNihPvemZxaBv1a7PwkY5esfmYww6MS5Fs4xFTNSIoWR1AY76B5dMnEbHfu6j1Cf9pTSjtXdwocFGRbYxlhUCr0IlBv3fm4YCU_yoKK5RFAM0Ik3hst4_OOjU-NQTHVdFH4n0FB2njMw7C6z2p5bTSVCO"
                    alt="School Buses"
                    className="w-full aspect-video bg-cover rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-white text-lg font-medium leading-normal">School Buses</p>
                    <p className="text-[#92adc9] text-sm font-normal leading-normal">
                      Safe, reliable, and efficient transportation solutions for schools and educational institutions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4 sm:col-span-2 lg:col-span-1 hover:bg-gray-750 transition-colors duration-200">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChFcKAnpEvWoRxexWjQXBaYeRY9DraCe1aAG4VySSQqF5wj3q68fB48t4_fp6IwVh0DdqVPUt6Q-5OoDzmxK8zPysnMVM__tGlvmL5_fiH2KP7gJQOLuhxTbo4qItdjkg5jE7YWQlIOrGgq4l042tsRl7czJDZ-siMwHCc60BeTdQE2quoV7q7AUMj6LMN-QUXJy4-z55TJWtVmOZIlcNTcDhUEbtsZrOf1IPGLSVkxjOWINjmFPTTMw9-TfiORiDPPzragwrJrnH3"
                    alt="City Transit Buses"
                    className="w-full aspect-video bg-cover rounded-lg object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-white text-lg font-medium leading-normal">City Transit Buses</p>
                    <p className="text-[#92adc9] text-sm font-normal leading-normal">Modern and accessible buses designed for urban transit systems.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bus Gallery Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-4 pt-5 pb-3">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Our Bus Gallery
              </h2>
              <div className="w-full">
                <EmblaCarousel slides={slides} />
              </div>
            </div>

            {/* Our Clients Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-4 pt-5 pb-5">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">
                Our Clients
              </h2>
              <div className="w-full">
                <EmblaCarousel slides={clientSlides} enableAutoplay={true} imageHeight="h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
