import React from "react";
import ProjP from "../public/Assets/Projects/Project_1g.gif";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Project1 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={ProjP} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2>Feeding Frenzy and Hangman</h2>
          <h3>Phaser engine and Javascript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            These games was build uisng pahser engine javascript hosted directly in educa studio website. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptatum quod reprehenderit natus eaque numquam explicabo,
            aliquid nam consequatur voluptates molestiae non vero ab? Eveniet eum temporibus quis non eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio a, sit dolores quidem repellat nulla amet numquam
            impedit culpa saepe quam porro esse, aperiam error facilis explicabo quaerat eos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea exercitationem culpa incidunt aspernatur maxime deleniti dolor! Et nostrum magnam
            amet in quas atque saepe natus labore illum, beatae doloremque voluptates?
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies </p>
            <div>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Phaser Engine
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Project1;
