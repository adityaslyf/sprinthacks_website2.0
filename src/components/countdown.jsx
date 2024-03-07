import { useEffect, useState } from "react";
// import "./styles.css";w

export default function CountDown() {
  const totalSeconds = 40 * 24 * 60 * 60; // 40 days in seconds
  const [time, setTime] = useState(totalSeconds);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        } else return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(time / (24 * 60 * 60));
  const remainingHours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const remainingMinutes = Math.floor((time % (60 * 60)) / 60);
  const remainingSeconds = time % 60;

  return (
    <div>
      <p className="text-white z-20 flex justify-center items-center font-californian mt-1 md:mt-8 text-[12px] md:text-[32px] lg:text-[34px] xl:text-[38px]">
        {days} Days : {`${remainingHours}`.padStart(2, 0)} Hours :{" "}
        {`${remainingMinutes}`.padStart(2, 0)} Minutes :{" "}
        {`${remainingSeconds}`.padStart(2, 0)} Seconds
      </p>
    </div>
  );
}
