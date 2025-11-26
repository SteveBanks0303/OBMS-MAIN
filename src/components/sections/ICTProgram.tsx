
import { Card, CardContent } from "@/components/ui/card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ictFeatures = [
  {
    title: "Modern Computer Labs",
    description: "State-of-the-art computer facilities equipped with the latest hardware and software.",
    icon: "💻"
  },
  {
    title: "Programming Fundamentals",
    description: "Introduction to programming languages including Python, JavaScript, and HTML/CSS.",
    icon: "👩‍💻"
  },
  {
    title: "Digital Literacy",
    description: "Comprehensive education on office productivity tools, digital research, and online safety.",
    icon: "📱"
  },
  {
    title: "Network Fundamentals",
    description: "Understanding computer networks, security principles, and basic system administration.",
    icon: "🌐"
  }
];

const ICTProgram = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-school-navy to-blue-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">ICT Program</h2>
              <div className="h-1 w-20 bg-school-gold mb-6"></div>
            </div>
            
            <p className="mb-6">
              Our Information and Communications Technology (ICT) program is designed to prepare students for the digital future. Through a combination of theoretical knowledge and practical experience, students develop strong technical skills that complement their academic studies.
            </p>
            
            <p className="mb-8">
              The program covers programming fundamentals, digital literacy, computer hardware and software, and networking basics. Our goal is to ensure all graduates are digitally fluent and prepared for technology-driven higher education environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ictFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className="bg-white/10 backdrop-blur border-none"
                  data-aos="fade-up"
                  data-aos-delay={(index * 100).toString()}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Students in computer lab"
                effect="blur"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-school-gold rounded-lg p-4 shadow-lg hidden md:block" data-aos="fade-up" data-aos-delay="300">
              <p className="font-bold text-school-navy">100% of students</p>
              <p className="text-sm text-school-navy">graduate with ICT proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICTProgram;
