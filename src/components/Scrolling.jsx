import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ResultBanner = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
  };

  return (
    <div className="w-full bg-white py-4 shadow-md">
      <Slider {...settings}>
        <div>
          <img src="../image/scrol4.jpg" alt="Result 1" className="w-full h-100" />
        </div>
        <div>
          <img src="../image/scrol1.jpg" alt="Result 2" className="w-full h-100" />
        </div>
        <div>
          <img src="../image/scrol2.jpg" alt="Result 3" className="w-full h-100" />
        </div>
         <div>
          <img src="../image/scrol.jpg" alt="Result 3" className="w-full h-100" />
        </div>
        <div>
          <img src="../image/scroll.jpg" alt="Result 3" className="w-full h-100" />
        </div>
      </Slider>
    </div>
  );
};

export default ResultBanner;
