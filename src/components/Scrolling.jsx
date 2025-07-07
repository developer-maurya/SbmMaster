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
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj62T5FvOQYpAENVaiWZd-pB_RNsZ7n2ukPrh_7dpAPATBGk4WSVFm0gMOpzlbQdobPSKfiedMXZdlhlMxjb2iu8eWlSE4rtTHs4jZKfUQPlHWFaHCiHa5n1q5gRKjd_jB3FHhErZEpkr4CuqTw0w9mhg_ISz3NqhsOa_sWO3WhiTUX4PJhjm80zsRsWwE/s16000/BANNER%203.jpg" alt="Result 1" className="w-full h-100" />
        </div>
        <div>
          <img src="https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/14411-Janbask_Offers_Coupons.jpg" alt="Result 2" className="w-full h-100" />
        </div>
        <div>
          <img src="https://png.pngtree.com/template/20220424/ourmid/pngtree-language-center-courses-offer-isometric-infographic-flowchart-with-online-self-learning-image_1433962.jpg" alt="Result 3" className="w-full h-100" />
        </div>
         <div>
          <img src="https://www.mtu.edu/cs/undergraduate/software/images/software-engineering-bachelors-department-banner2400.jpg" alt="Result 3" className="w-full h-100" />
        </div>
        <div>
          <img src="https://www.drkvsrit.ac.in/assets/T&P.png" alt="Result 3" className="w-full h-100" />
        </div>
      </Slider>
    </div>
  );
};

export default ResultBanner;
