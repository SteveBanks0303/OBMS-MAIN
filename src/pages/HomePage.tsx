
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "@/components/home/Hero";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Facilities from "@/components/sections/Facilities";
import Board from "@/components/sections/Board";
import Achievements from "@/components/sections/Achievements";
import Awards from "@/components/sections/Awards";
import Gallery from "@/components/sections/Gallery";
import ContactForm from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const location = useLocation();
  
  // Create refs for each section for scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle redirect from services page to contact section
  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        scrollToSection(contactRef);
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar 
        onAboutClick={() => scrollToSection(aboutRef)}
        onFacilitiesClick={() => scrollToSection(facilitiesRef)}
        onBoardClick={() => scrollToSection(boardRef)}
        onAchievementsClick={() => scrollToSection(achievementsRef)}
        onAwardsClick={() => scrollToSection(awardsRef)}
        onGalleryClick={() => scrollToSection(galleryRef)}
        onContactClick={() => scrollToSection(contactRef)}
        onNewsClick={() => {}} // Empty function to satisfy TypeScript
        onAdmissionsClick={() => scrollToSection(contactRef)} // Direct to contact section
      />
      <main className="flex-grow w-full">
        <Hero />
        <div ref={aboutRef}>
          <About />
        </div>
        
        {/* Board Section - After About */}
        <div ref={boardRef}>
          <Board />
        </div>
        
        <FeaturedPrograms />
        
        {/* Awards Section - After FeaturedPrograms */}
        <div ref={awardsRef}>
          <Awards />
        </div>
        
        {/* Services Section with Cards */}
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-school-gray-light to-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-school-yellow to-school-yellow-light rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-school-blue mb-4 md:mb-6">Our Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Discover our additional services providing ICT solutions and media production through our specialized centers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="200">
              {/* ICT/CBT Centre Card */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-school-blue/30 transition-all duration-500 transform hover:-translate-y-2">
                <div className="h-48 md:h-64 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="ICT/CBT Centre"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-blue/60 to-transparent"></div>
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                    <span className="bg-school-yellow text-school-blue px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                      JAMB Accredited
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-school-blue mb-3 md:mb-4 group-hover:text-school-blue-light transition-colors">
                    ICT/CBT Centre
                  </h3>
                  <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    Our JAMB-accredited Computer Based Test (CBT) centre provides comprehensive examination services and ICT solutions.
                  </p>
                  <Link to="/services">
                    <Button className="w-full bg-gradient-to-r from-school-blue to-school-blue-dark hover:from-school-blue-dark hover:to-school-blue text-white font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base py-2 md:py-3">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Media School Card */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-school-yellow/30 transition-all duration-500 transform hover:-translate-y-2">
                <div className="h-48 md:h-64 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Media School"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-yellow/60 to-transparent"></div>
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                    <span className="bg-school-yellow text-school-blue px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                      Creative Hub
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-school-blue mb-3 md:mb-4 group-hover:text-school-yellow transition-colors">
                    Media School
                  </h3>
                  <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                    ORITAMEFA School of Media, Vocational and Entrepreneurial Studies offers professional creative training programs.
                  </p>
                  <Link to="/services">
                    <Button className="w-full bg-gradient-to-r from-school-yellow to-school-yellow-light hover:from-school-yellow-light hover:to-school-yellow text-school-blue font-bold transition-all duration-300 transform hover:scale-105 text-sm md:text-base py-2 md:py-3">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div ref={facilitiesRef}>
          <Facilities />
        </div>
        <div ref={achievementsRef}>
          <Achievements />
        </div>
        <div ref={galleryRef}>
          <Gallery />
        </div>
        <div ref={contactRef}>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
