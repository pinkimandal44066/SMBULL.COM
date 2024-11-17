import React, { useEffect } from "react";
import satelitImg from "../../../public/Images/about.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Rapidscat = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="bg-primary text-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                Our Mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-3xl"
              >
                SMBULL Influencer Marketing
              </h1>
              <p data-aos="fade-up" data-aos-delay="700" className="text-base">
                At SMBULL Influencer Marketing, our mission is to empower brands
                by creating authentic connections with their audiences through
                strategic influencer partnerships. We believe in the power of
                storytelling and aim to elevate your brand’s presence in the
                digital landscape.
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay="900"
                className="duration-200"
              >
                We strive to provide innovative and data-driven marketing
                solutions that not only enhance brand visibility but also foster
                lasting relationships. By leveraging the unique strengths of
                influencers, we deliver impactful campaigns that resonate and
                drive measurable results.
              </p>
            </div>
            <div data-aos="zoom-in" className="flex justify-center">
              <img
                src={satelitImg}
                alt="SMBULL Influencer Marketing"
                className="w-full max-w-[80%] h-auto object-cover max-h-[350px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
