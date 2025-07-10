import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "How Does Neo Sankalp Work?",
    answer:
      "Neo Sankalp follows a streamlined approach to tech, media, and digital solutions. Our team collaborates closely with you to deliver customized, result-driven strategies that align with your business goals—ensuring seamless execution and impactful growth.",
  },
  {
    question: "What is the Cost of Neo Sankalp Services?",
    answer:
      "The cost of Neo Sankalp services depends on the scope and scale of your project. We offer transparent, fixed pricing, ensuring no hidden surprises—just seamless solutions tailored to your needs.",
  },
  {
    question: "How Do We Approach Branding?",
    answer:
      "At Neo Sankalp, we start with in-depth research to understand your business, industry, and target audience. From there, we craft strategic designs and branding solutions that create a strong, memorable identity—helping your brand stand out and connect effectively. 🚀",
  },
  {
    question: "How Do We Make Your Brand Stand Out?",
    answer:
      "At Neo Sankalp, we blend innovative design, data-driven strategies, and market insights to craft a unique and impactful brand presence—ensuring you stay ahead of the competition. 🚀",
  },
];

const FAQSection = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl max-[500px]:text-4xl font-medium text-gray-800 mb-8">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg border border-gray-200"
              data-aos="fade"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full transition-all duration-200 hover:translate-x-2 text-left p-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-gray-700 max-[400px]:text-sm">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 text-gray-600 border-t max-[400px]:text-sm border-gray-200">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
