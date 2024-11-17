import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CombinedComponent = () => {
  const imageSet1 = [
    "https://img.freepik.com/free-photo/digital-art-style-illustration-river-nature_23-2151825741.jpg",
    "https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825803.jpg",
    "https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825812.jpg",
  ];

  const imageSet2 = [
    "https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825802.jpg",
    "https://img.freepik.com/free-photo/digital-art-style-illustration-river-nature_23-2151825739.jpg",
    "https://img.freepik.com/free-photo/digital-art-style-river-nature-landscape_23-2151825810.jpg",
  ];

  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % imageSet1.length);
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % imageSet2.length);
    }, 5000);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 bg-white"
        data-aos="fade-right"
      >
        <div className="lg:w-1/2 max-w-lg lg:mx-20">
          <h2 className="text-4xl font-bold mb-4">
            Join Our Influencer Network
          </h2>
          <p className="text-lg font-medium mb-2">
            Looking for opportunities to collaborate with top brands?
          </p>
          <p className="text-gray-600 mb-6">
            Connect with leading brands, get exclusive deals, and grow your
            audience with our influencer platform designed to bring creators and
            businesses together.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg">
            GET STARTED TODAY
          </button>
        </div>

        <div
          className="relative lg:w-1/2 mt-10 lg:mt-0 flex items-center justify-center"
          data-aos="fade-left"
        >
          <div className="relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={imageSet1[currentImageIndex1]}
              alt="Influencer 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative w-48 h-72 -ml-6 mt-16 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={imageSet2[currentImageIndex2]}
              alt="Influencer 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="bg-gradient-to-br 
        from-[#ff6a6a] 
        via-[#a6c465] 
        via-[#ffb74d] 
        via-[#ffd54f] 
        via-[#c6ffda] 
        via-[#a7ffeb] 
        via-[#80d8ff] 
        via-[#82b1ff] 
        via-[#8c9eff] 
        to-[#ffab40]   text-white flex flex-col md:flex-row p-10"
        data-aos="zoom-in"
      >
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4">Influencer Hub</h1>
          <h2 className="text-2xl mb-6">
            Maximize Your Potential with Our Platform
          </h2>
          <p className="text-lg mb-8">
            Our platform helps influencers like you connect with brands for
            exciting sponsorship deals, content creation partnerships, and more.
            Whether you're an aspiring creator or an established name, there's a
            place for you here.
          </p>
          {/* <div className="flex space-x-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-5 rounded-full font-semibold">
              Join Now
            </button>
            <button className="border-2 border-white text-white py-3 px-5 rounded-full font-semibold hover:bg-white hover:text-purple-800">
              Learn More
            </button>
          </div> */}
        </div>

        <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
          <div className="relative" data-aos="zoom-in-up">
            <img
              src="https://img.freepik.com/premium-photo/solitary-tree-sunset-serene-meadow_1222407-1575.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
              alt="Main Influencer"
              className="w-96 h-96 rounded-lg shadow-lg"
            />
            <div className="absolute top-2 left-2 flex space-x-2">
              <img
                src="https://img.freepik.com/premium-photo/dirt-road-leads-field-with-tree-sunset-background_917313-32077.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Overlay 1"
                className="w-24 h-24 rounded-lg border-4 border-white"
              />
              <img
                src="https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498366.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Overlay 2"
                className="w-24 h-24 rounded-lg border-4 border-white"
              />
            </div>
            <div className="absolute bottom-2 right-2 flex space-x-2">
              <img
                src="https://img.freepik.com/premium-photo/beautiful-butterfly-images-brighten-your-day_1199394-94530.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Overlay 3"
                className="w-24 h-24 rounded-lg border-4 border-white"
              />
              <img
                src="https://img.freepik.com/premium-photo/mountains-background-night-view_1165970-531.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
                alt="Overlay 4"
                className="w-24 h-24 rounded-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-100 py-12">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            What Our Clients Say About Us
          </h2>
          <p className="text-lg text-gray-700 mt-4 lg:mx-32 mx-4">
            We’ve helped brands globally enhance their influencer marketing
            strategies, driving impactful results. Here's what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <img
              src="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
              alt="Influencer Marketing Trends"
              className="mb-4 w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Top Influencer Marketing Trends in 2023
            </h3>
            <p className="text-gray-700 mt-2">
              Learn how leading brands are leveraging the latest trends to
              maximize their influencer marketing efforts and engage their
              audiences effectively.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="https://img.freepik.com/free-photo/photorealistic-tree-with-branches-trunk-outside-nature_23-2151478142.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
              alt="ROI Case Study"
              className="mb-4 w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Maximizing ROI: Influencer Marketing Success Story
            </h3>
            <p className="text-gray-700 mt-2">
              Discover how a global beauty brand optimized its influencer
              campaigns, increasing ROI by 68% in six months.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://img.freepik.com/premium-photo/wallpaper-illustration_1037184-76993.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
              alt="Strategic Partnerships"
              className="mb-4 w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Building Strategic Partnerships with Influencers
            </h3>
            <p className="text-gray-700 mt-2">
              See how we helped brands form long-term partnerships with
              influencers, increasing brand loyalty and customer engagement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CombinedComponent;
