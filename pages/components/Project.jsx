import React from "react";
import Image from "next/image";
import Link from "next/link";
import Proj1 from "../../public/Assets/Projects/Project_1g.gif";
import Proj2 from "../../public/Assets/Projects/Project_2G.gif";
import Proj3 from "../../public/Assets/Projects/Project_3g.gif";

const Project = () => {
  return (
    <div id="project" className="w-full  bg-gradient-to-t from-[#445269] to-cyan-500 ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-gray-100 ">Projects</p>
        <h2 className="py-4 text-gray-100">What I&apos;ve Build</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl group-hover:opacity-10" src={Proj1} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Feeding Frenzy</h3>
              <p className="pb-4 pt-2 text-white text-center">Phaser Javascript Web Based Game</p>
              <Link href="/Project1">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-500 hover:text-white">More Info</p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl group-hover:opacity-10" src={Proj2} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Hangman</h3>
              <p className="pb-4 pt-2 text-white text-center">Phaser Javascript Web Based Game</p>
              <Link href="/Project1">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-500 hover:text-white">More Info</p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl group-hover:opacity-10" src={Proj3} alt="/" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">Collision Mitigation App</h3>
              <p className="pb-4 pt-2 text-white text-center">Tensorflow Lite java android project</p>
              <Link href="/Project3">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-500 hover:text-white">More Info</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
