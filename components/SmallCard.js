import React from "react";
import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-100 cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-16 h-16 rounded-lg">
        <Image src={img} alt="" fill className="rounded-lg h-100" />
      </div>
      <div>
        <h2 className="font-medium">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
