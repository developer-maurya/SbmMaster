import React from "react";

const Categories = () => {
  const items = ["Web Dev", "Data Science", "AI/ML", "App Dev", "Cyber Security"];
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Top Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {items.map((cat, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105 transition">
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
