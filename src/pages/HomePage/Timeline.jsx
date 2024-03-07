// import React from 'react';
import tbg from "../../assets/timeline/Screenshot 2024-03-06 010451.png";
import line from "../../assets/about/underline.png";
import one from "../../assets/timeline/pngwing 6.svg"
const Timeline = () => {
  return (
    <main className="bg-black justify-center flex items-center flex-col ">
      <h1 className="text-white font-californian md:text-[60px] text-[32px]">
        TimeLine
      </h1>
      <div className="flex justify-center items-center md:mt-[-15px] w-[60%] md:w-full ">
          {" "}
          <img className="md:ml-0" src={line} alt="line" />
        </div>
      <div className="flex flex-col justify-center items-center">
        <img src={tbg} alt="bg" className="p-5 w-full h-auto z-10 object-cover mix-blend-burn" />
      </div>
      <div className="absolute z-10">
        <img className=" mt-[-135px] ml-[-55px] h-[100px] w-[100px]" src={one} alt="one" />
      </div>
    </main>
  );
};

export default Timeline;
