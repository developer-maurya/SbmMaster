import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const toppers = [
    { name: "Ravi patel", air: "TCS", img: "https://media.istockphoto.com/id/2105091005/photo/young-student-taking-notes-while-e-learning-on-laptop-at-the-university.jpg?s=612x612&w=0&k=20&c=5AoTWNFmHm-HeQfx0FzB3LPm3MKQXgokYelEvmC_47E=" },
    { name: "Abhishek Pandey", air: "Facebook", img:"https://img.freepik.com/free-photo/man-glasses-using-laptop_23-2147679074.jpg?semt=ais_hybrid&w=740" },
    { name: "Chitranjan Maurya", air: "GOOGLE", img: "https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=" },
    { name: "Priya Bapat", air: "Wipro", img: "https://study.gov.pl/sites/default/files/styles/news/public/field/image/news/adobestock_165061057_autor_antonioguillem_1.jpeg?itok=xFmtva__" },
    { name: "Kavya Maran", air: "Amazon", img: "https://media.istockphoto.com/id/879049126/photo/portrait-of-female-student-standing-outside-college-building.jpg?s=612x612&w=0&k=20&c=3-UYOVYMYW9oTUDlleB3TKZGCS46Z9uuWXSNT48eTRs=" },
    { name: "Harsh S Gupta", air: "Infosys", img: "https://www.shutterstock.com/image-photo/cheerful-handsome-young-indian-guy-260nw-2360183549.jpg" },
    { name: "Priyanshu Abhra", air: "TCS", img: "https://media.istockphoto.com/id/1150975772/photo/headshot-of-young-happy-attractive-asian-student-smiling-and-looking-at-camera-with-friends.jpg?s=612x612&w=0&k=20&c=T0eTeXx44_423Hmcx56b7qWuSPy9CTjxvScFj6vtZvs=" },
    { name: "Vamshi Naidu", air: "IBM", img: "https://img.freepik.com/free-photo/handsome-indian-man-with-laptop-while-sitting-near-fountain-city-center-day_231208-2780.jpg?semt=ais_hybrid&w=740" },
    { name: "wamika singh", air: "Accenture", img: "https://media.istockphoto.com/id/1278979696/photo/happy-smiling-college-girl-studying-on-laptop.jpg?s=612x612&w=0&k=20&c=jX8i2JX9RNpYkPjeKg2fENUd6uMFoOhAI0Aer9DHiRc=" },
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
