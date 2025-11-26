import { ModernCarousel } from "@/components/ui/modern-carousel";

const boardMembers = [
  {
    src: "assets/img16.jpg",
    alt: "Rev'd Dr. 'Diran Adeleke",
    title: "Rev'd Dr. 'Diran Adeleke",
    description:
      "Chairman",
  },
  {
    src: "assets/img9.jpg",
    alt: "Deacon Olubodun Oke",
    title: "Deacon Olubodun Oke",
    description:
      "Director A'Level",
  },
  {
    src: "assets/img17.jpg",
    alt: "Rev'd. Seun Olawore",
    title: "Rev'd. Seun Olawore",
    description:
      "Board",
  },
  {
    src: "assets/img12.jpg",
    alt: "Prof. Adebayo Johnson",
    title: "Prof. Adebayo Johnson",
    description:
      "Board",
  },
  {
    src: "assets/img13.jpg",
    alt: "Mrs. Folake Adelusi",
    title: "Mrs. Folake Adelusi",
    description:
      "Board",
  },
  {
    src: "assets/img14.jpg",
    alt: "Mr. Tunde Oladimeji",
    title: "Mr. Tunde Oladimeji",
    description:
      "Board",
  },
  {
    src: "assets/img15.jpg",
    alt: "Mr. Tunde Oladimeji",
    title: "Mr. Tunde Oladimeji",
    description:
      "Board",
  },
  {
    src: "assets/img10.jpg",
    alt: "Mr. Tunde Oladimeji",
    title: "Mr. Tunde Oladimeji",
    description:
      "Board",
  },
   {
    src: "assets/img8.jpg",
    alt: "Mr. Tunde Oladimeji",
    title: "Mr. Tunde Oladimeji",
    description:
      "Board",
  },
  {
    src: "assets/img11.jpg",
    alt: "Mr. Tunde Oladimeji",
    title: "Mr. Tunde Oladimeji",
    description:
      "Board",
  },
  {
    src: "assets/img12.jpg",
    alt: "Mr. Tunde Oladimeji",
    title: "Mr. Tunde Oladimeji",
    description:
      "Board",
  },
];

const Board = () => {
  return (
    <section
      className="py-6 md:py-12 lg:py-16 bg-gradient-to-br from-school-gray via-gray-50 to-white"
      id="board"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12" data-aos="fade-up">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-school-yellow to-school-gold rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-school-navy mb-4 md:mb-6">
            Education Board
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
            Meet the distinguished leaders who guide our institution towards
            excellence in education, character development, and academic
            achievement.
          </p>
        </div>

        <div
          className="max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border border-gray-100">
            {/* wrapper used to scope the override styles */}
            <div className="board-carousel">
              <ModernCarousel
                items={boardMembers}
                className="h-auto min-h-[400px] md:min-h-[500px]"
                autoPlay={true}
                interval={6000}
                showThumbnails={false}
                itemsPerView={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS override */}
      <style>{`
        /* For <img> slides */
        .board-carousel img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: 50% 15% !important; /* Adjust Y value (15%) */
        }

        /* For background-image slides */
        .board-carousel [style*="background-image"] {
          background-size: cover !important;
          background-position: 50% 15% !important;
        }

        /* Common slide wrappers */
        .board-carousel picture img,
        .board-carousel .carousel-slide img,
        .board-carousel .slide img,
        .board-carousel .swiper-slide img {
          object-fit: cover !important;
          object-position: 50% 15% !important;
        }
      `}</style>
    </section>
  );
};

export default Board;
