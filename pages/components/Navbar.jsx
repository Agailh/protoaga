import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ProfilePic from "../../public/Assets/pp.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [Shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/Project1") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className={Shadow ? "fixed w-full h-20 shadow-xl z-[1000]" : "fixed w-full h-20 z[100] "}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#ecf0f3]">
        <Image src={ProfilePic} alt="/" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-110 ease-in duration-200">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:scale-110 ease-in duration-200">About</li>
            </Link>
            <Link href="/#skill">
              <li className="ml-10 text-sm uppercase hover:scale-110 ease-in duration-200">Skills</li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 text-sm uppercase hover:scale-110 ease-in duration-200">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:scale-110 ease-in duration-200">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* ----------------------------------------Menu------------------------------------------------------ */}
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={ProfilePic} alt="/" width="87" height="35" />
              </Link>
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let&apos;s build someting legendary together </p>
            </div>
          </div>
          <div className="py-4 flex flex-col ">
            <ul className="uppercase  ">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm crusor-pointer hover:scale-105 ease-in duration-300">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm crusor-pointer hover:scale-105 ease-in duration-300">
                  About
                </li>
              </Link>
              <Link href="/#skill">
                <li onClick={() => setNav(false)} className="py-4 text-sm crusor-pointer hover:scale-105 ease-in duration-300">
                  Skills
                </li>
              </Link>
              <Link href="/#project">
                <li onClick={() => setNav(false)} className="py-4 text-sm crusor-pointer hover:scale-105 ease-in duration-300">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm crusor-pointer hover:scale-105 ease-in duration-300">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#5651e5]">Let&apos;s Connect </p>
              <div className="flex items-center justify-between my-4 w-full sm:mw-[100%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer hover:scale-105 ease-in duration-300  ">
                  <a href="https://www.linkedin.com/in/aga-ilham-ferdiansyah-091387220/">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer hover:scale-105 ease-in duration-300  ">
                  <a href="https://github.com/Agailh">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer hover:scale-105 ease-in duration-300  ">
                  <a href="https://www.instagram.com/aga_ilham86/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer hover:scale-105 ease-in duration-300  ">
                  <a href="https://wa.me/089668899475">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
