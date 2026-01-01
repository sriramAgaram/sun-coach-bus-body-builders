
import { FadeIn } from "../components/ui/FadeIn";

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>



      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Contact Us</h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <p className="text-white/70 text-lg max-w-2xl mx-auto drop-shadow-sm">
                Get in touch with us for any inquiries or support.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-800/40 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 shadow-xl">
            <p className="text-white/80 text-center">
              Contact form and details coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact