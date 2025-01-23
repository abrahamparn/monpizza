import { useRef, useState } from "react";

import "./App.css";
// IMPORT IMAGE
import pizzaLogo from "./assets/logo/pizza_logo_no_bg_resized.png";
import pizzaseven from "./assets/pictures/pizzaseven.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Content from "./components/Content";
import Title from "./components/Title";
import Pictures from "./components/Pictures";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);

  return (
    <div className="font-didot relative text-creamy_white">
      <Header headerRef={headerRef} heroRef={heroRef} />
      <Hero heroRef={heroRef} />
      <Content />
      <Title />
      <Pictures />
      <Footer />
    </div>
  );
}

export default App;
