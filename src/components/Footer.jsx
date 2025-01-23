import React from "react";
import pizzaone from "../assets/pictures/pizzaone.jpg"; // Example background image
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo/pizza_logo_no_bg_resized.png";

const Footer = () => {
  return (
    <section className="min-h-[80dvh] w-full bg-cover bg-center flex flex-col justify-evenly bg-creamy_white !text-main_color relative ">
      <div className="absolute z-0 inset-0">
        {/* Ensure image fully covers the parent */}
        <img
          src={pizzaone}
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
      {/* Middle Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full  py-12 bg-black bg-opacity-30 md:gap-10 px-[5%]  xxl:px-[10%]">
        {/* Column 1: Business Info */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl  xxl:text-6xl font-semibold uppercase">
            Our Location
          </h2>
          <p className="lg:text-xl xl:text-2xl xxl:text-4xl ">123 Pizza Street</p>
          <p className="lg:text-xl xl:text-2xl xxl:text-4xl">New York, NY 10001</p>
          <p className="lg:text-xl xl:text-2xl xxl:text-4xl">Phone: +1 234 567 890</p>
        </div>

        {/* Column 2: Branding */}
        <div className="flex flex-col items-center gap-4 xxl:gap-8">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl italic">
            The Sapphire Slice
          </h2>
          <p className="text-sm  lg:text-xl xl:text-2xl xxl:text-4xl opacity-80 text-center ">
            Experience the art of pizza, crafted with passion and precision.
          </p>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl lg:text-3xl  xl:text-4xl xxl:text-6xl font-semibold uppercase">
            Follow Us
          </h2>
          <div className="flex gap-4 xxl:gap-20">
            <a
              href="https://instagram.com"
              className="p-3 bg-creamy_white rounded-full text-black hover:bg-main_color transition"
            >
              <div className="lg:scale-[2] xxl:scale-[4]">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://facebook.com"
              className="p-3 bg-creamy_white rounded-full text-black hover:bg-main_color transition"
            >
              <div className="lg:scale-[2] xxl:scale-[4]">
                <FaFacebookF />
              </div>
            </a>
            <a
              href="https://twitter.com"
              className="p-3 bg-creamy_white rounded-full text-black hover:bg-main_color transition"
            >
              <div className="lg:scale-[2] xxl:scale-[4]">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full py-6 bg-black bg-opacity-70 text-center ">
        <p className="tracking-tight font-poppins text-sm md:text-base lg:text-xl xxl:text-2xl">
          © 2025 The Sapphire Slice | Designed by{" "}
          <a href="https://abrahamnaiborhu.me" className="underline lg:text-xl xxl:text-2xl">
            abraham_pn
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
