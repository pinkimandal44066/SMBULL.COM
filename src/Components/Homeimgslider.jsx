import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homeimgslider.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full lg:mx-10 mx-5 px-4 mt-10 mb-20">
      <h2 className="text-2xl lg:text-4xl font-semibold text-center mb-4">
        Our Featured Images
      </h2>

      <Slider {...settings}>
        <div className="px-2">
          <img
            src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2=Sixth+Slid"
            alt="First Slide"
            className="w-full h-52 object-cover shadow-lg rounded-md"
          />
        </div>

        <div className="px-2">
          <img
            src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2=Sixth+Slid"
            alt="Second Slide"
            className="w-full h-52 object-cover shadow-lg rounded-md"
          />
        </div>

        <div className="px-2">
          <img
            src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2=Sixth+Slid"
            alt="Third Slide"
            className="w-full h-52 object-cover shadow-lg rounded-md"
          />
        </div>

        <div className="px-2">
          <img
            src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2=Sixth+Slid"
            alt="Fourth Slide"
            className="w-full h-52 object-cover shadow-lg rounded-md"
          />
        </div>

        <div className="px-2">
          <img
            src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2=Sixth+Slid"
            alt="Fifth Slide"
            className="w-full h-52 object-cover shadow-lg rounded-md"
          />
        </div>

        <div className="px-2">
          <img
            src="https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1726034740~exp=1726035340~hmac=11803cc70bd92a152c53fc8ff004681ba9a72cf74c82fe17a4ebcca367ac58a2=Sixth+Slid"
            alt="Sixth Slide"
            className="w-full h-52 object-cover shadow-lg rounded-md"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
