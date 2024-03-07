// import stars2 from "../../assets/prizes/stars2-1.svg";
// import bag from "../../assets/prizes/bag.svg";
import trophy from "../../assets/prizes/trophy.png";
import line from "../../assets/about/underline.png";
import stars from "../../assets/prizes/stars2-1.svg";
import rectangle from "../../assets/prizes/Rectangle282.svg";
const Prizes = () => {
  return (
    <>
      <main id="prizes" className="bg-black h-[350px] md:h-screen overflow-hidden ">
        <section
          style={{
            backgroundImage: stars,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          className=""
        >
          <div className="flex flex-col justify-center items-center z-10">
            <h1 className="xl:text-[88px] md:text-[60px] text-white text-[32px] font-californian">
              Prizes
            </h1>
            <div className="flex justify-center items-center md:mt-[-15px] w-[60%] md:w-full ">
              {" "}
              <img className="md:ml-0 " src={line} alt="line" />
            </div>
          </div>
          <div className=" bg-transparent z-10 opacity-1 flex flex-col justify-between items-center h-[300px] md:h-[500px] mt-5">
            <div className="flex flex-row justify-around">
              <img className="h-[200px] md:h-[400px] xl:h-[600px]" src={trophy} alt="t" />
              <div className="flex flex-col w-1/2 md:w-full  ml-[-50px]  items-center justify-center">
                <div className="px-5 w-[150px] md:w-[300px]">
                  <h1 className="text-[#C6A15A] font-californian text-[20px] md:text-[48px] xl:text-[74px] leading-tight ">
                    Winner
                  </h1>
                  <h1 className="text-[#C6A15A] font-californian text-[20px] md:text-[48px] xl:text-[74px] leading-tight">
                    ₹70000
                  </h1>
                </div>
                <div className="flex gap-0 md:gap-2">
                  <div className="w-[100px] md:w-[300px] xl:w-[400px] text-[42px] p-4">
                    <h3 className="text-[#C6A15A] font-californian text-[18px] md:text-[50xp] xl:text-[68px] leading-tight">
                      Second
                    </h3>
                    <h3 className="text-[#C6A15A] font-californian text-[18px] md:text-[50xp] xl:text-[68px] leading-tight">
                      ₹ 50000
                    </h3>
                  </div>
                  <div className="w-[100px] md:w-[200px] xl:w-[400px] text-[42px] p-4">
                    <h3 className="text-[#C6A15A] font-californian text-[18px] md:text-[40xp] xl:text-[68px] leading-tight">
                      Third
                    </h3>
                    <h3 className="text-[#C6A15A] font-californian text-[18px] md:text-[40xp] xl:text-[68px] leading-tight">
                      ₹ 30000
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="mt-[-450px] md:mt-[-700px] lg:mt-[-750px] xl:mt-[-820px] xl:ml-[250px] xl:mb-4 -z-9 opacity-0.1 mb-10 h-screen"
            src={rectangle}
            alt="img"
          />
        </section>
      </main>
    </>
  );
};

export default Prizes;
