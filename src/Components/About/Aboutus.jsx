import React, { useEffect, useState } from "react";
import about from "../../../public/Images/about.png";
import Ourteam from "./Ourteam";
import Abouttwo from "../../Components/About/Abouttwo";
import aboutus from '../../../public/Images/aboutus.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
const ZoomInOutOnScroll = () => {
  const [scale, setScale] = useState(1);
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const newScale = 1 + scrollPosition / 5000;
      const newFontSize = 1 - scrollPosition / 5000;

      setScale(newScale <= 1.1 ? newScale : 1.1);
      setFontSize(newFontSize >= 0.9 ? newFontSize : 0.9);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-">
      {/* 1st part */}

      {/* <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/silhouettes-businesspeople-office_1098-2957.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative max-w-7xl mx-auto py-20 px-5 md:px-10 lg:px-20 text-center text-white">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 "
          >
            About Us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl lg:text-2xl mb-6"
          >
            We provide innovative solutions that help businesses grow and thrive
            in today's fast-paced digital landscape.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-sm md:text-base lg:text-lg mb-8"
          >
            Our dedicated team delivers high-quality services tailored to your
            specific needs, ensuring excellence at every step.
          </p>
        </div>
      </div> */}


<div
  className="relative bg-cover bg-center"
  style={{
    backgroundImage: `url(${aboutus})`, 
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative max-w-7xl mx-auto py-20 px-5 md:px-10 lg:px-20 text-center text-white">
    <h1
      data-aos="fade-up"
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
    >
      About Us
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-lg md:text-xl lg:text-2xl mb-6"
    >
      We provide innovative solutions that help businesses grow and thrive
      in today's fast-paced digital landscape.
    </p>
    <p
      data-aos="fade-up"
      data-aos-delay="400"
      className="text-sm md:text-base lg:text-lg mb-8"
    >
      Our dedicated team delivers high-quality services tailored to your
      specific needs, ensuring excellence at every step.
    </p>
  </div>
</div>


      {/* 2nd part */}

      <div className="about-us flex flex-col md:flex-row items-center justify-center bg-white p-5 m-5 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="text-content order-2 md:order-1 max-w-full md:max-w-[55%] mb-5 md:mb-0">
          <h2 className="about text-2xl md:text-3xl mt-2 mb-4 transition-colors duration-300 ease-in-out text-center md:text-left">
            SMBULL ABOUTUS
          </h2>
          <p className="aboutdescription text-base md:text-lg leading-6 mb-5 text-center md:text-left">
          At SMBULL Influencer Marketing, we are more than just a marketing agency; we are your dedicated partner in navigating the dynamic world of social media influence. Founded with a vision to revolutionize how brands connect with their audiences, SMBULL Influencer Marketing stands at the forefront of innovation, delivering customized influencer strategies that drive engagement and foster brand loyalty.
          </p>
          <div className="flex justify-center md:justify-start">
            <p
              className="about-us-link inline-block px-4 py-2 text-sm md:text-base  font-bold
               text-white bg-[#a6c465] rounded-md text-center no-underline transition-colors duration-300 ease-in-out
                hover:bg-black"
            >
              {" "}
              We believe in the power of authentic connections, crafting tailored campaigns that resonate with your target market. Our expert team works diligently to identify the right influencers who align with your brand values, ensuring impactful partnerships that amplify your message. Join us in transforming your brand’s digital presence and achieving unprecedented growth through strategic influencer collaborations.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-start md:max-w-[50%]">
          <img
            src={about}
            alt="About Us Image"
            className="about-img max-w-full rounded-lg mb-5 md:mb-0 md:mr-5 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* 3rd part */}

      <div className="container w-full md:w-3/4 lg:w-2/3 mx-auto px-4 py-8">
        <h1
          className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-4 transition-transform duration-500"
          style={{
            transform: `scale(${scale})`,
            fontSize: `${fontSize}em`,
            transition:
              "transform 0.5s ease-in-out, font-size 0.5s ease-in-out",
          }}
        >
          Your Dedicated Influencer Marketing Experts
        </h1>
        <p
          className="text-sm md:text-base  mx-5 lg:text-lg leading-relaxed text-justify transition-transform duration-500"
          style={{
            transform: `scale(${scale})`,
            fontSize: `${fontSize}em`,
            transition:
              "transform 0.5s ease-in-out, font-size 0.5s ease-in-out",
          }}
        >
          At SMBULL Influencer Marketing, our diverse team of experts is dedicated to driving your brand's success.

Creative Strategists design innovative campaigns that resonate with your audience.
Influencer Relations Specialists build authentic partnerships to maximize engagement.
Content Creators craft compelling narratives that highlight your brand story.
Data Analysts track performance metrics to optimize your ROI.
Project Managers ensure seamless execution and collaboration throughout the campaign.
Together, we empower your brand in the digital landscape, fostering long-term partnerships built on trust and innovation.
        </p>
      </div>

      <Ourteam />

      <Abouttwo />

   

      <section className="text-black mb-10">
  <div className="container mx-auto px-4">
    <h1 className="text-5xl font-bold text-center mb-10">Who We Are</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className="space-y-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold border-b-2 border-[#a6c465] pb-2">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed">
          Our mission is to empower brands through innovative influencer marketing strategies that drive authentic engagement and growth.
        </p>
        <h2 className="text-3xl font-bold border-b-2 border-[#a6c465] pb-2">
          Our Values
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
          <li>Authenticity</li>
          <li>Collaboration</li>
          <li>Creativity</li>
          <li>Results-Driven</li>
        </ul>
        <h2 className="text-3xl font-bold border-b-2 border-[#a6c465] pb-2">
          Our History
        </h2>
        <p className="text-lg leading-relaxed">
          Founded in 2010, we have transformed from a budding startup into a premier influencer marketing agency, connecting brands with audiences worldwide.
        </p>
      </div>
      <div
        className="flex justify-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src={about}
          alt="Company"
          className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ZoomInOutOnScroll;
