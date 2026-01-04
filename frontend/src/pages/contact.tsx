import { useSelector } from "react-redux";
import { FadeIn } from "../components/ui/FadeIn";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import type { RootState } from "../redux/store/store";

const Contact = () => {
  const contactData = useSelector((state: RootState) => state.data.contactPage);

  if (!contactData) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Instagram": return <Instagram className="w-6 h-6" />;
      case "Facebook": return <Facebook className="w-6 h-6" />;
      case "MessageCircle": return <MessageCircle className="w-6 h-6" />;
      case "Mail": return <Mail className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-x-hidden font-sans">

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
                {contactData.title}
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 shadow-[0_0_15px_rgba(37,99,235,0.8)] rounded-full"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {contactData.description}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Contact Information */}
            <FadeIn delay={0.2} direction="right" className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Contact Information</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-blue-600/20 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Phone & WhatsApp</h4>
                      <p className="text-white text-lg font-semibold">{contactData.contactInfo.phone}</p>
                      <p className="text-white/80 text-base">{contactData.contactInfo.whatsapp}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-blue-600/20 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Email</h4>
                      <p className="text-white text-lg font-semibold break-all">{contactData.contactInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="p-4 bg-blue-600/20 rounded-xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">Address</h4>
                      <p className="text-white text-lg font-semibold leading-relaxed">
                        {contactData.contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {contactData.socialLinks.map((social: any, idx: number) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/50 rounded-xl transition-all duration-300 group"
                    >
                      <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                        {getIcon(social.icon)}
                      </span>
                      <span className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {social.platform}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.4} direction="left">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                    />
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transform hover:-translate-y-1 transition-all duration-300">
                    Send Message
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;