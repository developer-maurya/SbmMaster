import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const toppers = [
    { name: "Ravi patel", air: "TCS", img: "../image/photooo.jpg" },
    { name: "Abhishek Pandey", air: "Facebook", img:"../image/photo1.jpg" },
    { name: "Chitranjan Maurya", air: "GOOGLE", img: "../image/photo2.jpg" },
    { name: "Priya Bapat", air: "Wipro", img: "../image/photo3.jpg" },
    { name: "Kavya Maran", air: "Amazon", img: "../image/photo4.jpg" },
    { name: "Harsh S Gupta", air: "Infosys", img: "../image/photo5.jpg" },
    { name: "Priyanshu Abhra", air: "TCS", img: "../image/photo6.jpg" },
    { name: "Vamshi Naidu", air: "IBM", img: "../image/photo7.jpg" },
    { name: "wamika singh", air: "Accenture", img: "../image/photo8.jpg" },
  ];

  return (
    <section id="hero" className="bg-blue-300 py-20 px-5 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700">Learn From The Best</h1>
      <p className="text-lg mt-4 text-gray-600">Join millions of learners and build your career today!</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"> <a href="#courses">Explore Courses</a>
        
      </button>

      {/* Carousel Banner */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6"> TOP PLACEMENT 2025 RESULTS </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {toppers.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="bg-white text-black rounded-xl shadow p-4 text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-36 object-contain mx-auto"
              />
              <h3 className="font-bold text-lg text-blue-600 mt-2">{item.air}</h3>
              <p className="text-sm">{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-6 bg-red-700 text-white py-3 px-4 inline-block rounded-xl font-semibold text-lg">
          📞 Few Seats Remaining – Call Now: 7371 09 5346
        </div>
      </div>
    </section>
  );
};

export default Hero;
