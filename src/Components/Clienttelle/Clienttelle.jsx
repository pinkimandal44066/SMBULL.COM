import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import blog from "../../../public/Images/blog-6.jpg";
import Clientlogo from "../Clienttelle/Clientlogo";
const Header = () => (
  <header className="relative  shadow-md ">
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
            className="text-4xl
             md:text-5xl lg:text-4xl font-extrabold mb-6 bg-clip-text text-transparent
              bg-gradient-to-r from-green-500 to-blue-500"
          >
            Elevate Your Digital Presence with SMBULL Solutions
            <p className="text-lg  text-white mt-4">
              Crafting exceptional digital experiences with innovative products,
              tailor-made to drive growth and success in the modern business
              world.
            </p>
          </h1>
        </div>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section id="hero" className="relative py-12 bg-gray-50 ">
    <div className="flex flex-col lg:flex-row items-center lg:items-start mx-10">
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 "
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-4">Revolutionize Your Business</h2>
        <p className="text-lg mb-6">
          Empower your business with cutting-edge digital solutions that
          guarantee enhanced productivity and efficiency.
        </p>

        <div className="container mx-auto p-4 text-center">
          <p className="lg:text-lg sm:text-md text-sm mb-6">
            Experience the transformative results achieved by our esteemed
            clientele, who have harnessed the power of influencer marketing to
            elevate their brands. Whether you're aiming for increased
            visibility, authentic engagement, or market expansion, our clients
            are testament to what's possible with the right strategy.
          </p>
          <ul className="list-disc text-left mx-auto lg:w-2/3 md:w-3/4 sm:w-full text-md">
            <li className="mb-2">
              <span className="font-bold">Diverse Industries:</span> Our
              clientele spans fashion, tech, lifestyle, and more—each benefiting
              from campaigns tailored to their unique audiences.
            </li>
            <li className="mb-2">
              <span className="font-bold">Global Reach:</span> We've helped both
              emerging brands and industry leaders connect with millions
              worldwide, amplifying their message beyond expectations.
            </li>
            <li className="mb-2">
              <span className="font-bold">Proven Success:</span> Through our
              collaborations, clients have seen remarkable growth in brand
              loyalty and engagement, consistently surpassing their goals.
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        data-aos="fade-in"
      >
        <img
          src="https://img.freepik.com/free-photo/business-people-working-together_23-2148889161.jpg?size=626&ext=jpg"
          alt="Product"
          className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </section>
);

const ProductDetails = () => (
  <section id="details" className="py-12 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Influencer Marketing Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold mb-2">Influencer Outreach</h3>
          <p className="text-gray-700">
            We connect you with the right influencers to amplify your brand’s
            message and ensure maximum visibility.
          </p>
        </div>
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
          <p className="text-gray-700">
            Our influencers create compelling and authentic content that
            resonates with your target audience.
          </p>
        </div>
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold mb-2">Campaign Management</h3>
          <p className="text-gray-700">
            From strategy to execution, we manage influencer marketing campaigns
            that deliver tangible results.
          </p>
        </div>

        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold mb-2">Targeted Audience</h3>
          <p className="text-gray-700">
            We ensure your campaign reaches the right audience through careful
            influencer selection and data-driven strategies.
          </p>
        </div>
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
          <p className="text-gray-700">
            Our in-depth analytics help you track the performance of your
            campaigns and measure ROI accurately.
          </p>
        </div>
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-semibold mb-2">Long-term Partnerships</h3>
          <p className="text-gray-700">
            We foster long-term collaborations with influencers to build
            sustained engagement for your brand.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ImageGallery = () => (
  <section id="gallery" className="py-12  mx-5">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <motion.img
          src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg"
          alt="Gallery Image 1"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          data-aos="zoom-in"
        />
        <motion.img
          src="https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
          alt="Gallery Image 2"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          data-aos="zoom-in"
        />
        <motion.img
          src="https://img.freepik.com/free-photo/lake-mountains_1204-502.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
          alt="Gallery Image 3"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          data-aos="zoom-in"
        />
        <motion.img
          src="https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?t=st=1726034740~exp=1726035340~hmac=3fd7efe79cf69ca4ac87bb98b44def5c35e48688de7741dd00f0d4957db661eb"
          alt="Gallery Image 4"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          data-aos="zoom-in"
        />
        <motion.img
          src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2"
          alt="Gallery Image 5"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          data-aos="zoom-in"
        />
        <motion.img
          src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?size=626&ext=jpg&ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
          alt="Gallery Image 5"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          data-aos="zoom-in"
        />
      </div>
    </div>
  </section>
);

const ProductPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="">
      <Header />
      <HeroSection />

      <Clientlogo />
      <ProductDetails />

      <ImageGallery />
    </div>
  );
};

export default ProductPage;
