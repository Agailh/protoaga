import React from "react";
import Project1Img from "../../public/Assets/Projects/Project_1g.gif";
import Project2Img from "../../public/Assets/Projects/Project_2G.gif";
import Project3Img from "../../public/Assets/Projects/Project_3g.gif";
import Projectitems from "../components/Projectitems";

const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
        <h2 className="py-4">What i&apos;ve Build</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Projectitems title="Feeding Frenzy" backgroundImg={Project1Img} subtitle="Pahser Javascrip Web Based Game" projectUrl="/Project1" />
          <Projectitems title="Hangman" backgroundImg={Project2Img} subtitle="Pahser Javascrip Web Based Game" projectUrl="/project2" />
          <Projectitems title="Collision Mitigation App" backgroundImg={Project3Img} subtitle="Tensorflow Lite java android project" projectUrl="/project3" />
        </div>
      </div>
    </div>
  );
};

export default Project;
