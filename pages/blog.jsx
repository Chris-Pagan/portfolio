import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogPost from "../public/project_images/blog_post.png";
import { RiRadioButtonFill } from "react-icons/ri";

export const project2 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh]  bg-black/80 z-10" />
        <Image className="absolute z-1" fill style src={BlogPost} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white">
          <h2>Tech Blog</h2>
          <h3>Next.JS / Tailwind / Sanity</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Technology Blog</p>
          <h2>Overview</h2>
          <p>
            In order to continue learning, I created a blog using the Sanity.IO
            cms, as well as Typescript and NextJS. This is based off a tutorial,
            however when following it, I came received several errors with
            implementing Sanity, and used the documentation as well as searches
            on Google to fix my errors and understand what was going wrong.{" "}
          </p>
          <p>
            This is my most fun project to date, as I learned a good deal when
            building it, and really inspired me to keep going on this journey.
          </p>
          <a href="https://nextjs-blog-professional.vercel.app">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/Chris-Pagan/nextjs_blog">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:gird-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sanity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default project2;
