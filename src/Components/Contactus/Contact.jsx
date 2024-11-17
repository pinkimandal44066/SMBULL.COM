import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import blog from '../../../public/Images/blog-1.jpg';
const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 ">
     


      <div className="relative h-[400px]"> 
      <div
        className="bg-cover bg-center h-full"
        style={{
          backgroundImage: `url(${blog})`, 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative max-w-7xl mx-auto flex items-center justify-center h-full px-5 md:px-10 lg:px-20 text-center text-white">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
          >
          Contact Us
          <p className="text-lg  text-white mt-4">
          Get in touch with ShareTax to unlock seamless tax solutions tailored just for you.
        </p>
          </h1>
         
        </div>
      </div>
    </div>
 
      <section id="contact" className="py-16 px-4 md:px-8 lg:px-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Contact Form */}
            <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                  Get in Touch
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a6c465]"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a6c465]"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a6c465]"
                      placeholder="Your Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#a6c465] text-white py-3 px-6 rounded-md hover:bg-[#a6c465] transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="md:w-1/2" data-aos="fade-left">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                  Contact Information
                </h3>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#a6c465] mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.003 12.5a10 10 0 1116.59-6.591M12 15v-3m0 0l-2 2m2-2l2 2m1-4a7 7 0 00-7-7 7 7 0 00-7 7v5a7 7 0 007 7h7a7 7 0 007-7v-5z"
                    />
                  </svg>
                  <p className="text-gray-700">
                    123 Business Rd, Tech City, TC 12345
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#a6c465] mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.828 14.828a4 4 0 015.657 0L12 16l.515-.515a4 4 0 015.657 5.657l-1.57 1.568a4 4 0 01-5.657 0L12 20l-1.514-1.515a4 4 0 01-5.657-5.657l1.569-1.568z"
                    />
                  </svg>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#a6c465] mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v16h16V4H4zM2 2h20v20H2V2z"
                    />
                  </svg>
                  <p className="text-gray-700">contact@yourcompany.com</p>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a6c465] hover:underline"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a6c465] hover:underline"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a6c465] hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="h-64 relative mt-8">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.828825673543!2d-122.41941868468121!3d37.77492927975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb9d5cfd%3A0x73d3b8e5942b6b58!2sTech%20Company!5e0!3m2!1sen!2sus!4v1622045145709!5m2!1sen!2sus"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;








