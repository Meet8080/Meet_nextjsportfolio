import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen px-2 " >
      <div className="text-center py-4 md:py-12">
        <h3 className="text-[#5655e5] text-3xl uppercase pt-16">Skills</h3>
        {/* <hr className='w-[80%] mx-auto'></hr> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-4">
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <div>
            <Image
              src={"/../public/assets/html.png"}
              alt="tailwind-logo"
              width={84}
              height={84}
            ></Image>
          </div>
          <div>
            <p className="text-gray-800 text-xl font-bold">HTML</p>
          </div>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/css2.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">CSS</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/tailwind.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">Tailwind</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/js.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">Javascript</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/react.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">React</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/next.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">Next</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/sass.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">SASS</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/node.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">Node</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/mongo.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">MongoDB</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/sanity.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">Sanity</p>
        </div>
        <div className="flex justify-around items-center shadow-lg shadow-gray-500">
          <Image
            src={"/../public/assets/express1.png"}
            alt="tailwind-logo"
            width={84}
            height={84}
          ></Image>
          <p className="text-gray-800 text-xl font-bold">Express</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
