import React from "react";
import pizzaseven from "../assets/pictures/pizzaseven.webp";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ heroRef }) => {
  useGSAP(
    () => {
      //heroConcept
      let timelineHero = gsap.timeline({});
      timelineHero.from(heroRef.current.querySelectorAll(".heroContent"), {
        y: 200,
        duration: 1,
        opacity: 0,
        stagger: 0.1,
      });
      timelineHero.fromTo(
        heroRef.current.querySelector(".heroConcept"),
        { x: -200, opacity: 0 },

        {
          x: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.1,
        },
        "=-0.5"
      );

      timelineHero.fromTo(
        heroRef.current.querySelector(".heroConcept"),
        { x: 0 },
        {
          x: 200,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );

      let timelineDetails = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current.querySelector(".heroDetailsTrigger"),
          start: "top 60%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });
      timelineDetails.fromTo(
        heroRef.current.querySelectorAll(".heroDetails"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
      );
    },
    {
      scope: heroRef,
    }
  );
  return (
    <section
      id="hero"
      className="min-h-screen bg-main_color relative overflow-hidden "
      ref={heroRef}
    >
      <div className="w-full h-full absolute z-0">
        <img
          src={pizzaseven}
          className="object-cover h-full w-full opacity-20"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black)",
            maskMode: "alpha",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="relative z-10 min-h-[40rem]  flex flex-col px-10 py-10 md:mt-10 lg:mt-20 xl:mt-32">
        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-8 xxl:gap-10">
          <h1 className="heroContent text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold  text-center uppercase mt-14">
            The Sapphire Slice
          </h1>
          <p className="text-center w-full heroConcept md:text-xl lg:text-2xl xxl:text-3xl">
            <span className="opacity-60">a concept by&nbsp;</span>
            <i className="uppercase ">abraham_pn</i>
          </p>
          <div className="w-full border-b-text_color border heroContent md:w-[70%] xl:w-[50%]"></div>
          <p className="text-2xl md:text-4xl lg:text-5xl xxl:text-6xl w-full text-center heroContent">
            <i>Polished Flavors, Timeless Craft</i>
          </p>
        </div>
      </div>
      <div className="min-h-[45rem]  flex flex-col justify-start items-start gap-5 lg:gap-10 xl:gap-20 mx-5 lg:mx-14 xl:mx-[10%] xxl:mx-[20%] heroDetailsTrigger">
        <h2 className="italic text-2xl md:text-4xl lg:text-5xl xxl:text-6xl font-extralight heroDetails ">
          SapphireSlice
        </h2>
        <div className="flex flex-col gap-5 lg:gap-8 lg:flex-row">
          <p className="text-sm  md:text-lg xxl:text-xl italic opacity-60 font-poppins leading-loose heroDetails">
            &emsp;&emsp; SapphireSlice: A curated masterpiece of flavors, our collection brings
            together the finest ingredients, timeless recipes, and artisan craftsmanship.
          </p>
          <p className="text-sm md:text-lg xxl:text-xl italic opacity-60 font-poppins leading-loose heroDetails">
            &emsp;&emsp; Each pizza is a celebration of authenticity, where tradition meets
            innovation to create a dining experience as rare and precious as a sapphire. From
            classic margheritas to bold gourmet creations, every slice is designed to delight,
            satisfy, and leave a lasting impression. Discover your next favorite from The Sapphire
            Slice Collection — where every bite is a gem.
          </p>
        </div>
        <div className="flex flex-row justify-start items-start gap-3 md:gap-6 xxl:gap-12 heroDetails">
          <div className="md:scale-150 lg:scale-[2] xxl:scale-[3]">
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
              <div>
                <FaLinkedinIn />
              </div>
            </IconContext.Provider>
          </div>
          <div className="md:scale-150 lg:scale-[2] xxl:scale-[3]">
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
              <div>
                <IoLogoInstagram />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
