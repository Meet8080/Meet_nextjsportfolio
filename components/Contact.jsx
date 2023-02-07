import React from "react";
import Image from "next/image";
import Link from "next/link";
import about from "../public/assets/about.jpg";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen pt-6 lg:pt-8">
      <div className="max-w-[1280px] m-auto px-2 py-12 w-full">
        <p className="text-3xl tracking-widest uppercase text-center text-[#5655e5]">
          Contact
        </p>
        <h2 className="py-4 text-center">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <Image
                src={about}
                alt="about-image"
                className="rounded-xl shadow-xl shadow-gray-600 hover:scale-105"
              ></Image>

              <div>
                <h2 className="py-6 font-bold">Meet Patel</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for Full-time Front-end Developer job. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
              </div>
              <div className="flex justify-between items-center max-w-[300px] m-auto py-6">
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
                  <FaLinkedinIn color="white" size={20} />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
                  <FaGithub color="white" size={20} />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
                  <FaFacebook color="white" size={20} />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
                  <FaInstagram color="white" size={20} />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-500 rounded-lg lg:p-4">
            <div className="p-4">
                <form>
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Name</label>
                            <input className="border-2 p-3 rounded-lg flex border-gray-600" type="text"/>
                        </div>
                    
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Phone Number</label>
                            <input className="border-2 p-3 rounded-lg flex border-gray-600" type="text"/>
                        </div>
                        </div>

                        <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input className="border-2 p-3 rounded-lg flex border-gray-600" type="email"/>
                        </div>

                        <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input className="border-2 p-3 rounded-lg flex border-gray-600" type="text"/>
                        </div>

                        <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                       <textarea className="border-2 rounded-lg p-3 border-gray-600" cols="30" rows="10" ></textarea>
                        </div>

                        <button className="w-full text-gray-50 p-4 tracking-widest mt-4">Send Message
                        </button>
                </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href='/'>
                <div className="rounded-full shadow-md shadow-gray-600 p-5  bg-[#5655e5]">
                    <HiOutlineChevronDoubleUp  color="white" size={30}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
