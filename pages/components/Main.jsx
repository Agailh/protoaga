import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center  bg-gradient-to-b from-[#445269] to-cyan-500 ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* <p className="upercase text-sm tracking-widest text-gray-600">Let&apos;s Build something together</p> */}
          <h1 className="py-4 text-gray-100">
            Hi, I&apos;m <span>Aga</span>
          </h1>
          <h1 className="py-4 text-gray-100">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-300 max-w-[70%] m-auto">
            I&apos;m a fresh graduate from Satya Wacana Cristian University with experience in web game developing and android application developing, but now i&apos;am focusing in learning responsive front-end web application technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-xl p-6 crusor-pointer hover:scale-110 ease-in duration-300 bg-gray-300 ">
              <a href="https://www.linkedin.com/in/aga-ilham-ferdiansyah-091387220/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-xl shadow-black-400 p-6 crusor-pointer hover:scale-110 ease-in duration-300 bg-gray-300 ">
              <a href="https://github.com/Agailh">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-xl p-6 crusor-pointer hover:scale-110 ease-in duration-300 bg-gray-300 ">
              <a href="https://www.instagram.com/aga_ilham86/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
