import React from "react";
import Heropage from "../Components/Heropage/Heropage";
import Homeone from "./Homeone";
import Preloader from "./Preloader/Preloader";
import Particle from './Particle/Particle';
const Home = () => {
  return (
    <div>
      <Heropage />
      <Preloader />
{/* <Particle /> */}
      <Homeone />
    </div>
  );
};

export default Home;
