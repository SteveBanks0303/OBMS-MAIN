
import { ModernCarousel } from "@/components/ui/modern-carousel";

const awards = [
  {
    title: "Best A-Level College in Nigeria",
    year: "2023",
    description: "Recognized for outstanding academic performance and student achievement rates in Cambridge A-Level examinations.",
    image: "assets/img21.jpg",
    awardedBy: "Nigerian Educational Excellence Council"
  },
  {
    title: "Excellence in ICT Education",
    year: "2023",
    description: "Outstanding contribution to Information and Communication Technology education and JAMB CBT services.",
    image: "assets/img21.jpg",
    awardedBy: "National ICT Development Agency"
  },
  {
    title: "Pioneer Media Education Award",
    year: "2022",
    description: "Leading institution in vocational media training and entrepreneurial studies in Southwest Nigeria.",
    image: "assets/img21.jpg",
    awardedBy: "Media Practitioners Association of Nigeria"
  },
  {
    title: "Character Development Excellence",
    year: "2022",
    description: "Exceptional commitment to moral and character development alongside academic excellence.",
    image: "assets/img21.jpg",
    awardedBy: "Baptist Educational Foundation"
  }
   
];

const Awards = () => {
  // Prepare awards for slider
  const awardImages = awards.map(award => ({
    src: award.image,
    alt: award.title,
    title: `${award.title} (${award.year})`,
    description: `${award.description} - Awarded by: ${award.awardedBy}`
  }));

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-school-navy via-school-navy-light to-school-blue" id="awards">
      <div className="container">
        <div className="text-center mb-6 md:mb-8" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-school-yellow to-school-gold rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Awards & Recognition
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our commitment to excellence has been recognized through various prestigious awards and accolades.
          </p>
        </div>
        
        {/* Awards Slider */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-4 md:p-8">
            <ModernCarousel 
              items={awardImages} 
              className="h-auto min-h-[400px] md:min-h-[500px]" 
              autoPlay={true}
              interval={5000}
              showThumbnails={false}
              itemsPerView={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
