import React from "react";

const Testimonials = () => {
  const feedback = [
    { name: "Rahul", quote: "Amazing teaching style and clear concepts!" },
    { name: "Priya", quote: "Got my job because of these courses!" },
  ];

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">What Students Say</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {feedback.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md border max-w-sm mx-auto">
            <p className="text-gray-700 italic">"{f.quote}"</p>
            <h4 className="mt-4 font-semibold text-blue-600">- {f.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
