// // 📁 File: src/utils/razorpay.js

// export const loadRazorpay = (course) => {
//   const options = {
//     key: "rzp_test_YourTestKeyHere", // 👈 Replace with your Razorpay Test Key
//     amount: parseInt(course.price.replace("₹", "")) * 100, // Convert to paisa
//     currency: "INR",
//     name: "Demo Academy",
//     description: course.title,
//     image: "https://source.unsplash.com/100x100/?education",
//     handler: function (response) {
//       alert(`✅ Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
//     },
//     prefill: {
//       name: "Test User",
//       email: "test@example.com",
//       contact: "9999999999",
//     },
//     theme: {
//       color: "#0ea5e9",
//     },
//   };

//   const rzp = new window.Razorpay(options);
//   rzp.open();
// };


// // 📁 File: src/components/Courses.jsx

// import React from "react";
// import { loadRazorpay } from "../utils/razorpay";

// const Courses = () => {
//   const courses = [
//     {
//       title: "Full Stack Web Development",
//       desc: "Learn HTML, CSS, JavaScript, React, Node.js & MongoDB",
//       price: "₹999",
//       image: "https://source.unsplash.com/400x250/?webdevelopment",
//     },
//     {
//       title: "Data Science Bootcamp",
//       desc: "Master Python, Pandas, Numpy, and Machine Learning",
//       price: "₹1299",
//       image: "https://source.unsplash.com/400x250/?datascience",
//     },
//     {
//       title: "DSA Mastery",
//       desc: "Ace coding interviews with C++, Java & DSA practice",
//       price: "₹799",
//       image: "https://source.unsplash.com/400x250/?coding",
//     },
//     {
//       title: "App Development",
//       desc: "Build Android & iOS apps using Flutter and Dart",
//       price: "₹1199",
//       image: "https://source.unsplash.com/400x250/?appdevelopment",
//     },
//     {
//       title: "Cyber Security Essentials",
//       desc: "Explore Ethical Hacking, Networking & Security basics",
//       price: "₹1099",
//       image: "https://source.unsplash.com/400x250/?cybersecurity",
//     },
//     {
//       title: "AI/ML with Python",
//       desc: "Dive into AI models and machine learning algorithms",
//       price: "₹1499",
//       image: "https://source.unsplash.com/400x250/?ai,machinelearning",
//     },
//   ];

//   return (
//     <section id="courses" className="py-16 px-4 md:px-12 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-10">Popular Courses</h2>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {courses.map((course, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
//           >
//             <img
//               src={course.image}
//               alt={course.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
//               <div>
//                 <h3 className="text-xl font-semibold text-blue-600 mb-2">
//                   {course.title}
//                 </h3>
//                 <p className="text-gray-700 mb-4">{course.desc}</p>
//               </div>
//               <div className="mt-auto">
//                 <p className="text-lg font-bold text-green-600 mb-2">{course.price}</p>
//                 <button
//                   onClick={() => loadRazorpay(course)}
//                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Courses;


// // 📄 public/index.html me ye script add karo:
// // <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
