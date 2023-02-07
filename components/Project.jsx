import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import Projectdata from "../components/Projectdata";
// import React from "react";
// import Image from "next/image";
// import Navrbar from "./Navbar";
import Profile from "../public/assets/Profile.jpg";
import Crypto from "../public/assets/Crypto.png";
import Marvel from "../public/assets/Marvel.png";
import blog from "../public/assets/blog.png";
import ecommerce from "../public/assets/ecommerce.png";
const Project = () => {
  return (
    <div id="projects" className="w-full py-4">
      <div className="2xl:px-16 px-4 py-20 mx-auto">
        <p className="text-3xl tracking-widest uppercase text-center text-[#5655e5]">
          Projects
        </p>
        <h2 className="py-4 text-center">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <Projectdata
            title="Champion Crypto Wallet"
            projectImg={Crypto}
            technology="React"
            projectURL="/Cryptowallet"
          />
          <Projectdata
            title="Marvel Movie House"
            projectImg={Marvel}
            technology="Javascript"
            projectURL="/Marvelmoviehouse"
          />
          <Projectdata
            title="Marvel Movie House"
            projectImg={ecommerce}
            technology="React/NEXT"
            projectURL="/ecommerce"
          />
          <Projectdata
            title="Marvel Movie House"
            projectImg={blog}
            technology="React/NEXT"
            projectURL="/blog"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
