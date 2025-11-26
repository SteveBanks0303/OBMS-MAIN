
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h2 className="section-title">About Our College</h2>
            <p className="mb-4 text-gray-700">
              Oritamefa Baptist Model Schools A-Level College was established with a vision to provide world-class advanced education that prepares students for university success globally.
            </p>
            <p className="mb-4 text-gray-700">
              Founded on the principles of academic excellence and character development, our college has grown to become one of the leading providers of A-Level, JUPEB, IGCSE, TOEFL, and SAT education in Nigeria.
            </p>
            <p className="mb-8 text-gray-700">
              Our mission is to nurture intellectually sound, morally upright, and socially responsible individuals who will make significant contributions to society through their chosen fields of study.
            </p>
          </div>
          
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:rotate-2 transition-all duration-500">
              <LazyLoadImage
                src="assets/img1.jpg"
                alt="Oritamefa Baptist Model Schools Campus"
                effect="blur"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
