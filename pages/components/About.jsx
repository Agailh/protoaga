import React from "react";
import Image from "next/image";
import QPic from "../../public/Assets/5230311.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">full-time dev part-time gamer</p>
          <p className="py-2 text-gray-600">
            Passionate IT graduate from Satya Wacana Christian University seeking suitable job position to proven skills in JavaScript and HTML with 6 months of experience in javascript HTML 5 game development at PT.Educa Sisfomedia
            Indonesia.
          </p>
          <p className="py-2 text-gray-600">
            Experienced with the project of making 2 web-based games with programming languages javascript HTML 5 Phaser ,title of the games is Feeding Frenzy and Hangman, this project has gone through stages approval and declared completed
            by the company PT Educa Sisfomedia Indonesia Salatiga. Experienced in the creation and research of object detection android applications with the platform Tensorflow Lite. This research has been published in the journal JATISI
            volume 9 number 1 on 20th March 2022.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={QPic} alt="/" width="250" height="250" />
        </div>
      </div>
    </div>
  );
};

export default About;
