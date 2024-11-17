import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Servicetwo from "../Services/Servicetwo";
const CombinedComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      AOS.refreshHard();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="bg-gradient-to-br 
from-[#a6c465]     
via-[#a6c465]      
via-[#ffab40]      
via-[#a6c465]      
via-[#a6c465]       
via-[#a6c465]     
via-[#ffab40]      
via-[#ff6a6a]      
to-[#ff6a6a]      

        p-6"
        data-aos="fade-up"
      >
        <div className="relative w-full overflow-hidden mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "https://img.freepik.com/free-photo/digital-art-style-illustration-river-nature_23-2151825741.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825803.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-illustration-river-nature_23-2151825739.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825810.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-illustration-river-nature_23-2151825691.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825802.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-illustration-river-nature_23-2151825736.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-illustration-river-nature_23-2151825728.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-illustration-river-nature_23-2151825738.jpg",
              "https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825812.jpg",
            ].map((src, index) => (
              <div className="relative" key={index} data-aos="flip-left">
                <img
                  src={src}
                  alt={`brand${index + 1}`}
                  className="w-52 h-40 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Servicetwo />
    </>
  );
};

export default CombinedComponent;
