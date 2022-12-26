import React from "react";
import Image from "next/image";

const MediumnCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative w-80 h-80 border-2 rounded-xl">
        <Image src={img} alt="" fill className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumnCard;
