import React from "react";
import img4 from "../../../public/Images/img4.avif";
import img5 from "../../../public/Images/img5.avif";
import img6 from "../../../public/Images/img6.avif";

import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    img: img4,
    title: "ABC",
    desc: "CEO & Founder",
    content: "Leading the company with a vision for innovation and growth.",
  },

  {
    id: 2,
    img: img5,
    title: "dEFGO",
    desc: "Software Engineer",
    content: "Developing cutting-edge software solutions for global clients.",
  },
  {
    id: 3,
    img: img6,
    title: "IJKLM",
    desc: "UX/UI Designer",
    content:
      "Crafting seamless user experiences with creative design solutions.",
  },
];
const AnimatedCard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center  font-bold text-3xl mb-14 mt-5 sm:mt-0">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {CardsData.map(({ id, img, title, desc, content }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[330px] h-[330px] rounded-lg"
              />

              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}
                    </Fade>
                    <p>{content}</p>
                    <div></div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCard;
