import React, { useRef } from "react";
import pizzaeleven from "../assets/pictures/pizzaeleven.webp";
import pizzatwo from "../assets/pictures/pizzatwo.webp";
import pizzathree from "../assets/pictures/pizzathree.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Content = () => {
  const contentRef = useRef(null);
  useGSAP(
    () => {
      // Select all cards
      let contentCards = gsap.utils.toArray(".contentCard");

      // Apply ScrollTrigger to each card
      contentCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 200, opacity: 0 }, // Start position and opacity
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "linear",
            scrollTrigger: {
              trigger: card, // Trigger the animation when this card enters the viewport
              start: "-20% bottom", // Animation starts when the top of the card is 80% of the viewport height
              toggleActions: "play none none reverse", // Play animation on scroll and reverse on scroll up
              // markers: true,
            },
          }
        );
        gsap.to(card.querySelector(".contentTitle"), {
          x: 100,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "Play none none reverse",
            scrub: true,
            markers: true,
          },
        });
      });
    },
    { scope: contentRef }
  );
  return (
    <section id="content" className="min-h-[50dvh]  bg-creamy_white text-[black] " ref={contentRef}>
      <div className="mx-[6%] xxl:mx-[18%]">
        <div className="h-full flex flex-col md:flex-row justify-center items-center mt-[-40%] md:mt-0 gap-12 md:gap-2 lg:gap-8 xxl:gap-20">
          <div className="flex flex-col gap-4 items-start relative contentCard md:mt-[-50%] xl:mt-[-30%] xxl:mt-[-25%]">
            <div className="relative flex flex-col justify-center items-center w-full ">
              <div className=" absolute w-60 md:w-40 lg:w-52 xl:w-72 h-60 xl:h-72 border-4 origin-center border-main_color z-[41]"></div>
              <img src={pizzaeleven} className="w-72 h-72 xl:w-96 xl:h-96 z-40 object-cover" />
            </div>
            <div className="flex flex-col gap-4 xl:gap-8">
              <h2 className="text-4xl xl:text-6xl xxl:text-8xl italic contentTitle">Inspiration</h2>
              <p className="font-poppins text-sm lg:text-lg xl:text-xl xxl:text-3xl leading-loose">
                &emsp;&emsp;At The Sapphire Slice, we believe that every pizza tells a story. Our
                creations are inspired by the timeless connection between food and people.
                Experience the art of authentic flavors and let us take you on a culinary journey
                that sparks innovation and creativity.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start relative contentCard md:mt-[-10%] xl:mt-[-5%]">
            <div className="relative flex flex-col justify-center items-center w-full ">
              <div className=" absolute w-60 md:w-40 lg:w-52 xl:w-72 h-60 xl:h-72 border-4 origin-center border-main_color z-[41]"></div>
              <img src={pizzatwo} className="w-72 h-72 xl:w-96 xl:h-96 z-40 object-cover" />
            </div>
            <div className="flex flex-col gap-4 xl:gap-8">
              <h2 className="text-4xl xl:text-6xl xxl:text-8xl italic contentTitle">Education</h2>
              <p className="font-poppins text-sm lg:text-lg xl:text-xl xxl:text-3xl leading-loose">
                &emsp;&emsp;Learn the craft behind the perfect slice. We share the secrets of
                artisan pizza-making, encouraging you to step into a world of culinary discovery.
                From dough kneading to topping perfection, embrace the joy of creating something
                extraordinary.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start relative contentCard md:mt-[-20%]">
            <div className="relative flex flex-col justify-center items-center w-full ">
              <div className=" absolute w-60 md:w-40 lg:w-52 xl:w-72 h-60 xl:h-72 border-4 origin-center border-main_color z-[41]"></div>
              <img src={pizzathree} className="w-72 h-72 xl:w-96 xl:h-96 z-40 object-cover" />
            </div>
            <div className="flex flex-col gap-4 xl:gap-8">
              <h2 className="text-4xl xl:text-6xl xxl:text-8xl italic contentTitle">Innovation</h2>
              <p className="font-poppins text-sm lg:text-lg xl:text-xl xxl:text-3xl leading-loose">
                &emsp;&emsp;Innovation lies at the heart of everything we do. By combining
                time-honored traditions with modern techniques, we create pizzas that honor the past
                while exploring bold new flavors. Discover how we redefine what it means to craft
                the perfect slice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
