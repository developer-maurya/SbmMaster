import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Scrolling from "./components/Scrolling"
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import MyCourses from "./pages/MyCourses"; 
import Contact from "./components/Contact";

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800">
      <Header onLoginClick={() => setLoginOpen(true)} />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Hero />
              <Scrolling/>
              <Categories />
              <Courses />
              <About />
              <Contact/>
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/my-courses" element={<MyCourses />} />
      </Routes>

      {loginOpen && <Login onClose={() => setLoginOpen(false)} />}
    </div>
  );
}
