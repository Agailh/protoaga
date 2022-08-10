import React from "react";
import ProjP from "../public/Assets/Projects/proj_phaser.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Project1 = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={ProjP} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Feeding Frenzy and Hangman</h2>
          <h3> Web Game / Javascript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Web base game build with phaser engine, html5 and javascript. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus qui vel error soluta ab provident labore saepe, a excepturi recusandae voluptates accusantium
            officiis adipisci illum fugiat praesentium, rem harum. Totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequatur nemo maiores a, tempore illo, impedit ducimus ipsa officia voluptatum necessitatibus
            deserunt sunt, ea qui delectus soluta explicabo. Asperiores, temporibus.
          </p>
          <a href="https://github.com/Agailh" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML 5
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Phaser Engine
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
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
