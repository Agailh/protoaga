import React from "react";
import ProjP from "../public/Assets/Projects/proj_phaser.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Project1 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-2" layout="fill" objectFit="cover" src={ProjP} alt="/" />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim cum earum deserunt provident ipsam, cumque exercitationem repellendus, saepe vel quaerat aspernatur qui error quasi, quod consequatur delectus dolor. Eum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis repudiandae nisi placeat iusto officiis, illum obcaecati, tempora consectetur, sed eveniet corrupti tenetur eligendi cum et mollitia neque perferendis
            provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque excepturi cumque temporibus, saepe iste officiis unde molestias deserunt illo harum itaque architecto deleniti ea laudantium alias! Eaque, recusandae
            minima!
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