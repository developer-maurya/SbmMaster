import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const moreCourses = [
  {
    title:"Web Development ",
    desc: "Learn the structure of web pages.",
    price: "₹20,000",
    image: "https://www.achieversit.com/management/uploads/course_image/web-dev-img1.jpeg",
  },
  {
    title: "Mechine Learning With Python",
    desc: "Style beautiful web pages.",
    price: "₹59,900",
    image: "https://www.nexsoftsys.com/articles/images/machine-learning-python.jpg",
  },
  {
    title: "JavaScript ",
    desc: "Learn the core concepts of JS.",
    price: "₹6999",
    image: "https://abctrainings.in/media/thumbnails/Java_script.jpg",
  },
  {
    title: "React Beginner",
    desc: "Build dynamic UIs.",
    price: "₹7999",
    image: "https://d2gdtie5ivbdow.cloudfront.net/media/images/cover_react_for_beginners.png",
  },
  {
    title: "Node.js + MongoDB",
    desc: "Backend development course.",
    price: "₹899",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*V4iaGbN6rNaBa998EninKQ.png",
  },
  {
    title: "Python for AI",
    desc: "Master Python in data & AI.",
    price: "₹999",
    image: "https://justtotaltech.com/wp-content/uploads/2024/09/AI-Python-Libraries-1000x600-1.webp",
  },
  {
    title: "Flutter Mobile App",
    desc: "Build iOS & Android apps.",
    price: "₹1099",
    image: "https://techvify-software.com/wp-content/uploads/2023/06/flutter-app-development.png",
  },
  {
    title: "Ethical Hacking",
    desc: "Cyber security fundamentals.",
    price: "₹1199",
    image: "https://www.cdmi.in/courses@2x/Ethical_Hacking1.webp",
  },
  {
    title: "Core Java",
    desc: "Learn the core concepts of java.",
    price: "₹1199",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20230821005010/What-is-Core-Java.png",
  },
  {
    title: "Full stack java",
    desc: "Learn the full stack concepts of java.",
    price: "₹1199",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png",
  },
  {
    title: "AWS",
    desc: "Learn the core concepts of AWS",
    price: "₹1199",
    image: "https://assets.intersystems.com/dims4/default/a9dad27/2147483647/strip/true/crop/780x422+0+0/resize/780x422!/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg",
  },
  {
    title: "HTML CSS Js",
    desc: "HTML CSS Js fundamentals.",
    price: "₹1199",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo",
  },
];


  const courses = [
    {
      title: "Full Stack Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, Node.js & MongoDB",
      price: "₹999",
      image: "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
    },
    {
      title: "Data Science Bootcamp",
      desc: "Master Python, Pandas, Numpy, and Machine Learning",
      price: "₹1299",
      image: "https://www.theiscale.com/myadmin/uploads/courses/DS_bootcamp.png",
    },
    {
      title: "DSA Mastery",
      desc: "Ace coding interviews with C++, Java & DSA practice",
      price: "₹799",
      image: "https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/9a10b835-18b5-409f-845c-a11cc0095e9c/Interview_Master_100__1_.gif?t=1719512750",
    },
    {
      title: "App Development",
      desc: "Build Android & iOS apps using Flutter and Dart",
      price: "₹1199",
      image: "https://assets.skyfilabs.com/images/blog/diy-mobile-app-development-projects.webp",
    },
    {
      title: "Cyber Security Essentials",
      desc: "Explore Ethical Hacking, Networking & Security basics",
      price: "₹1099",
      image: "https://www.itpt.co.uk/wp-content/uploads/2023/09/Cyber-Security-Essential.jpg",
    },
    {
      title: "AI/ML with Python",
      desc: "Dive into AI models and machine learning algorithms",
      price: "₹1499",
      image: "https://res.cloudinary.com/gowombat-blog/image/fetch/c_fill,w_1000,g_auto/f_auto/q_auto/v1/https://gowombat.team/assets/blog-posts/python-the-best-programming-language-for-artificial-intelligence-and-machine-learning/python-the-best-programming-language-for-artificial-intelligence-and-machine-learning.webp?_a=BAVAZGDW0",
    },
  ];

  // const moreCourses = Array.from({ length: 20 }).map((_, i) => ({
  //   title: `Course ${i + 1}`,
  //   desc: `This is a description for Course ${i + 1}`,
  //   price: `₹${500 + i * 100}`,
  //   image: `https://via.placeholder.com/300x200.png?text=Course+${i + 1}`,
  // }));

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Replace with your test/live key
      amount: parseInt(selectedCourse.price.replace("₹", "")) * 100,
      currency: "INR",
      name: "Sbm Courses",
      description: selectedCourse.title,
      handler: function () {
        navigate("/my-courses", {
          state: { purchasedCourse: selectedCourse },
        });
      },
      prefill: {
        name: "Student",
        email: "student@example.com",
      },
      theme: {
        color: "#0d6efd",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section id="courses" className="py-16 px-4 md:px-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Courses</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.desc}</p>
              </div>
              <div className="mt-auto">
                <p className="text-lg font-bold text-green-600 mb-2">{course.price}</p>
                <button
                  onClick={() => openModal(course)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      

      <h2 className="text-2xl font-semibold text-center mt-20 mb-6">All Courses</h2>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {moreCourses.map((course, i) => (
    <div
      key={i}
      className="bg-white rounded-xl shadow hover:shadow-lg transition"
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-1">{course.title}</h3>
          <p className="text-sm text-gray-600">{course.desc}</p>
        </div>
        <div className="mt-2">
          <p className="text-green-600 font-bold">{course.price}</p>
          <button
            onClick={() => openModal(course)}
            className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Payment Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-30 px-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 max-w-md w-full space-y-4 shadow-lg">
            <Dialog.Title className="text-xl font-bold text-blue-600">
              Payment for {selectedCourse?.title}
            </Dialog.Title>
            <p className="text-gray-700">Price: {selectedCourse?.price}</p>
            <form className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" required />
              <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" required />
              <select className="w-full border px-4 py-2 rounded">
                <option>UPI</option>
                <option>Credit/Debit Card</option>
                <option>Net Banking</option>
              </select>
              <button
                type="button"
                onClick={handlePayment}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Pay Now
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-sm text-red-500 mt-1"
              >
                Cancel
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default Courses;
