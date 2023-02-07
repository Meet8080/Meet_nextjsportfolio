import React from "react";
import Image from "next/image";
import about from "../public/assets/about.jpg";
const About = () => {
  return (
    <div id="about" className="w-full h-screen p-2 flex items-center ">
      <div className="max-w-[1280px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <Image
            src={about}
            alt="about-image"
            className=" w-[0%] h-[0%] md:w-[450px] md:h-[450px] rounded-md gap-6 shadow-xl shadow-gray-600 hover:scale-105"
          ></Image>
        </div>
        <div className="col-span-2 py-2">
          <p className="text-3xl tracking-wider uppercase text-center md:text-left text-[#5655e5]">
            About
          </p>
          <h2 className="py-2 text-center md:text-left">Who I am?</h2>
          <p className="text-[#5655e5] py-1 text-center md:text-left">
            Web Designer & Web Developer
          </p>
          <p className="text-gray-700 text-xl md:text-lg lg:text-xl ">
            My name is Meet Patel. I am highly educated individual with a
            Bachelor&apos;s degree in Computer Science and a Post-Graduation degree
            in Web Design and Development. With a strong background in both
            computer science and web design, I am well-equipped to tackle a wide
            range of projects and challenges in the tech industry.
          </p>
          <br />
          <p className="text-gray-700 text-xl md:text-lg lg:text-xl ">
            My education and experience in these fields have provided me a
            unique set of skills that make me an asset in any team or project. I
            am an innovative problem solver who is dedicated to staying
            up-to-date with the latest technologies and trends in the industry.
          </p>
          {/* <p className="text-gray-700 text-xl md:text-lg lg:text-xl ">
            I am a front-end developer. I can create interactive site-design and
            also make it more eye-catching by web-animations.I can provide clean
            code with perfection
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
