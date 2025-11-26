
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Replace these with actual high-quality images of the school facilities
const facilities = {
  classrooms: [
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  ],
  laboratories: [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80",
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ],
  library: [
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ],
  hostels: [
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1606744777008-fe7579132cd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  ]
};

const Facilities = () => {
  const [activeTab, setActiveTab] = useState("classrooms");

  return (
    <section className="py-16 md:py-24 bg-school-lightBlue" id="facilities">
      <div className="container">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-school-yellow to-school-gold rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-school-navy mb-6">Our Facilities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            OBMS Cambridge A'Level College boasts state-of-the-art facilities designed to enhance the learning experience and development of our students.
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <Tabs defaultValue="classrooms" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 bg-white/50 p-2 rounded-2xl">
              <TabsTrigger value="classrooms" className="data-[state=active]:bg-school-navy data-[state=active]:text-white rounded-xl transition-all duration-300">Classrooms</TabsTrigger>
              <TabsTrigger value="laboratories" className="data-[state=active]:bg-school-navy data-[state=active]:text-white rounded-xl transition-all duration-300">Laboratories</TabsTrigger>
              <TabsTrigger value="library" className="data-[state=active]:bg-school-navy data-[state=active]:text-white rounded-xl transition-all duration-300">Library</TabsTrigger>
              <TabsTrigger value="hostels" className="data-[state=active]:bg-school-navy data-[state=active]:text-white rounded-xl transition-all duration-300">Hostels</TabsTrigger>
            </TabsList>
            
            {Object.entries(facilities).map(([key, images]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
                      {images.map((image, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                          <LazyLoadImage
                            src={image}
                            alt={`${key} facility`}
                            effect="blur"
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="p-6 pt-0">
                      <h3 className="font-serif text-xl font-bold mb-2 text-school-navy">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </h3>
                      <p className="text-gray-600">
                        {key === 'classrooms' && 'Modern, well-ventilated classrooms equipped with digital learning tools and comfortable furniture to create an optimal learning environment.'}
                        {key === 'laboratories' && 'State-of-the-art science and computer laboratories with the latest equipment for practical learning and research work.'}
                        {key === 'library' && 'Extensive library with a rich collection of books, digital resources, and quiet study areas to support academic research.'}
                        {key === 'hostels' && 'Comfortable, secure residential facilities with modern amenities, providing a home away from home for our boarding students.'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
