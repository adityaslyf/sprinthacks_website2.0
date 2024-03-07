// import React from 'react'
import line from "../../assets/about/underline.png";
import Carousel from "../../components/carousel"
import lower from "../../assets/Theme/horizons_village.png"
import AIBgImg from "../../assets/Theme/Hufflepuff.svg"
import AIlogo from "../../assets/Theme/Artificial Intelligence.png"
import ARlogo from "../../assets/Theme/Augmented Reality.svg"
// import img from "../../assets/Theme/Hufflepuff.svg"
const Themes = () => {
  const data = [
    {
      title: "AI",
      description: "AI Content",
      Bg: AIBgImg,
      logo: AIlogo
    },
    {
      title: "AR/VR",
      description: "ARVR content",
      Bg: AIBgImg,
      logo: ARlogo
    },
    {
      title: "Fintech",
      description: "Fintech content",
      Bg: AIBgImg,
      logo: AIlogo
    },
    {
      title: "Fintech",
      description: "Fintech content",
      Bg: AIBgImg,
      logo: AIlogo
    },
    {
      title: "Fintech",
      description: "Fintech content",
      Bg: AIBgImg,
      logo: AIlogo
    },
    // Add more objects as needed
  ];
  return (
    <main id="tracks" className="bg-gradient-custom">
      {/* <img src={img} alt="bgimg" /> */}
      {/* heading div starts */}
      <h1 className="flex justify-center text-[32px] md:text-[56px] xl:text-[88px] text-white font-californian">
        Theme
      </h1>
      <div className="flex justify-center md:mt-[-15px] w-[60%] md:w-full">
        {" "}
        <img className="ml-[65%] md:ml-0" src={line} alt="line" />
      </div>
      {/* heading div ends  */}

      {/* Carousel div starts */}
      <div>
        <Carousel data={data}/>
      </div>
      {/* Carousel div ends */}
      <img className="xl:w-full" src={lower} alt="lower image" />
    </main>
  );
};

export default Themes;
