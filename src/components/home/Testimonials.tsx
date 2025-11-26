
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Placeholder data - should be replaced with actual testimonials
const testimonialData = [
  {
    content: "Oritamefa Baptist A-Level College prepared me exceptionally well for university. The quality of teaching and support helped me secure a scholarship to study Engineering at a top UK university.",
    student: "Oluwaseun Adeyemi",
    program: "Cambridge A-Level",
    year: "2022",
    image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    content: "The JUPEB program at OBMS gave me a solid foundation for university studies. I was able to gain direct entry into 200 level at the University of Ibadan, saving time and gaining advanced knowledge.",
    student: "Chioma Okafor",
    program: "JUPEB",
    year: "2023",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
  },
  {
    content: "The SAT preparation course significantly improved my score, which was crucial for my admission to an Ivy League university in the United States. The teachers were dedicated and knowledgeable.",
    student: "David Ogunlola",
    program: "SAT Preparation",
    year: "2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-school-navy text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-white mx-auto after:bg-school-gold after:left-1/3 after:right-1/3">
            Student Success Stories
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from our alumni about how their experience at Oritamefa Baptist Model Schools A-Level College shaped their academic journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto border-4 border-school-gold">
                    <img
                      src={testimonialData[activeIndex].image}
                      alt={testimonialData[activeIndex].student}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote>
                    <p className="text-xl italic font-serif mb-6">
                      "{testimonialData[activeIndex].content}"
                    </p>
                    <footer>
                      <div className="font-bold text-lg text-school-gold">
                        {testimonialData[activeIndex].student}
                      </div>
                      <div className="text-gray-300">
                        {testimonialData[activeIndex].program}, Class of {testimonialData[activeIndex].year}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-school-gold w-6" : "bg-white/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
