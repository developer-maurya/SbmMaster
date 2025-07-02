import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="About us"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to <strong>SbmMaster</strong> – your gateway to skill-based learning. We offer
            high-quality online courses designed to help you become job-ready.
          </p>
          <p className="text-gray-600">
            Our mission is to empower learners by delivering accessible and affordable education
            in fields like web development, data science, app building, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
