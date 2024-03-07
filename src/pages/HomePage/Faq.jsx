// import FaqComp from "./FaqComp";
import horizon from "../../assets/faq/horizons.png";
import wizard from "../../assets/faq/wizard.png";
import stars2 from "../../assets/faq/stars2.svg";
import line from "../../assets/about/underline.png";
import FaqList from "./FaqComp";

const Faq = () => {
  return (
    <div id="faqs" className="bg-black justify-center h-screen md:h-full">
      <div className="w-full h-full relative [background:linear-gradient(1.5deg,_#396f71,_rgba(0,_0,_0,_0))] overflow-hidden flex flex-col items-center justify-center tracking-[normal]">
        <header className="flex flex-col items-center justify-start pt-[42px] pr-[90px] pl-[50px] box-border relative max-w-full text-center text-[100px] text-snoww font-bluu-next ">
          <img
            className="hidden md:flex w-[450px] absolute justify-end !m-[0] right-[-180px] bottom-[50px] object-cover -z-1"
            loading="lazy"
            alt=""
            src={wizard}
          />
          <div className="w-full flex flex-row mt-[400px] md:mt-[100px] items-start justify-center">
            <h1 className="m-0 text-[45px] md:text-[60px] xl:text-[88px] text-white font-californian relative  font-normal font-inheritt flex items-center justify-center md:justify-between mb-[100px]">
              {`FAQ’s`}
            </h1>
          </div>
          <div className="flex justify-center mt-[-70px] w-[70%] md:w-full">
            {" "}
            <img className=" md:ml-0" src={line} alt="line" />
          </div>
          <img
            className="w-full z-[4] object-contain absolute left-[0px] top-[27px] [transform:scale(1.049)]"
            alt=""
            src={stars2}
          />
          <FaqList />
        </header>
        <img
          className="w-full h-[400px] mt-[180px] md:mt-0 md:h-[400px] absolute md:bottom-[0] object-cover z-[1]"
          alt=""
          src={horizon}
        />
      </div>
    </div>
  );
};

export default Faq;
