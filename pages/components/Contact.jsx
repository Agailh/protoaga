import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4">Get In Thouch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Name Here</h2>
                <p>Front-End Developer</p>
                <p className="py-4">I&apos;am available for fulltime position. Feel free to contact me anytime</p>
              </div>
              <div>
                <p className="uppercase py-8">Contact Me in</p>
                <div className="flex items-center justify-between py-4">
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
                    <a href="mailto:agailham86@gmail.com">
                      <AiOutlineMail />
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
          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="upercase text-sm-py-2">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="upercase text-sm-py-2">Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="upercase text-sm-py-2">Email</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="upercase text-sm-py-2">Subject</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="upercase text-sm-py-2">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300 " rows="10"></textarea>
                </div>
                <div>
                  <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
