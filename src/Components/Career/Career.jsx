import React, { useState } from "react";

import "./Career.css";

const CareerFair = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };
  return (
    <>
      <div className="bg-[#8E9A4A] text-white font-sans ">
        <div className="relative flex flex-col lg:flex-row">
          <div
            className="
    
    bg-gradient-to-br 
from-[#ffafbd]       /* Light Pink */
via-[#ffc3a0]        /* Light Peach */
via-[#ff677d]        /* Soft Red */
via-[#d4a5a5]        /* Light Blush */
via-[#392f5a]        /* Deep Purple */
to-[#5b86e5]         /* Light Blue */

    
    w-full lg:w-1/2 py-10 px-8 lg:px-16 lg:py-20"
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 mt-5">
              CAREER FAIR
            </h1>
            <p className="text-base lg:text-lg mb-8">
              Don’t miss your chance to connect with top employers and explore
              your career options at our upcoming career fair.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <span>Date: 05.05.2025</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                  <i className="fas fa-clock"></i>
                </span>
                <span>Time: 9:30 AM</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-8 h-8 bg-white text-purple-700 rounded-full flex justify-center items-center mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>Location: 123 Anywhere St, Any City, ST 12345</span>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 bg-gradient-to-br 
from-[#ffafbd]       /* Light Pink */
via-[#ffc3a0]        /* Light Peach */
via-[#ff677d]        /* Soft Red */
via-[#d4a5a5]        /* Light Blush */
via-[#392f5a]        /* Deep Purple */
to-[#5b86e5]         /* Light Blue */
py-10 px-6 lg:py-20 lg:px-12 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/cheerful-young-asian-businesswoman-using-laptop_171337-724.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/competitive-businessman-holding-clipboard_1098-1411.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/cheerful-young-asian-businesswoman-using-laptop_171337-724.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/competitive-businessman-holding-clipboard_1098-1411.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/cheerful-young-asian-businesswoman-using-laptop_171337-724.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/competitive-businessman-holding-clipboard_1098-1411.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center">
              <img
                src="https://img.freepik.com/free-photo/happy-young-business-colleagues-using-laptop-computer-talking-with-each-other_171337-761.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between bg-gradient-to-r from-green-400 to-blue-500 mb-10 overflow-hidden">
        <div className="flex items-end justify-center w-full lg:w-1/2 relative">
          <div className="h-[400px] w-[400px] relative">
            <div
              className="absolute w-[100px] h-[100px] bg-gray-300"
              style={{ bottom: "0", left: "0" }}
            ></div>
            <div
              className="absolute w-[100px] h-[100px] bg-gray-300"
              style={{ bottom: "100px", left: "100px" }}
            ></div>
            <div
              className="absolute w-[100px] h-[100px] bg-gray-300"
              style={{ bottom: "200px", left: "200px" }}
            ></div>
            <div
              className="absolute w-[100px] h-[100px] bg-gray-300"
              style={{ bottom: "300px", left: "300px" }}
            ></div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8 text-white shadow-lg rounded-lg bg-[#a6c40] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            SMBULL Influencer Marketing
          </h1>
          <p className="text-lg mb-6">
            SMBULL Influencer Marketing is dedicated to helping brands connect
            with their target audiences through strategic partnerships with
            influential figures. We specialize in crafting compelling campaigns
            that enhance brand visibility and drive engagement.
          </p>
          <ul className="list-disc ml-6">
            <li>Campaign Strategy Development</li>
            <li>Influencer Identification</li>
            <li>Content Creation and Distribution</li>
            <li>Performance Tracking and Analytics</li>
            <li>Brand Partnerships</li>
          </ul>
        </div>
      </div>

      <div
        className=" bg-gradient-to-br 
from-[#ffafbd]       /* Light Pink */
via-[#ffc3a0]        /* Light Peach */
via-[#ff677d]        /* Soft Red */
via-[#d4a5a5]        /* Light Blush */
via-[#392f5a]        /* Deep Purple */
to-[#5b86e5]         /* Light Blue */
 mb-10"
      >
        <div className="flex items-center justify-center  ">
          <div
            className="w-full max-w-md p-4 text-gray-800 mt-10 shadow-lg rounded-lg bg-white flex flex-col
              mb-10"
          >
            <h1 className="text-2xl font-bold mb-3 text-center">
              Join Our Influencer Team
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="mb-1 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-1 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label className="mb-1 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-1 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label className="mb-1 font-semibold" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-1 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <label className="mb-1 font-semibold" htmlFor="coverLetter">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="p-1 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#a6c465] text-white  p-2 rounded-lg hover:bg-black transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerFair;
