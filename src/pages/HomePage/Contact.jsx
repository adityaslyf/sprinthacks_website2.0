// import React from 'react'
import line from "../../assets/about/underline.png";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import clouds from "../../assets/contact/clouds.svg";
import { FaHeart } from "react-icons/fa";
import owl from "../../assets/contact/pngwing 25.svg"
const ContactUs = () => {
  return (
    <main id="contact" className="bg-black">
      {/* Header div starts  */}
      <div className="flex justify-center items-center flex-col pt-10">
        <h1 className="text-white font-harry text-[40px] md:text-[70px] xl:text-[90px] leading-10 tracking-widest md:tracking-wider my-2 ">
          Contact Us
        </h1>
        <div className="flex justify-center items-center md:mt-[0px] w-[50%] md:w-full">
          {" "}
          <img className="flex justify-center items-center md:ml-0" src={line} alt="line" />
        </div>
      </div>
      {/* header div ends   */}
      {/* social links starts  */}
      <div className="flex flex-row justify-center items-center text-[#D7BC9A] mt-5 ">
        <FaDiscord  className="h-8 w-8 mx-5 md:mx-10 xl:w-10 xl:h-10" />
        <FaXTwitter className="h-8 w-8 mx-5 md:mx-10 xl:w-10 xl:h-10" />
        <FaYoutube className="h-8 w-8 mx-5 md:mx-10 xl:w-10 xl:h-10" />
        <FaInstagram className="h-8 w-8 mx-5 md:mx-10 xl:w-10 xl:h-10" />
      </div>
      {/* social links ends  */}
      <div className="flex justify-center items-center text-center mt-5">
        <p className="text-[#D7BC9A] font-californian text-[18px] md:text-[24px] xl:text-[32px] leading-[48px] my-10">
          KIET GROUP OF INSTITUTIONS <br />
          Delhi - NCR , Meerut Rd, Ghaziabad
          <br />
          Uttar Pradesh,201206
        </p>
      </div>
      <img src={clouds} alt="clouds" className="mt-[-50px] md:mt-[-200px]" />
      <img className="hidden md:flex ml-[65%] mt-[-200px] md:mt-[-600px] xl:mt-[-805px] h-[300px] md:h-[600px] xl:h-[800px]" src={owl} alt="owl" />
      <div className="bg-black/70 relative font-californian mt-[-100px] h-[100px] xl:h-[110px] flex justify-center items-center text-white">
        {" "}
        <h3 className="flex items-center xl:text-[32px]">
          MADE WITH
          <span className="text-red-500 mx-1">
            <FaHeart />
          </span>
          GDSC KIET
        </h3>
      </div>
    </main>
  );
};

export default ContactUs;
