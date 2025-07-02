import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#C9E3E6] py-10 px-6 md:px-20 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* EduMaster Info */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-2xl font-bold bg-black text-white rounded-full px-2 py-1">SM</div>
            <span className="text-lg font-semibold">SbmMaster</span>
          </div>
          <p className="mb-4">
            At EduMaster, we understand every learner is unique. Our curriculum adapts to your needs and helps you grow!
          </p>
          <div className="flex gap-3 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
          <p className="font-semibold">Let’s get social :</p>
          <div className="flex gap-3 mt-2 text-xl text-blue-600">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
            <FaTelegram />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#courses" className="hover:text-blue-600">Courses</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
          </ul>
        </div>

        {/* Centres */}
        <div>
          <h3 className="font-semibold mb-3">Our Centres</h3>
          <ul className="space-y-2">
            <li>New Delhi</li>
            <li>Patna</li>
            <li>Kota</li>
            <li>Noida</li>
            <li>Dhanbad</li>
            <li>Varanasi</li>
          </ul>
        </div>

        {/* IT Courses */}
        <div>
          <h3 className="font-semibold mb-3">IT Courses</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Data Science</li>
            <li>App Development</li>
            <li>Cyber Security</li>
            <li>DevOps</li>
            <li>Machine Learning</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </div>

      {/* Additional Section Below */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 text-sm">
        {/* Address */}
        <div>
          <h3 className="font-bold mb-2">ADDRESS</h3>
          <p>Noida</p>
          <p>Sector-44</p>
          <p>Uttar Pradesh</p>
          <p className="flex items-center gap-2 mt-2 text-sm text-blue-700 cursor-pointer">
            <FaMapMarkerAlt /> SEE ON MAP
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-2">CONTACT</h3>
          <p className="flex items-center gap-2"><FaEnvelope /> chitranjan75075@gmail.com</p>
          <p className="flex items-center gap-2"><FaPhone /> 9905250848</p>
        </div>

        {/* Social & Links */}
        <div>
          <p className="font-semibold mb-3">
           Every student is unique, so our curriculum adapts to your needs and helps you grow
          </p>
          <h3 className="font-bold mb-2">FOLLOW US</h3>
          <div className="flex gap-3 text-xl">
           <a href="https://www.instagram.com/chitranjanmaurya123/" target="_blank"><FaInstagram /></a> 
           <a href="https://github.com/developer-maurya" target="_blank"><FaGithub /></a> 
           <a href="https://www.linkedin.com/in/chitranjan-kumar-911219339/" target="_blank"><FaLinkedin /></a> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
