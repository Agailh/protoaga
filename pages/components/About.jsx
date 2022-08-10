import React from "react";
import Image from "next/image";
import QPic from "../../public/Assets/5230311.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 bg-gradient-to-t from-[#445269] to-cyan-500 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-gray-100">About</p>
          <h2 className="py-4 text-gray-100">Who I Am</h2>
          <p className="py-2 text-gray-300">full-time dev part-time gamer</p>
          <p className="py-2 text-gray-300">Passionate IT graduate from Satya Wacana Christian University addicted to making a website to look like a piece of art ,excited to learn new things, using creative approach to solve things. </p>
          <p className="py-2 text-gray-300">
            Experienced with the project of making 2 web-based games with programming languages javascript HTML 5 Phaser. Experienced in the creation and research of object detection android applications with the platform Tensorflow Lite.
            This research has been published in the journal JATISI volume 9 number 1 on 20th March 2022.
          </p>
        </div>
        <div className="w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={QPic} alt="/" width="300" height="300" />
        </div>
      </div>
    </div>
  );
};

export default About;
