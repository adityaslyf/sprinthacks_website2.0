// import React from 'react'
import bg from "../../assets/sponsors/ashibh.webp";
import line from "../../assets/about/underline.png";
import line2 from "../../assets/sponsors/pngwing 16.svg";
import line3 from "../../assets/sponsors/pngwing 16 (1).svg";
import PropTypes from "prop-types";

const Sponsors = ({ data }) => {
  return (
    <main id="sponsors" className="bg-black overflow-hidden mt-8">
      <h1 className="text-[32px] md:text-[56px] xl:text-[88px] flex justify-center items-center text-white font-californian  ">
        {" "}
        Sponsors
      </h1>
      <div className="flex justify-center items-center ml-[20%] md:ml-0 md:mt-[-15px] w-[60%] md:w-full mb-10 md:mb-0">
        {" "}
        <img className=" md:ml-0" src={line} alt="line" />
      </div>
      <div className=" opacity-[0.3] bg-black">
        <img
          src={bg}
          alt="bg"
          className="absolute bg-black object-contain  w-full -z-10"
        />
      </div>
      <div className="relative z-20 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center md:mt-[-15px] md:w-full mb-10 md:mb-0">
          {" "}
          <img
            className="ml-[30px] md:ml-[60px] md:mt-10 h-10 w-[300px] object-cover md:w-full md:h-[80px]"
            src={line2}
            alt="line"
          />
        </div>
        <div>
          <h1 className="text-[32px] md:text-[42px] text-[#C6A15A] font-californian">
            Title Sponsors
          </h1>
        </div>
        <div className="flex flex-row my-10">
          {data.map((item, index) => (
            <div
              className="flex flex-row items-center mx-4 bg-white/10 p-3 rounded-lg"
              key={index}
            >
              {/* You can add additional styling to the container div if needed */}
              <img src={item.logo} alt="logo" />
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-[32px] md:text-[42px] text-[#A4A4A4] font-californian">
            Platinum
          </h1>
        </div>
        <div className="flex flex-row my-10">
          {data.map((item, index) => (
            <div
              className="flex flex-row items-center mx-4 bg-white/10 p-3 rounded-lg"
              key={index}
            >
              {/* You can add additional styling to the container div if needed */}
              <img src={item.logo} alt="logo" />
            </div>
          ))}
        </div>{" "}
        <div>
          <h1 className="text-[32px] md:text-[42px] text-[#C6A15A] font-californian">Gold</h1>
        </div>
        <div className="flex flex-row my-10">
          {data.map((item, index) => (
            <div
              className="flex flex-row items-center mx-4 bg-white/10 p-3 rounded-lg"
              key={index}
            >
              {/* You can add additional styling to the container div if needed */}
              <img src={item.logo} alt="logo" />
            </div>
          ))}
        </div>{" "}
        <div>
          <h1 className="text-[32px] md:text-[42px] text-[#D5CAC9] font-californian">
            Silver
          </h1>
        </div>
        <div className="flex flex-row my-10">
          {data.map((item, index) => (
            <div
              className="flex flex-row items-center mx-4 bg-white/10 p-3 rounded-lg"
              key={index}
            >
              {/* You can add additional styling to the container div if needed */}
              <img src={item.logo} alt="logo" />
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-[32px] md:text-[42px] text-[#F58B6B] font-californian">
            Bronze
          </h1>
        </div>
        <div className="flex flex-row my-10">
          {data.map((item, index) => (
            <div
              className="flex flex-row items-center mx-4 bg-white/10 p-3 rounded-lg"
              key={index}
            >
              {/* You can add additional styling to the container div if needed */}
              <img src={item.logo} alt="logo" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center md:mt-[-15px] md:w-full mb-10 md:mb-0">
          {" "}
          <img
            className="ml-[30px] md:ml-[60px] md:mt-10 h-10 w-[300px] object-cover md:w-full md:h-[80px]"
            src={line3}
            alt="line"
          />
        </div>
      </div>
    </main>
  );
};

Sponsors.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sponsors;
