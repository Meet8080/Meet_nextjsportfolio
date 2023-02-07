import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Project from "../components/Project";
const Projectdata = ({ title, projectURL, projectImg, technology }) => {
  return (
    <div className="flex justify-center items-center relative  min-h-[40vh] w-full  shadow-xl group shadow-gray-500 rounded-xl p-8 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={projectImg}
        alt="/"
        width="1366"
        height="768"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl text-white font-bold tracking-wider text-center uppercase">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center text-xl uppercase">
          {technology}
        </p>
        <Link href={projectURL}>
          <p className="text-center rounded-lg py-2 bg-white text-black font-bold cursor-pointer text-xl uppercase">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projectdata;
