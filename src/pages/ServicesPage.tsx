
import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ICTCBTCentre from "@/components/sections/ICTCBTCentre";
import MediaSchool from "@/components/sections/MediaSchool";
import { ArrowLeft } from "lucide-react";

const ServicesPage = () => {
  const navigate = useNavigate();
  // Create refs for each section for scrolling
  const ictRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactRedirect = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* Simple header with back button */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
        <div className="container flex items-center">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-center flex-grow mr-14">Our Services</h1>
        </div>
      </header>
      
      <main className="flex-grow w-full pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-navy to-school-burgundy py-20 md:py-28">
          <div className="container text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif" data-aos="fade-up">Our Services</h1>
            <p className="max-w-2xl mx-auto text-lg mb-10" data-aos="fade-up" data-aos-delay="100">
              Discover our specialized services in ICT/CBT testing and media production
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Button 
                onClick={() => scrollToSection(ictRef)} 
                className="bg-white text-school-navy hover:bg-gray-100"
                size="lg"
              >
                ICT/CBT Centre
              </Button>
              <Button 
                onClick={() => scrollToSection(mediaRef)} 
                className="bg-school-gold text-school-navy hover:bg-school-gold/90"
                size="lg"
              >
                Media School
              </Button>
            </div>
          </div>
        </section>
        
        {/* Tabs for quick navigation */}
        <div className="bg-white shadow-md py-4 sticky top-16 z-30">
          <div className="container">
            <Tabs defaultValue="ict" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger 
                  value="ict" 
                  onClick={() => scrollToSection(ictRef)}
                  className="data-[state=active]:bg-school-navy data-[state=active]:text-white"
                >
                  ICT/CBT Centre
                </TabsTrigger>
                <TabsTrigger 
                  value="media" 
                  onClick={() => scrollToSection(mediaRef)}
                  className="data-[state=active]:bg-school-navy data-[state=active]:text-white"
                >
                  Media School
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* ICT/CBT Centre Section */}
        <div ref={ictRef}>
          <ICTCBTCentre />
        </div>
        
        {/* Media School Section */}
        <div ref={mediaRef}>
          <MediaSchool />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
