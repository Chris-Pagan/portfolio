import React from "react";
import Image from "next/image";
import HtmlImage from '../public/assets/html.png'
import CssImage from '../public/assets/css.ping'
import JsImg from '../public/assets/javascript.png'
import NodeJs from '../public/assets/node.png'
import TailwindImg from '../public/assets/tailwind.png'
import ReactJsImg from '../public/assets/react.png'
import NextJsImg from '../public/assets/nextjs.png'
import GitHubImg from '../public/assets/github.png'


const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-gray-200 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-4">
                <Image
                  src={HtmlImage}
                  alt="logo for HTML"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-gray-200 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-4">
                <Image
                  src={CssImage}
                  alt="logo for CSS"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-gray-200 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-4">
                <Image
                  src={JsImg}
                  alt="logo for JavaScript"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-gray-200 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-4">
                <Image
                  src={NodeJs}
                  alt="logo for NodeJS"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-gray-200 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-4">
                <Image
                  src={TailwindImg}
                  alt="logo for TailwindCSS"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-gray-200 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-4">
                <Image
                  src={ReactJsImg}
                  alt="logo for React"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-gray-200 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-4">
                <Image
                  src={NextJsImg}
                  alt="logo for NextJS"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-gray-200 shadow-md rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-4">
                <Image
                  src={GitHubImg}
                  alt="logo for GitHub"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
