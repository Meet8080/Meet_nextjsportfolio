import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills"
import Project from "../components/Project";
import Contact from "../components/Contact";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> meet | front-end-developer</title>
        <meta
          name="description"
          content="I am a front-end developer. I can create interactive site designs and also make them more eye-catching with web animations. I can provide clean code with perfection"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills/>
      <Project/>
      <Contact/>
    </>
  );
}
