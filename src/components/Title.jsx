import React, { useRef } from "react";
import pizzafive from "../assets/pictures/pizzafive.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Title = () => {
  const sectionTitleRef = useRef(null);
  useGSAP(
    () => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "10% 80%",
          //          markers: true,
          toggleActions: "play none none reverse",
        },
      });
      timeline.fromTo(
        sectionTitleRef.current.querySelectorAll("span"),
        { y: 200, opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
        }
      );
      timeline.fromTo(
        sectionTitleRef.current.querySelectorAll(".titleDetail"),
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
        },
        "<+0.5"
      );
      timeline.fromTo(
        sectionTitleRef.current.querySelectorAll(".titleJargon"),
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 0.7,
          duration: 1,
          stagger: 0.1,
        },
        "<"
      );
      console.log(sectionTitleRef.current.querySelectorAll("span"));
    },
    { scope: sectionTitleRef }
  );
  return (
    <section
      className="min-h-[110dvh] xxl:min-h-[90dvh] bg-creamy_white text-main_color w-full flex flex-col justify-start pt-[15%] xl:pt-[10%] items-center gap-5 xl:gap-10 md:gap-10 xxl:gap-20  overflow-hidden relative"
      ref={sectionTitleRef}
    >
      <div className="absolute z-0 inset-0">
        {/* Ensure image fully covers the parent */}
        <img
          src={pizzafive}
          className="w-full h-full object-cover opacity-20"
          alt="Pizza background"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black)",
            maskMode: "alpha",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="h-full w-full">
        <div className="flex flex-col  gap-4mx-[5%] md:mx-[10%] xl:mx-[15%] xxl:mx-[25%] z-10 md:relative">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-9xl font-bold  text-center md:text-center leading-tight"
            style={{ clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)" }}
          >
            <span className="md:ms-[20%] inline-block ">DISCOVER</span>
            <br />
            <span className="md:ms-[-30%] inline-block ">THE ART</span>
            <br />
            <span className="inline-block ">OF PIZZA</span>
          </h1>
          <h2 className="titleJargon text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-6xl lg:text-left  text-center italic opacity-80 md:text-center  md:leading-none md:mt-1  md:absolute md:origin-top-left md:top-[30%] md:left-[55%] xl:left-[58%] ">
            Polished Flavour, Timeless Craft
          </h2>
        </div>
      </div>

      <div className="titleDetail text-center lg:text-right lg:mx-[10%] mx-[5%] md:mx-[10%] xl:mx-[15%] xxl:mx-[30%] text-sm md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl flex flex-col gap-4 md:gap-6 xl:gap-10 xxl:gap-16 leading-relaxed md:leading-loose md:font-poppins z-10">
        <p className="lg:w-[80%] xxl:w-[90%] lg:self-end">
          At <strong>The Sapphire Slice</strong>, every pizza is a masterpiece, crafted with passion
          and precision. From the finest ingredients to time-honored recipes, we bring you an
          authentic culinary experience that blends tradition with innovation.
        </p>
        <p className="lg:w-[80%] xxl:w-[90%]  lg:self-end">
          Whether you're savoring a classic margherita or exploring bold gourmet creations, our
          pizzas are designed to delight and inspire. Experience the perfect harmony of flavors in
          every bite.
        </p>
      </div>
    </section>
  );
};

export default Title;
