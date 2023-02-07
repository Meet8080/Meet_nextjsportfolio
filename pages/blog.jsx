import React from "react";
import Image from "next/image";
import blog from "../public/assets/blog.png";
import { RiRadioButtonFill } from "react-icons/ri";
const Blog = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[55vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[55vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={blog}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Champion Blog</h2>
          <h3 className="py-2">React / CSS / Javascript / Graph CMS/ Graphql / Next js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS. Users are able to see latest post
            and blogs.people can also do comment about each and every blog post.Graph cms was used as a content management system.
          </p>
          <a
            href="https://github.com/Meet8080/Blog_app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Graphql
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
