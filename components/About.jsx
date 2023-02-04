import Image from "next/image";
import React from "react";
import Link from "next/link"


const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#8c88ea]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-slate-200">&quot;When something is such a creative medium as the web, the limits to it are our imagination.&quot; <cite><a className="underline" href="https://en.wikipedia.org/wiki/Tim_Berners-Lee">Tim Berners-Lee, inventor of the World Wide Web</a></cite></p>
          

          <p className="py-3 text-slate-200">
          In a nutshell, I am a designer with a passion for creating fun, interactive experiences. I enjoy puzzles and problem solving, as well as bringing a creative element to the mundane. I love learning for the sake of learning, and knowing how things work allows me to appreciate the magic that is inherent in them all the more deeply.
          </p>
          <p className="py-3 text-slate-200">
            In my professional life, I&apos;ve spent the last twenty years working in various positions in the call center world. While I learned quite a bit, and met some amazing people, I always knew there was something missing. I had no chance to flex the creative muscles and pursue my passions. During the pandemic, it really hit home that life is too short to not chase a dream. 
          </p>
          <p className="py-3 text-slate-200">&quot;It’s still magic even if you know how it’s done.&quot; Terry Pratchett <cite>A Hat Full of Sky</cite></p>
          <Link href='/#projects'>
          <p className="py-2 text-slate-200">Check out some of my projects!</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-200 rounded-xl flex items-center justify-center
        p-4 hover:scale-105 ease-in duration-200">
          <Image
            src={require("../public/computer-setup.jpg")}
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
