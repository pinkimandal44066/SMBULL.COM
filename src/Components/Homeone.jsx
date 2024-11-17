
import React, { useEffect } from 'react';
import about from '../../public/Images/about.png';
import Aboutone from '../Components/About/Aboutone';
import Homeimgslider from '../Components/Homeimgslider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
const Homeone = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  
    });
  }, []);
  return (
    
    < >







<Aboutone />


{/*     
    <div className="about-us  flex flex-col md:flex-row items-center justify-center bg-white p-5 m-5 rounded-lg 
    shadow-lg transition-transform duration-300 ease-in-out
   transform hover:scale-105 
    hover:shadow-xl">

      <div className="text-content order-2 md:order-1 max-w-full md:max-w-[55%] mb-5 md:mb-0">
        <h2 className="about text-2xl md:text-3xl mt-2 mb-4 transition-colors duration-300 ease-in-out text-center md:text-left">SMBULL ABOUTUS</h2>
        <p className="aboutdescription text-base md:text-lg leading-6 mb-5 text-center md:text-left">
          At SMBULL IT Company, we are more than just a technology firm; we are your dedicated partner in navigating the digital landscape. Founded with a vision to revolutionize the way businesses leverage technology, SMBULL IT Company stands at the forefront of innovation, delivering tailored software solutions that drive success and foster growth.
        </p>
       
        <div className="flex justify-center md:justify-start">
        <NavLink to='/about' className="about-us-link inline-block px-4 py-2 text-base md:text-lg font-bold
         text-white bg-[#a6c465] rounded-md text-center no-underline transition-colors duration-300 ease-in-out hover:bg-black">Read More</NavLink>
        </div>
        
      </div>

     
      <div className="flex flex-col items-center md:flex-row md:items-start md:max-w-[50%]">
        <img src={about} alt="About Us Image" className="about-img max-w-full rounded-lg mb-5 md:mb-0 md:mr-5 transition-transform duration-300 ease-in-out" />
      </div>
    </div>
  */}


    <div className="services lg:mx-20 mx-5 px-4 py-10">
  <h2 className="text-4xl font-bold text-center mb-12">Our Expertise</h2>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    <div className="service-card bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300  
    border border-blue-400 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 
    hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2h-2v7H4v2h7v7h2v-7h7V9h-7V2z"></path></svg>
      </div>
      <h3 className="text-black text-xl font-semibold mb-4">Influencer Strategy Development</h3>
      <p className="text-gray-800 text-base leading-relaxed">We create tailored influencer marketing strategies that align with your brand goals, identifying the right influencers to maximize engagement and drive conversions.</p>
    </div>
    
    <div className="service-card bg-gradient-to-r from-green-100 via-green-200 to-green-300 border border-green-400 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
        <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l6 6L21 6"></path></svg>
      </div>
      <h3 className="text-black text-xl font-semibold mb-4">Performance Analytics & Reporting</h3>
      <p className="text-gray-800 text-base leading-relaxed">We provide detailed analytics and reports to track campaign performance, offering insights into engagement, reach, and ROI to optimize future strategies.</p>
    </div>
    
    <div className="service-card bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 border border-yellow-400 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
        <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15l-6-6-6 6"></path></svg>
      </div>
      <h3 className="text-black text-xl font-semibold mb-4">Campaign Execution & Management</h3>
      <p className="text-gray-800 text-base leading-relaxed">Our team manages your influencer campaigns from start to finish, handling outreach, content creation, and coordination to ensure seamless execution.</p>
    </div>
    
    <div className="service-card bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 border border-pink-400 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-center mb-4">
        <svg className="w-12 h-12 text-pink-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v8l6 6"></path></svg>
      </div>
      <h3 className="text-black text-xl font-semibold mb-4">Influencer Relationship Building</h3>
      <p className="text-gray-800 text-base leading-relaxed">We foster long-term relationships with influencers that align with your brand, creating authentic partnerships that enhance credibility and brand advocacy.</p>
    </div>
  </div>

  <div className="text-center mt-8">
    <NavLink to='/service' className="inline-block bg-[#a6c465] text-white 
    text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-black transition duration-300">View All</NavLink>
  </div>
</div>







<div className="smbull-products lg:mx-14 mx-5  p-6 md:p-8 bg-[#a6c465] rounded-lg  flex flex-col lg:flex-row lg:justify-between items-center space-y-6 lg:space-y-0 lg:space-x-8 overflow-x-hidden 
shadow-lg transition-transform transform ">
      
  <div
    className="smbull-text-section flex-1 text-center lg:text-left"
    data-aos="fade-left"  
    data-aos-duration="1000"
  >
    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 uppercase">
      PRODUCTS
    </h2>
    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
      Empowering Modern Businesses with Innovative Solutions
    </h1>
    <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
      At SMBULL IT Company, we are dedicated to delivering innovative products that address the diverse needs of modern businesses. Our product portfolio is designed to provide solutions that enhance productivity, streamline operations, and drive growth. Explore our flagship products below:
    </p>

    <NavLink to='/Product'
      className="smbull-button bg-white text-black py-3 px-6 rounded-md text-xs md:text-lg hover:bg-black hover:text-white"
      data-aos="fade-right"  
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      Discover Our Full Range of PRODUCTS
    </NavLink>
  </div>

  <div
    className="smbull-image-section flex-1 flex justify-center items-center"
    data-aos="flip-left"  
    data-aos-duration="1000"
    data-aos-delay="400"
  >
    <img src={about} alt="Product Image" className="w-full h-auto rounded-lg shadow-lg" />
  </div>
</div>





<Homeimgslider />





  <div className="contact-container w-full bg-gradient-to-b from-blue-50 to-blue-100 p-8 rounded-lg
  lg:mt-6 mx-0 
">
  <h2 className="text-center text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Visit Us at Our Office</h2>
  
  <div className="map-container mb-8 rounded-lg overflow-hidden shadow-xl 
  transition-transform transform ">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.143703080782!2d-122.41941568468126!3d37.7749292797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809f7e1a2f53%3A0x78c28b2b5f4771f9!2sSan%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1692857764420!5m2!1sen!2sin"
      className="w-full h-80 md:h-[30rem] border-0"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>

  <div className="text-center">
    <NavLink to='/contact' className="inline-block bg-[#a6c465] hover:     
     text-white text-xl font-semibold py-4 px-8 rounded-full shadow-md hover:bg-black transition duration-300 ease-in-out transform hover:scale-105">
     Get in Touch
    </NavLink>
  </div>

  
</div>







    </>
  )
}

export default Homeone
