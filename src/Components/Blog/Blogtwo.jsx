import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Photo1 from "../../../public/Images/photo1.jpeg";
import Photo2 from "../../../public/Images/photo2.jpeg";
import Photo3 from "../../../public/Images/photo3.jpeg";
import Photo4 from "../../../public/Images/photo1.jpeg";
import Photo5 from "../../../public/Images/photo2.jpeg";

const CardsData = [
  {
    id: 1,
    title: "What is Influencer Marketing?",
    desc: "Understanding the power of influencers in today's digital marketing world.",
    img: Photo1,
  },
  {
    id: 2,
    title: "Choosing the Right Influencer",
    desc: "How to select the right influencers to promote your brand.",
    img: Photo2,
  },
  {
    id: 3,
    title: "Micro vs. Macro Influencers",
    desc: "Exploring the benefits of micro-influencers vs. macro-influencers.",
    img: Photo3,
  },
  {
    id: 4,
    title: "The Impact of Instagram Influencers",
    desc: "How Instagram influencers are shaping modern marketing strategies.",
    img: Photo4,
  },
  {
    id: 5,
    title: "Influencer Campaign Strategies",
    desc: "Crafting effective influencer marketing campaigns for maximum reach.",
    img: Photo5,
  },
  {
    id: 6,
    title: "Influencer Marketing ROI",
    desc: "Measuring the return on investment of your influencer marketing efforts.",
    img: Photo1,
  },
  {
    id: 7,
    title: "Building Long-Term Influencer Partnerships",
    desc: "The benefits of long-term partnerships with influencers for brand growth.",
    img: Photo2,
  },
  {
    id: 8,
    title: "Navigating FTC Guidelines",
    desc: "Ensuring your influencer campaigns comply with FTC regulations.",
    img: Photo3,
  },
  {
    id: 9,
    title: "Influencer Marketing in 2024",
    desc: "Predictions and trends for influencer marketing in the upcoming year.",
    img: Photo4,
  },
  {
    id: 10,
    title: "TikTok and Influencer Marketing",
    desc: "Leveraging TikTok for influencer marketing success.",
    img: Photo5,
  },
  {
    id: 11,
    title: "The Role of Influencer Agencies",
    desc: "How influencer marketing agencies can help scale your campaigns.",
    img: Photo1,
  },
  {
    id: 12,
    title: "Authenticity in Influencer Marketing",
    desc: "The importance of authentic content in influencer collaborations.",
    img: Photo2,
  },
  {
    id: 13,
    title: "Influencer Marketing Pitfalls to Avoid",
    desc: "Common mistakes in influencer marketing and how to avoid them.",
    img: Photo3,
  },
  {
    id: 14,
    title: "The Future of Influencer Marketing",
    desc: "Exploring the future of influencer marketing in an evolving digital landscape.",
    img: Photo4,
  },
  {
    id: 15,
    title: "Video Content and Influencers",
    desc: "The rise of video content in influencer marketing campaigns.",
    img: Photo5,
  },
];

const BlogCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {CardsData.map(({ id, title, desc }) => {
            let animationType;
            let cardStyle = "hover:rotate-3";

            if (id >= 1 && id <= 4) {
              animationType = "fade-up";
              cardStyle = "hover:rotate-3";
            } else if (id >= 5 && id <= 8) {
              animationType = "zoom-in";
              cardStyle = "hover:scale-105";
            } else if (id >= 9 && id <= 12) {
              animationType = "slide-up";
              cardStyle = "hover:rotate-6";
            } else if (id >= 13 && id <= 16) {
              animationType = "flip-left";
              cardStyle = "hover:-rotate-6";
            } else {
              animationType = "zoom-in-up";
              cardStyle = "hover:scale-110";
            }

            return (
              <div
                key={id}
                data-aos={animationType}
                className={`group text-white shadow-lg rounded-lg overflow-hidden relative transition-transform duration-500 ${cardStyle}`}
              >
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-center items-center text-center">
                  <h2
                    className="text-sm md:text-lg lg:text-xl font-bold mb-2"
                    data-aos="fade-in"
                  >
                    {title}
                  </h2>
                  <p
                    className="text-xs md:text-sm lg:text-base font-medium"
                    data-aos="fade-in"
                  >
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:mt-0 md:mt-0 sm:-mt-32 -mt-64 space-y-8">
          {CardsData.map(({ id, title, desc, img }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 border-b pb-4"
              data-aos="fade-up"
            >
              <img
                src={img}
                alt={title}
                className="w-60 h-60 sm:w-72 sm:h-72 md:w-32 md:h-32 object-cover lg:rounded-full md:rounded-xl sm:rounded-2xl rounded-full transform transition-transform duration-500 hover:scale-110"
              />
              <div className="flex-1">
                <h2
                  className="text-lg md:text-xl lg:text-2xl font-bold mb-2"
                  data-aos="fade-up"
                >
                  {title}
                </h2>
                <p
                  className="text-sm md:text-base lg:text-lg text-gray-600"
                  data-aos="fade-up"
                >
                  {desc} Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Phasellus imperdiet, nulla et dictum interdum, nisi
                  lorem egestas odio, vitae scelerisque enim ligula venenatis
                  dolor. Maecenas nisl est, ultrices nec congue eget, auctor
                  vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                  sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In
                  at libero sed nunc venenatis imperdiet sed ornare turpis.
                  Donec vitae dui eget tellus gravida venenatis. Integer
                  fringilla congue eros non fermentum. Sed dapibus pulvinar nibh
                  tempor porta.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogCards;
