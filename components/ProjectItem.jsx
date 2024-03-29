import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  projectFramework,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-200 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={backgroundImg}
        alt="/"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{projectFramework}</p>
        <Link href={projectUrl}>
          <button
            style={{ background: "white" }}
            className="text-center py-3 px-6 relative left-2 rounded-lg text-gray-700 font-bold text-lg cursor-pointer"
          >
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
