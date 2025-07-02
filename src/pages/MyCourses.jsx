import React from "react";
import { useLocation } from "react-router-dom";

const MyCourses = () => {
  const location = useLocation();
  const purchasedCourse = location.state?.purchasedCourse;

  if (!purchasedCourse) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No course found. Please purchase one to see it here.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Your Purchased Course</h1>
      <div className="bg-white p-4 rounded shadow">
        <img
          src={purchasedCourse.image}
          alt={purchasedCourse.title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-xl font-semibold mt-3">{purchasedCourse.title}</h2>
        <p className="text-gray-700">{purchasedCourse.desc}</p>
      </div>
    </div>
  );
};

export default MyCourses;
