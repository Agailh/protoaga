import React from "react";
import Image from "next/image";
import HtmlIcn from "../../public/Assets/html5.png";
import CssIcn from "../../public/Assets/css-icon.png";
import BootstrapIcn from "../../public/Assets/bootstrap-logo.png";
import JsIcn from "../../public/Assets/javascript.png";
import NextjsIcn from "../../public/Assets/nextjs_icon_132160.png";
import TailIcn from "../../public/Assets/tailwind-css-icon.png";
import TFLIcn from "../../public/Assets/TFL.png";
import PhaserlIcn from "../../public/Assets/phaser.png";

const Skills = () => {
  return (
    <div id="skill" className="w-full lg:h-screen p-2 bg-gradient-to-b from-[#445269] to-cyan-500 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-gray-100">Skills</p>
        <h2 className="py-4 text-gray-100">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-100">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gab-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HtmlIcn} alt="HTML 5" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gab-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CssIcn} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gab-4 justify-center items-center">
              <div className="m-auto">
                <Image src={BootstrapIcn} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gab-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JsIcn} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gab-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextjsIcn} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gab-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailIcn} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gab-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TFLIcn} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tensorflow</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gab-4 justify-center items-center">
              <div className="m-auto">
                <Image src={PhaserlIcn} alt="/" width="64px" height="64px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Phaser</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
