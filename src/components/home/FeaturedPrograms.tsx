
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "Cambridge A-Level",
    description: "A globally recognized qualification accepted by universities worldwide, offering subject specialization for university preparation.",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "JUPEB",
    description: "Joint Universities Preliminary Examination Board program providing direct entry into 200 level in Nigerian universities.",
    icon: "📚",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "IGCSE",
    description: "International General Certificate of Secondary Education, preparing students for advanced study with a global perspective.",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "TOEFL Preparation",
    description: "Comprehensive preparation for the Test of English as a Foreign Language, required for admission to many English-speaking universities.",
    icon: "🗣️",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    title: "SAT Preparation",
    description: "Strategic preparation for the Scholastic Aptitude Test, enhancing students' chances for admission to top universities worldwide.",
    icon: "✏️",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const FeaturedPrograms = () => {
  return (
    <section id="featured-programs" className="py-16 md:py-24 bg-school-gray">
      <div className="container">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="section-title mx-auto after:left-1/3 after:right-1/3">Our Academic Programs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer various internationally recognized academic programs designed to prepare students for university education both in Nigeria and abroad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
              data-aos="fade-up" 
              data-aos-delay={(index * 100).toString()}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="text-4xl mb-4">{program.icon}</div>
                <CardTitle className="text-xl font-serif text-school-navy">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{program.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
