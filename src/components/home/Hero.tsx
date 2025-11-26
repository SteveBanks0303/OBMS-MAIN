
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, Play, ArrowRight, Award, Users, BookOpen, GraduationCap, Trophy, Target, Home, Clock } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-school-navy/95 via-school-blue/90 to-school-navy/95"></div>
        <img 
          src="/assets/BG.jpg"
          alt="School Campus"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-school-yellow/20 rounded-full animate-ping`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-20 text-center relative pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-8" data-aos="fade-up">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-school-yellow/20 to-school-gold/20 border border-school-yellow/30 rounded-full text-school-yellow text-sm font-medium backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Cambridge Advanced A'Level College
            </div>
            
            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-white font-serif leading-tight">
                <span className="block text-5xl md:text-7xl lg:text-8xl font-light text-school-yellow mb-4 tracking-wide">
                  ORITAMEFA
                </span>
               <span className="block text-5xl md:text-7xl lg:text-6xl font-light text-school-yellow mb-4 tracking-wide">
                  BAPTIST MISSION SCHOOLS
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">CAMBRIDGE ADVANCED A'LEVEL COLLEGE</span>
              </h1>
              
              <p className="text-blue-100 text-xl md:text-2xl lg:text-3xl leading-relaxed font-light max-w-4xl mx-auto">
                Shaping Tomorrow's Leaders Through 
                <span className="text-school-yellow font-semibold"> Excellence</span>, 
                <span className="text-school-gold font-semibold"> Innovation</span>, 
                and <span className="text-white font-semibold">Character</span>
              </p>

              {/* Boarding and Day Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white">
                  <Home className="w-5 h-5 mr-2 text-school-yellow" />
                  <span className="font-medium">Boarding Students</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white">
                  <Clock className="w-5 h-5 mr-2 text-school-gold" />
                  <span className="font-medium">Day Students</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                onClick={() => scrollToSection('about')}
                className="group bg-gradient-to-r from-school-yellow to-school-gold hover:from-school-gold hover:to-school-yellow text-school-navy font-bold px-10 py-6 text-xl transform transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl rounded-2xl"
                size="lg"
              >
                <span className="mr-3">Discover Our Story</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Link to="/apply">
                <Button 
                  variant="outline"
                  className="group border-3 border-school-yellow bg-transparent hover:bg-school-yellow text-school-yellow hover:text-school-navy font-bold px-10 py-6 text-xl transform transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl rounded-2xl backdrop-blur-sm"
                  size="lg"
                >
                  <span className="mr-3">Apply Today</span>
                  <GraduationCap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <button 
          onClick={() => scrollToSection('about')}
          className="group text-school-yellow flex flex-col items-center animate-bounce hover:text-school-gold transition-colors"
        >
          <span className="mb-3 text-sm font-medium tracking-wide">Explore More</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
