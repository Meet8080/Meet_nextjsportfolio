import Link from "next/link";
import  React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <div className={shadow ?`fixed top-0 w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]` : `fixed top-0 w-full h-20 z-[100] bg-[#ecf0f3]`}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link className="font-bold text-3xl text-[#5655e5]" href="/">
          Meet
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:text-blue-500 font-bold">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase  hover:text-blue-500 font-bold">
                about
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase  hover:text-blue-500 font-bold">
                skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase  hover:text-blue-500 font-bold">
                projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase  hover:text-blue-500 font-bold">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden ">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? " md:hidden fixed top-0 left-0 bg-black/70 w-full h-screen" : ""}
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-white p-10 ease-in-out duration-500"
              : " fixed left-[-100%] top-0  bg-[#ecf0f3] p-10 ease-in-out duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Link className="font-bold text-3xl text-[#5655e5]" href="/">
                Meet
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-800 my-5">
              <p className="py-3"> Lets design something exceptional</p>
            </div>
          </div>
          <div className="py-5">
            <ul>
              <Link href="/">
                <li onClick={()=>{setNav(false)}}className="py-4 text-sm uppercase font-bold">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=>{setNav(false)}}className="py-4 text-sm uppercase font-bold">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=>{setNav(false)}}className="py-4 text-sm uppercase font-bold">skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=>{setNav(false)}}className="py-4 text-sm uppercase font-bold">projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=>{setNav(false)}}className="py-4 text-sm uppercase font-bold">contact</li>
              </Link>
            </ul>

            <div className="py-40">
              <p className="uppercase tracking-widest text-[#5655e5]">
                Let's connect
              </p>
              <div className="flex justify-between w-full items-center my-5 sm:w-[60%]">
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
                  <FaLinkedinIn color="white" size={20}/>
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
                  <FaGithub color="white" size={20} />
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
                  <FaFacebook color="white" size={20}/>
                </div>
                <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
                  <FaInstagram color="white" size={20}/>
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
