import React from "react";
import about from "../../../public/Images/about.png";
import { ReactTyped } from "react-typed";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100 shadow-lg transition-transform transform lg:mx-10 mx-5 mt-10 rounded-xl">
        <div className="w-full py-10">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 order-1 lg:order-1 flex justify-center lg:justify-start">
                <img
                  src={about}
                  alt="About Us Image"
                  className="max-w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>

              <div className="w-full lg:w-1/2 order-2 lg:order-2 space-y-4">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:space-x-2 text-2xl lg:text-3xl text-center lg:text-left">
                  <h1 className="mb-4 lg:mb-0">SMBULL</h1>
                  <ReactTyped
                    className="text-[#a6c465] font-bold"
                    strings={[
                      "Mobile App Development",
                      "UI/UX Design",
                      "Web Development",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </div>
                <p className="text-center lg:text-left text-base lg:text-lg mt-4">
                  {/* At SMBULL IT Company, we are more than just a technology firm; we are your dedicated partner in navigating the digital landscape. Founded with a vision to revolutionize the way businesses leverage technology, SMBULL IT Company stands at the forefront of innovation, delivering tailored software solutions that drive success and foster growth. */}
                  Welcome to SMBULL, where we bridge the gap between brands and
                  influencers to create impactful partnerships that resonate
                  with audiences around the globe. In a world where authenticity
                  matters, we understand the power of influence. Our mission is
                  to connect brands with the right influencers who can bring
                  their vision to life. With a keen understanding of market
                  trends and consumer behavior, we tailor strategies that not
                  only enhance brand visibility but also foster genuine
                  connections.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <NavLink
                    to="/about"
                    className="px-4 py-2 text-base lg:text-lg font-bold text-white bg-[#a6c465] rounded-md no-underline transition-colors duration-300 hover:bg-black"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
