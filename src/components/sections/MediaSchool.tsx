
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Video, Camera, Pen, Image, GalleryHorizontal, Film } from "lucide-react";

const services = [
  {
    title: "Videography",
    description: "Professional video production services for events, documentaries, commercials, and educational content.",
    icon: <Video className="h-8 w-8 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Studio Use",
    description: "Access to our fully-equipped studio space for photography, recording, and video production projects.",
    icon: <GalleryHorizontal className="h-8 w-8 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Photography",
    description: "High-quality photography services for events, portraits, products, and professional headshots.",
    icon: <Camera className="h-8 w-8 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
  },
  {
    title: "Content Creation",
    description: "Comprehensive content creation services for social media, websites, and marketing campaigns.",
    icon: <Image className="h-8 w-8 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "Graphics Design",
    description: "Creative graphic design services for branding, marketing materials, publications, and digital assets.",
    icon: <Pen className="h-8 w-8 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
  },
  {
    title: "Cinematography",
    description: "Artistic cinematography for film projects, music videos, commercials, and special events.",
    icon: <Film className="h-8 w-8 text-purple-600" />,
    image: "https://images.unsplash.com/photo-1500210701739-862f47490b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const MediaSchool = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title mx-auto after:left-1/3 after:right-1/3">ORITAMEFA School of Media</h2>
          <h3 className="text-xl font-medium text-school-burgundy mb-4">VOCATIONAL AND ENTREPRENEURIAL STUDIES, IBADAN</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Developing creative professionals through hands-on training in media production, visual arts, and digital content creation.
          </p>
        </div>
        
        {/* About the School */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16" data-aos="fade-up">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-serif font-bold text-school-navy mb-4">Discover Our Media School</h3>
            <p className="text-gray-700 mb-4">
              ORITAMEFA School of Media, Vocational and Entrepreneurial Studies is dedicated to developing the next generation of creative professionals. Our programs combine technical training with practical experience, ensuring our graduates are ready to excel in the dynamic media industry.
            </p>
            <p className="text-gray-700 mb-4">
              With industry-standard equipment and experienced instructors, we provide a learning environment that nurtures creativity while building practical skills that are in high demand.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Professional Training</span>
              <span className="bg-purple-800 text-white px-4 py-1 rounded-full text-sm">Industry Connections</span>
              <span className="bg-purple-400 text-white px-4 py-1 rounded-full text-sm">Hands-on Learning</span>
              <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">Creative Development</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <LazyLoadImage
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Media School"
              effect="blur"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
        
        {/* Services Grid */}
        <h3 className="text-2xl font-serif font-bold text-center text-school-navy mb-8" data-aos="fade-up">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
            >
              <div className="h-48 overflow-hidden">
                <LazyLoadImage
                  src={service.image}
                  alt={service.title}
                  effect="blur"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {service.icon}
                  <CardTitle className="text-xl font-serif text-purple-800">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-serif font-bold text-school-navy mb-4">Ready to Explore Your Creative Potential?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're interested in starting a career in media or enhancing your existing skills, our programs are designed to help you succeed.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Contact Us for Enrollment Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaSchool;
