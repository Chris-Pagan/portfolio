import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-slate-700">&#8725; &#8725; My path has never been normal</p>
          <p className="py-2 text-slate-700">
            This is some filler text as a placeholder to describe my background
          </p>
          <p className="py-2 text-slate-700">
            This is some filler text to describe what got me interested in
            programming and what I have worked on
          </p>
          <p className="py-2 text-slate-700 underline">Check out some of my projects!</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center
        p-4 hover:scale-105 ease-in duration-200">
          <Image
            src="/../public/assets/computer-setup.jpg"
            alt="/"
            width="640"
            height="426"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
