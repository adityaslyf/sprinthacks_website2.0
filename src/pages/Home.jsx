// import React from 'react'

import Sponsors from "./HomePage/Sponsors";
import sLogo from "../assets/sponsors/Solana Dark 1.png";
// import CountDown from "../components/countdown";
import Hero from "./HomePage/Hero";
import AboutUs from "./HomePage/About";
import ContactUs from "./HomePage/Contact";
import Themes from "./HomePage/Theme";
import Prizes from "./HomePage/Prizes";
import Timeline from "../components/timeline/timeline";
import Faq from "./HomePage/Faq";


const Home = () => {
  const data = [
    {
      name: "Solana",
      logo: sLogo,
    },
    {
      name: "Solana",
      logo: sLogo,
    },
    {
      name: "Solana",
      logo: sLogo,
    },
  ];
  return (
    <div>
      {/* <CountDown/> */}
      <Hero />
      <AboutUs />
      <Themes />
      <Prizes />

      <Timeline />

      <Faq />
      <Sponsors data={data} />
      <ContactUs />
    </div>
  );
};

export default Home;
