import React, { useRef } from "react";
import pizzatwelve from "../assets/pictures/pizzatwelve.webp";
import pizzaeight from "../assets/pictures/pizzaeight.webp";
import pizzasix from "../assets/pictures/pizzasix.webp";
import logo from "../assets/logo/pizza_logo_no_bg_resized.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  useGSAP(
    () => {
      let footerPicture = gsap.utils.toArray(".footerPicture");

      footerPicture.forEach((item, index) => {
        console.log(item);
        gsap.fromTo(
          item,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "linear",
            scrollTrigger: {
              trigger: item,
              //  markers: true,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    {
      scope: footerRef,
    }
  );
  return (
    <section
      className="min-h-[80dvh] xxl:min-h-[60dvh] bg-main_color flex flex-col px-[5%] xxl:px-[15%] "
      ref={footerRef}
    >
      <div
        className="mt-[-30%] md:mt-[-20%] lg:mt-[-5%] xl:mt-[-10%] lg:z-10 flex flex-col gap-4 md:flex-row"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}
      >
        <div className="md:w-1/3 footerPicture">
          <div className="relative ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-main_color z-30 w-5/6 h-5/6 md:h-80 xl:h-96"></div>
            <img src={pizzatwelve} className="h-96 xl:h-[450px] object-cover w-full" />
          </div>
        </div>
        <div className=" md:w-1/3 md:mt-[25%] xl:mt-[15%] footerPicture">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-main_color z-30 w-5/6 h-5/6 md:h-80 xl:h-[550px]"></div>
            <img src={pizzaeight} className="h-96 xl:h-[650px] object-cover w-full" />
          </div>
        </div>
        <div className=" md:w-1/3 md:mt-[10%] xl:mt-[8%] footerPicture">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-main_color z-30 w-5/6 h-5/6 md:h-80 xl:h-[400px]"></div>
            <img src={pizzasix} className="h-96 xl:h-[500px] object-cover w-full" />
          </div>
        </div>
      </div>
      <div className="mt-16 md:mx-0 mx-[5%] flex flex-col justify-start items-center gap-8 md:gap-12 mb-10">
        <img src={logo} className="object-cover w-32 md:w-36 lg:w-44" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center">The Sapphire Slice</h2>
        <div className="flex flex-col justify-evenly  items-center w-full h-36 md:h-12 md:grid md:grid-cols-12  xxl:max-w-[80%] ">
          <div className="h-full flex items-center justify-center w-full border border-white border-opacity-20 md:col-span-5">
            <p className="tracking-tighter font-poppins md:text-xl lg:text-2xl">
              © 2025 TheSapphireSlice
            </p>
          </div>
          <div className="h-full flex items-center justify-center w-full border border-white border-opacity-20 md:col-span-3">
            <p className="tracking-tighter font-poppins md:text-xl lg:text-2xl">abraham_pn</p>
          </div>
          <div className="h-full flex items-center justify-center w-full border border-white border-opacity-20 md:col-span-4 hover:bg-text_color hover:text-main_color">
            <a
              href="https://abrahamnaiborhu.me"
              className="tracking-tighter font-poppins md:text-xl lg:text-2xl "
            >
              abrahamnaiborhu.me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
