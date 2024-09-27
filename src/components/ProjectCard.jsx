import React from "react";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="flex flex-col rounded-xl bg-[#181818]">
      <div className="relative w-full overflow-hidden h-72 rounded-t-xl">
        <Image
          src={imgUrl}
          alt={title}
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="rounded-t-xl"
        />
      </div>
      <div className="px-4 py-6 mt-3 text-white rounded-b-xl">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
