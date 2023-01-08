import React from "react";
import Facebook from "../assests/Facebook Logo.png";
import Instagram from "../assests/Instagram Logo.png";
import Telegram from "../assests/Telegram Logo.png";
import FooterLogo from "../assests/footer-logo.png";

const Footer = () => {
  return (
    <div className="container flex flex-col justify-center pt-4">
      <h1 className="text-center font-roboto uppercase text-gray-800 text-sm tracking-tight font-semibold lg:text-lg">
        About Me
      </h1>
      <p className="mt-1 text-center font-poppins font-light text-gray-500 max-w-[85%] mx-auto text-sm md:max-w-[75%] lg:max-w-[55%] lg:text-sm">
        I have always been fascinated by toy collections and art. As a child, I
        spent hours organizing and displaying my toy figures and dolls,
        constantly seeking out new pieces to add to my collection.
      </p>
      <div className="container flex flex-col justify-center mt-4 lg:mt-8">
        <h2 className="text-center font-roboto text-sm font-semibold tracking-tight lg:text-lg">
          Follow Me On Social Media
        </h2>
        <div className="flex justify-center mt-1 lg:mt-2 max-w-[50%] mx-auto space-x-5">
          <a href="https://www.facebook.com/nazy.galoyan/" target="_blank">
            <img
              src={Facebook}
              alt="facebook-logo"
              className="w-6 h-6 lg:w-8 lg:h-8 hover:scale-105 transition-all duration-200 ease-in-out"
            />
          </a>
          <a href="https://www.instagram.com/nazzeeko/" target="_blank">
            <img
              src={Instagram}
              alt="instagram-logo"
              className="w-6 h-6 lg:w-8 lg:h-8 hover:scale-105 transition-all duration-200 ease-in-out "
            />
          </a>
          <a href="https://t.me/Nazy_Zyuka" target="_blank">
            <img
              src={Telegram}
              alt="telegram-logo"
              className="w-6 h-6 lg:w-8 lg:h-8 hover:scale-105 transition-all duration-200 ease-in-out"
            />
          </a>
        </div>
        <img
          src={FooterLogo}
          alt="footer-logo"
          className="mx-auto w-[200px] h-[200px] mt-5 lg:mt-8 lg:w-[300px] lg:h-[300px]"
        />
      </div>
    </div>
  );
};

export default Footer;
