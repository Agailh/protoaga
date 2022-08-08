import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="upercase text-sm tracking-widest text-gray-600">Let&apos;s Build something together</p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos; m <span className="text-[#5651e5]">Aga</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a fresh graduate from Satya Wacana Cristian University with experience in web game developing and android application developing, but now i&apos;am focusing in learning responsive front-end web application technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
              <a href="https://www.linkedin.com/in/aga-ilham-ferdiansyah-091387220/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
              <a href="https://github.com/Agailh">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
              <a href="https://www.instagram.com/aga_ilham86/">
                <FaInstagram />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
              <a href="https://wa.me/089668899475">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
