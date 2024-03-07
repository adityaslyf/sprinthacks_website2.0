import Navbar from "../../components/Navbar";
import bg from "../../assets/night-falls-spooky-gothic-skyscraper-generated-by-ai 1.svg";
import layer from "../../assets/Dark_shade.svg";
// import text from "../../assets/SprintHacks 2.0.png";
import snitch from "../../assets/pngwing.svg";
import button from "../../assets/Titile_Bottom.svg";
// import Countdown from "react-countdown";
import CountDown from "../../components/countdown";
import rectangle from "../../assets/Rectangle 274.svg";
import start from "../../assets/starting_in.svg"
const Hero = () => {
  return (
    <>
      <main id="/" className="h-screen md:h-full xl:w-screen w-full bg-gradient-custom-gradient overflow-hidden">
        <div className="absolute">
          <Navbar />
          <img className="object-cover h-screen md:h-screen md:w-full xl:w-screen" src={bg} alt="bg" />
          <img className="absolute top-0 object-cover h-screen md:h-full xl:w-screen" src={layer} alt="layer" />
        </div>
        <div className="relative flex flex-col justify-center items-center h-screen xl:h-full xl:mt-[150px]">
          <img className="-z-1 ml-[200px] md:ml-[650px] xl:ml-[950px] xl:mb-0 mb-[50px] w-[200px] md:w-[450px] xl:w-[550px]" src={snitch} alt="gs" />
          <h1 className="flex justify-center items-center font-harry text-[50px] md:text-[90px] lg:text-[120px] xl:text-[200px] bg-gradient-to-r from-white to-teal-500 text-transparent bg-clip-text tracking-wider mt-[-100px] mb-4">
            SprintHacks2.0
          </h1>
          <button onClick={() => console.log("button clicked")}>
            <img
              className="z-10 ml-[50px] md:ml-[350px] xl:ml-[550px] xl:w-[750px] mt-[-10px] md:mt-[-40px] lg:mt-[-60px] w-[200px] md:w-[500px] lg:w-[650px]"
              src={button}
              alt="btn"
            />
            <h1 className="font-harry z-20 text-black ml-[130px] md:ml-[600px] xl:ml-[850px] mt-[-20px] md:mt-[-60px] xl:mt-[-75px] text-[15px] md:text-[38px] xl:text-[52px]">
              Apply with Devfolio
            </h1>
          </button>
        </div>
        <div className="absolute z-10 md:h-[100px] mt-[-50px] md:mt-[20px] lg:mt-[40px] xl:mt-[60px] w-full">
          <div className="flex justify-center ">
            <img className="z-20 w-[150px] md:w-[400px]" src={start} alt="simage" />
          </div>
          <div className="absolute md:left-[15%] lg:hidden mt-[-15px] md:mt-[-35px] xl:left-[27%]">
            <img className="md:h-[150px]" src={rectangle} alt="box" />
          </div>
          <CountDown />
        </div>
        {/* countdownn div  */}
      </main>
    </>
  );
};

export default Hero;
