import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:screen bg-gradient-to-b from-[#445269] to-cyan-500 ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-gray-100">Contact</p>
        <h2 className="py-4 text-gray-100">Get In Thouch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 text-gray-100">Aga Ilham Ferdiansyah</h2>
                <p className="text-gray-300">Front-End Developer</p>
                <p className="py-4 text-gray-300">I&apos;am available for fulltime position. Feel free to contact me anytime.</p>
              </div>
              <div>
                <p className="uppercase py-8 text-gray-300">Contact Me in</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-xl bg-gray-300 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
                    <a href="https://www.linkedin.com/in/aga-ilham-ferdiansyah-091387220/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-xl bg-gray-300 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
                    <a href="https://github.com/Agailh">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-xl bg-gray-300 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
                    <a href="mailto:agailham86@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="rounded-full shadow-xl bg-gray-300 p-6 crusor-pointer hover:scale-110 ease-in duration-300  ">
                    <a href="https://wa.me/089668899475">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="upercase text-sm-py-2 text-gray-100">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-300" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="upercase text-sm-py-2 text-gray-100">Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-300" type="text" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="upercase text-sm-py-2 text-gray-100">Email</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-300" type="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="upercase text-sm-py-2 text-gray-100">Subject</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-300" type="text" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="upercase text-sm-py-2 text-gray-100">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300 bg-gray-300  " rows="10" placeholder="This feature is still under development,can't be use yet"></textarea>
                </div>
                <div>
                  <button className="w-full p-4 shadow-xl text-gray-100 mt-4">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-xl p-6 crusor-pointer hover:scale-110 ease-in duration-300 bg-gray-300 ">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
