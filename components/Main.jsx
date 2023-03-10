import React from "react";
import Image from "next/image";
import Navrbar from "./Navbar";
import Link from "next/link";
// import Profile from '../public/assets'
import Typewriter from "typewriter-effect";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Main = () => {
  return (
    <>
      {/* <Navrbar/> */}
      <div
        id="main"
        className="w-full h-screen text-center grid  grid-cols-1 md:grid-cols-6 justify-center items-center py-12 xl:px-24 mt-28 lg:mt-0"
      >
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> */}
        <div className="max-w-[1240px] w-full h-full md:col-start-1 md:col-end-4 mx-auto flex justify-center items-center">
          <div>
            <p className="uppercase tracking-widest text-gray-600 text-sm">
              let&apos;s create beautiful website
            </p>
            <h1 className="py-3 text-gray-800">
              Hi, I&apos;m <span className="text-[#5655e5]">Meet</span>
            </h1>
            <h2 className="py-3 text-gray-800 text-5xl">
              {/* <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('A Front-end Web Developer')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      /> */}
              <Typewriter
                options={{
                  strings: ["A Front-end Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="py-3 max-w-[50%] mx-auto text-gray-700">
              I am a front-end developer. I can create interactive site-design
              and also make it more eye-catching by web-animations.I can provide
              clean code with perfection
            </p>
            <div className="flex justify-between items-center max-w-[300px] m-auto py-4">
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
              <a href="https://www.linkedin.com/in/meet-patel-299690213/"><FaLinkedinIn color="white" size={20}/></a>
              </div>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
              <a href="https://github.com/Meet8080"> <FaGithub color="white" size={20} /></a>
              </div>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
              <a href="https://www.facebook.com/profile.php?id=100004756536184"> <FaFacebook color="white" size={20}/></a>
              </div>
              <div className="rounded-full shadow-md shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-500 bg-[#5655e5]">
              <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTI1NTM4NjYwNzg0NzA4?igshid=NjcyZGVjMzk"> <FaInstagram color="white" size={20}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-start-5 md:col-end-7 px-[25%] md:px-5 lg:px-0">
          <Image
            src="assets/Profile.jpg"
            alt="/"
            width="500"
            height="500"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
