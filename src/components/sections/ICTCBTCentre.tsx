
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Computer, Edit, FileText, School, BookOpen, CheckCircle } from "lucide-react";

const services = [
  {
    title: "JAMB Registration",
    description: "Complete registration services for the Joint Admissions and Matriculations Board examination with expert guidance.",
    icon: <Edit className="h-8 w-8 text-school-burgundy" />
  },
  {
    title: "JAMB Regularization",
    description: "Professional assistance with JAMB regularization process for candidates who need to correct their admission status.",
    icon: <FileText className="h-8 w-8 text-school-burgundy" />
  },
  {
    title: "Change of Course",
    description: "Seamless process for changing your course choice in JAMB with proper guidance to align with your academic goals.",
    icon: <BookOpen className="h-8 w-8 text-school-burgundy" />
  },
  {
    title: "Change of Institution",
    description: "Expert assistance with the process of changing your institution choice in JAMB to better suit your preferences.",
    icon: <School className="h-8 w-8 text-school-burgundy" />
  },
  {
    title: "Result Checking",
    description: "Quick and reliable JAMB result checking services with professional interpretation and guidance.",
    icon: <CheckCircle className="h-8 w-8 text-school-burgundy" />
  },
  {
    title: "CBT Exams for Organizations",
    description: "Comprehensive computer-based testing solutions for schools, organizations, and institutions with secure environment.",
    icon: <Computer className="h-8 w-8 text-school-burgundy" />
  }
];

const ICTCBTCentre = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title mx-auto after:left-1/3 after:right-1/3">ICT/CBT Centre</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our JAMB-accredited Computer Based Test (CBT) centre provides a range of services for educational testing and examination needs.
          </p>
        </div>
        
        {/* Accreditation Banner */}
        <div className="bg-gradient-to-r from-school-lightBlue to-blue-50 p-6 rounded-lg shadow-md mb-16" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3">
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="JAMB Accredited Centre"
                effect="blur"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-serif font-bold text-school-navy mb-4">JAMB Accredited Centre</h3>
              <p className="text-gray-700 mb-4">
                OBMS Cambridge A'Level College is proud to be an officially accredited JAMB CBT centre. Our state-of-the-art facilities and experienced staff ensure a smooth examination experience for all candidates.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-school-navy text-white px-4 py-1 rounded-full text-sm">Official JAMB Centre</span>
                <span className="bg-school-burgundy text-white px-4 py-1 rounded-full text-sm">Modern Equipment</span>
                <span className="bg-school-gold text-school-navy px-4 py-1 rounded-full text-sm">Reliable Power Supply</span>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Experienced Staff</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-serif text-school-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Facility Images */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-serif font-bold text-center text-school-navy mb-8">Our ICT Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md">
              <LazyLoadImage
                src="assets/img3.jpg"
                alt="Computer Lab"
                effect="blur"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <LazyLoadImage
                src="assets/img4.jpg"
                alt="Testing Centre"
                effect="blur"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <LazyLoadImage
                src="assets/img5.jpg"
                alt="Computer Workstations"
                effect="blur"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICTCBTCentre;
