import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Replace with actual high-quality images of school activities and events
const galleryImages = [
  {
    src: "assets/img23.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img30.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img31.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img32.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img33.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img34.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img35.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img36.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img37.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img38.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img2.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img40.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img41.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img42.jpg",
    alt: "Graduation Ceremony",
  },
  {
    src: "assets/img43.jpg",
    alt: "Graduation Ceremony",
  },
 
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    setCurrentSlide(value[0]);
  };

  return (
    <section className="py-8 md:py-16 bg-school-gray" id="gallery">
      <div className="container">
        <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
          <h2 className="section-title mx-auto after:left-1/3 after:right-1/3">Our Gallery</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore moments from our campus life, academic activities, events, and achievements at OBMS Cambridge A'Level College.
          </p>
        </div>
        
        <div className="px-2 md:px-12" data-aos="fade-up" data-aos-delay="200">
          {/* Main Image Slideshow */}
          <div className="relative aspect-[16/9] max-h-[600px] overflow-hidden rounded-xl shadow-xl mb-6">
            <div 
              className="h-full w-full cursor-pointer"
              onClick={() => setSelectedImage(galleryImages[currentSlide].src)}
            >
              <LazyLoadImage
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].alt}
                effect="blur"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-4">
                <p className="text-lg font-medium">{galleryImages[currentSlide].alt}</p>
                <p className="text-sm">Click to view larger image</p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <Button 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 h-auto" 
              onClick={prevSlide}
              size="icon"
            >
              <ArrowLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 h-auto" 
              onClick={nextSlide}
              size="icon"
            >
              <ArrowRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
          
          {/* Slider Navigation */}
          <div className="mt-4 px-6">
            <Slider
              value={[currentSlide]}
              max={galleryImages.length - 1}
              step={1}
              onValueChange={handleSliderChange}
              className="w-full"
            />
          </div>
        </div>
        
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
