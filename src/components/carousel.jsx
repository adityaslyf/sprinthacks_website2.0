import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Fimage from "../assets/Theme/Bitcoin.png";
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";
import PropTypes from "prop-types";
// import BgImg from "../assets/Theme/Hufflepuff.svg";
// import sLogo from "../assets/Theme/Artificial Intelligence.png";
// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";

const Carousel = ({ data }) => {
  return (
    <>
      <main className="mt-10 flex justify-center items-center">
        <div className="swiper-button-prev text-white relative bg-gradient-left-to-right border-white/20 border-[1.62px] w-[100px] h-10 rounded-full flex justify-center items-center">
          {/* Custom Next Button */}
          <TiArrowLeft className="h-10 w-10 " />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          creativeEffect={{
            prev: {
              translate: [0, 800, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
          autoplay
          breakpoints={{
            // When window width is >= 640px
            600: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" flex justify-center items-center text-center text-white"
              >
                <div className="flex flex-col items-center justify-center w-auto h-[400px] md:h-[450px] my-10 rounded-3xl p-5">
                  <img
                    className="absolute h-[300px] md:h-[350px]  rounded-3xl object-cover  -z-10 text-[#C6A15A] shadow-custom"
                    src={item.Bg}
                    alt="F-image"
                  />
                  <div className="flex flex-col justify-center items-center px-10">
                    <img
                      className="h-[80px] w-[80px]"
                      src={item.logo}
                      alt="slogo"
                    />
                    <h1>
                      <span className="text-[32px] md:text-[48px] text-white font-californian">
                        {item.title}
                      </span>
                    </h1>
                    <p className="text-[16px] md:text-[24px] text-white font-californian">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiper-button-next mx-2 text-white relative bg-gradient-left-to-right border-white/20 border-[1.62px] w-[100px] h-10 rounded-full flex justify-center items-center">
          {/* Custom Next Button */}
          <TiArrowRight className="h-10 w-10 " />
        </div>
        <style>
          {`
            .swiper-button-next::after {
                content:none;
            }
            .swiper-button-prev::after {
              content: none; 
            }
          `}
        </style>
      </main>
    </>
  );
};
Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      BgImg: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Carousel;
