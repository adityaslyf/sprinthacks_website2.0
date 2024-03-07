// import React from 'react'
import logo from "../assets/navbar/GDSC_logo (1).svg";
const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Prizes",
      link: "#prizes",
    },
    {
      title: "Tracks",
      link: "#tracks",
    },
    {
      title: "FAQS",
      link: "#faqs",
    },
    {
      title: "Sponsors",
      link: "#sponsors",
    },
    {
      title: "Contact Us",
      link: "#contact",
    },
  ];
  return (
    <nav className="z-10 relative">
      <div className="realtive flex justify-start md:justify-around items-center bg-black">
        <img className="w-[200px] md:w-[300px]" src={logo} alt="logo" />
        {NavLinks.map((item, index) => {
          return (
            <a key={index} href={item.link}>
              <h1
                className="font-harry hidden md:flex text-[32px] text-white"
                key={index}
              >
                {item.title}
              </h1>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
