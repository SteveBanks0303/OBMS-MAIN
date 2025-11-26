
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";

interface NavbarProps {
  onAboutClick: () => void;
  onFacilitiesClick: () => void;
  onAchievementsClick: () => void;
  onNewsClick: () => void;
  onGalleryClick: () => void;
  onContactClick: () => void;
  onAdmissionsClick: () => void;
  onBoardClick?: () => void;
  onAwardsClick?: () => void;
}

const Navbar = ({
  onAboutClick,
  onFacilitiesClick,
  onAchievementsClick,
  onNewsClick,
  onGalleryClick,
  onContactClick,
  onAdmissionsClick,
  onBoardClick,
  onAwardsClick
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: "About", action: onAboutClick },
    { name: "Facilities", action: onFacilitiesClick },
    { name: "Board", action: onBoardClick || (() => { }) },
    { name: "Achievements", action: onAchievementsClick },
    { name: "Awards", action: onAwardsClick || (() => { }) },
    { name: "Gallery", action: onGalleryClick },
    { name: "Contact", action: onContactClick }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${scrolled
        ? "bg-white/95 backdrop-blur-2xl shadow-2xl py-2 border-b border-school-yellow/20"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container flex items-center justify-between relative">
        {/* Enhanced Logo */}
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex items-center group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/assets/logo.png"
              alt="School Logo"
              className="h-16 w-auto object-contain mr-4 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="ml-1">
            <h1 className={`font-serif font-bold text-xl md:text-2xl transition-all duration-500 ${scrolled ? 'text-school-navy' : 'text-white'} group-hover:text-school-yellow transform group-hover:scale-105`}>
              OBMS Cambridge
            </h1>
            <p className={`text-sm md:text-base font-medium transition-all duration-500 ${scrolled ? 'text-school-blue' : 'text-school-yellow'} opacity-90 group-hover:opacity-100`}>
              A'Level College
            </p>
          </div>
        </div>

        {/* Enhanced Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={link.action}
              className={`relative font-medium px-5 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${scrolled
                ? 'text-school-navy hover:text-school-yellow hover:bg-gradient-to-r hover:from-school-yellow/10 hover:to-school-gold/10'
                : 'text-white hover:text-school-yellow hover:bg-white/10'
                }`}
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-school-yellow/20 to-school-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-school-yellow to-school-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
            </button>
          ))}
          <Link to="/apply" className="ml-4">
            <Button
              className="relative bg-gradient-to-r from-school-yellow to-school-gold hover:from-school-gold hover:to-school-yellow text-school-navy font-bold px-6 py-3 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-school-gold to-school-yellow translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative z-10">Apply Now</span>
            </Button>
          </Link>
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${scrolled ? 'text-school-navy' : 'text-white'} ${mobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
            <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${scrolled ? 'text-school-navy' : 'text-white'} ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`} />
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-school-navy/98 via-school-blue/95 to-school-navy/98 backdrop-blur-xl z-40 flex flex-col transition-all duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="flex-1 flex flex-col justify-center items-center space-y-6 px-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                link.action();
                setMobileMenuOpen(false);
              }}
              className="relative text-white text-xl font-medium py-4 px-8 border-2 border-transparent hover:border-school-yellow hover:text-school-yellow transition-all duration-300 rounded-xl w-full max-w-xs text-center group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-school-yellow/10 to-school-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
              <span className="relative z-10">{link.name}</span>
            </button>
          ))}
          <Link to="/apply" className="w-full max-w-xs">
            <Button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-school-yellow to-school-gold hover:from-school-gold hover:to-school-yellow text-school-navy font-bold py-4 text-lg rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
