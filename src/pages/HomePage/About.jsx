// import React from 'react'
import bg from "../../assets/about/bbgg 1.png";
import line from "../../assets/about/underline.png";
const AboutUs = () => {
  return (
    <main id="about" className="bg-black h-full mt-[30px] md:mt-[290px] xl:mt-[300px]">
      <div className="flex justify-center flex-col ">
        <h1 className="xl:text-[88px] lg:text-[65px] md:text-[60px] text-[32px] text-center text-white font-californian mt-10">
          ABOUT US
        </h1>
        <div className="flex justify-center items-center md:mt-[-15px] w-[60%] md:w-full mb-10">
          {" "}
          <img className="ml-[65%] md:ml-0" src={line} alt="line" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-around mt-[20px]">
          {/* Image div starts */}

          <div className="relative p-6 mr-3 md:hidden flex">
            <img className="object-contain " src={bg} />
            <div className=" absolute inset-0 bg-gradient-radial"></div>
          </div>
          {/* Image div ends  */}

          {/* Content div  starts*/}

          <div className=" p-2 md:w-1/2 flex justify-center items-center ">
            <p className="xl:px-4 p-1 text-white md:leading-[56px] leading-tight font-californian md:text-[28px] text-[18px]">
              SprintHacks is a 18 hour offline hackathon organized by Developers
              Student Circuit with endless creativity. Students are challenged
              to further what they know by creating projects following their
              passions. Spending time on projects outside the classroom is the
              best way to not only learn what you love, but also find new
              interests.
            </p>
          </div>
          {/* Content div ends */}
          {/* Image div starts */}
          <div className="relative hidden md:flex w-1/2 p-6 mr-3 bg-gradient-radial">
            <img className="object-contain " src={bg} />
            <div className=" absolute inset-0 bg-gradient-radial"></div>
          </div>
          {/* Image div ends  */}
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
