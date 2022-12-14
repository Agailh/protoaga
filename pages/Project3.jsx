import React from "react";
import ProjP from "../public/Assets/Projects/Project_3g.gif";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Project3 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-2" layout="fill" objectFit="cover" src={ProjP} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Collision Mitigation App</h2>
          <h3> Android Application / Object Detection / Java</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            an object detection app for saftey driving purpose , this app recreate a saftey feature on car caled collision mitigation system. the purpose of the app is to serve every car owner that don&apos;t have this saftey feature and
            keep the driver to mantain saftey distance to vehicle in front. This app was build with java , Tensorflow as object detection model and openCV as library.
          </p>
          <a href="https://github.com/Agailh/Project_Collision-Mitigation-System_android" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tensorflow
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SSD Mobile Net V2
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Open CV Library
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

export default Project3;
