import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const MyComponent = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const faqData = [
    {
      question: "What services does SMBULL offer?",
      answer:
        "SMBULL offers a range of IT services including software development, IT consulting, cloud solutions, and more tailored to modern businesses.",
    },
    {
      question: "How can SMBULL help my business grow?",
      answer:
        "SMBULL provides innovative IT solutions designed to streamline your operations, improve productivity, and support your business expansion efforts.",
    },
    {
      question: "What is the support structure like?",
      answer:
        "We offer 24/7 customer support with a dedicated team to assist you with any issues or queries related to our services and products.",
    },
    {
      question: "How can I get started with SMBULL?",
      answer:
        "You can get started by contacting us through our website, scheduling a consultation, and discussing your business needs with our expert team.",
    },
    {
      question: "What industries does SMBULL specialize in?",
      answer:
        "SMBULL specializes in various industries including finance, healthcare, manufacturing, and technology, providing tailored IT solutions for each sector.",
    },
    {
      question: "Can SMBULL handle large-scale projects?",
      answer:
        "Yes, SMBULL has the expertise and resources to manage large-scale projects, ensuring timely delivery and high-quality results.",
    },
    {
      question: "What is your approach to data security?",
      answer:
        "Our approach to data security includes implementing robust encryption methods, regular security audits, and compliance with industry standards to safeguard your data.",
    },
    {
      question: "Do you offer custom software development?",
      answer:
        "Yes, we offer custom software development services to meet your specific business needs, including application development, system integration, and more.",
    },
    {
      question: "How does SMBULL ensure project success?",
      answer:
        "SMBULL ensures project success through a structured approach including detailed planning, regular progress reviews, and effective communication with clients.",
    },
    {
      question: "What is the cost structure for your services?",
      answer:
        "Our cost structure varies depending on the scope and complexity of the project. We offer transparent pricing and provide detailed quotes based on your requirements.",
    },
    {
      question: "Can we integrate SMBULL’s solutions with existing systems?",
      answer:
        "Yes, our solutions are designed to integrate seamlessly with your existing systems, ensuring smooth transitions and minimal disruption.",
    },
    {
      question: "What is the typical project timeline?",
      answer:
        "The project timeline depends on the complexity and scope of the project. We provide estimated timelines during the planning phase and keep clients updated throughout.",
    },
  ];

  return (
    <>
      <div
        className="relative h-64 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/frequently-asked-questions-solution-concept_53876-125171.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid')",
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className=" mt-10  mb-10 faq-section max-w-7xl mx-auto p-6 md:p-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 uppercase">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="flex justify-between items-center"
                layout
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <motion.span
                  animate={{ rotate: selected === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-800"
                >
                  {selected === index ? "▲" : "▼"}
                </motion.span>
              </motion.div>

              <AnimatePresence>
                {selected === index && (
                  <motion.div
                    className="mt-4 text-gray-600"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="text-base">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyComponent;
