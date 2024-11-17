import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
// import home from '../../public/Images/homee.png';

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      <div
      // style={{
      //   position: "relative",
      //   height: "100vh",
      //   width: "100%",
      //   backgroundImage: `url(${home})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   zIndex: 0,
      // }}
      >
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 10,
                  },
                  repulse: {
                    distance: 150,
                    duration: 0.6,
                  },
                },
              },

              particles: {
                color: {
                  value: ["#ff0081", "#ff8c00", "#00bfff", "#a6c465"],
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.6,
                  width: 1.5,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: true,
                  speed: { min: 1, max: 3 },
                  straight: false,
                  bounce: true,
                },

                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 200,
                },

                opacity: {
                  value: { min: 0.3, max: 0.7 },
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                  },
                },
                shape: {
                  type: ["circle", "triangle"],
                },
                size: {
                  value: { min: 3, max: 10 },
                  animation: {
                    enable: true,
                    speed: 3,
                    sync: false,
                  },
                },
                trail: {
                  enable: true,
                  length: 10,
                  width: 2,
                  color: {
                    value: "#ffffff",
                  },
                },
              },

              detectRetina: true,
            }}
          />
        )}
      </div>
    </>
  );
}
