import React from "react";
import pizzaLogo from "../assets/logo/pizza_logo_no_bg_resized.png";
import pizzaseven from "../assets/pictures/pizzaseven.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Header = ({ headerRef, heroRef }) => {
  useGSAP(
    () => {
      //header
      let timeline = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          trigger: heroRef.current,
          toggleActions: "play none none reverse",
        },
      });

      timeline.to(".hideButtonOnScroll", { opacity: 0, display: "none", ease: "none" });
      timeline.to(".hideImageHeader", { height: 0, width: 0 }, "<");
      timeline.to(".titleHeader", { opacity: 1 }, "<+0.5");
      timeline.to(headerRef.current, { backgroundColor: "#213555", duration: 0 }, "0");
    },
    { scope: [headerRef, heroRef] }
  );
  return (
    <header
      className="fixed w-full  flex flex-col justify-center items-center bg-none z-50"
      ref={headerRef}
    >
      <img src={pizzaLogo} className="hideImageHeader h-[100px] mt-2" />
      <p className="text-sm lg:text-lg border-opacity-20 border-b-text_color border-b-[1px] mt-2 ">
        ESTD 2025
      </p>

      <div className="w-fit items-center justify-center  h-12 relative">
        <div className="flex-col">
          <h1 className="titleHeader text-2xl text-center opacity-0 mt-2 lg:text-xl">
            The Sapphire Slice
          </h1>
        </div>
        <div className="flex justify-center w-full absolute z-20 top-0">
          <button className="hideButtonOnScroll  h-10 lg:h-full bg-secondary_color px-10 self-center mt-1 hover:bg-creamy_white hover:text-main_color">
            ORDER NOW
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
