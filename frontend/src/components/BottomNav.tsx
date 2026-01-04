import { Link, useLocation } from "react-router-dom";
import { Home, Bus, Wrench, Image, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BottomNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    // Scrolling down
                    setIsVisible(false);
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    const navItems = [
        { label: "Home", path: "/", icon: Home },
        { label: "Products", path: "/products", icon: Bus },
        { label: "Services", path: "/services", icon: Wrench },
        { label: "Gallery", path: "/gallery", icon: Image },
        { label: "Contact", path: "/contact", icon: Phone },
    ];

    return (
        <div className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 md:hidden w-[90%] max-w-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-[200%]"
            }`}>
            <div className="bg-[#111a22]/80 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-3 shadow-[0_8px_32px_rgb(0_0_0/0.4)] flex justify-between items-center relative">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentPath === item.path;

                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="relative flex flex-col items-center justify-center p-2 w-12 h-12"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-600 rounded-full"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30
                                    }}
                                />
                            )}
                            <div className="relative z-10">
                                <Icon
                                    size={22}
                                    strokeWidth={2}
                                    className={`transition-colors duration-200 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                                        }`}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomNav;
