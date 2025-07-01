import Technologies from "./Technologies";
import SobreMim from "./SobreMim";
import Contato from "./Contato";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const dynamicTexts = [
    "Desenvolvedora Front-end Jr",
    "Apaixonada por Tecnologia e Design",
    "Web Designer e Desenvolvedora",
    "Transformando Ideias em Código"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dynamicTexts.length]);

  return <div className="relative min-h-screen overflow-hidden">


    <div className="flex flex-wrap relative z-10">
      <div className="w-full ">
        <div className={`flex flex-col py-48 mt-24 items-center lg:items-start  pb-8 transition-all duration-1000 transform ${isVisible}`}>

          <h1 className="pb-8 text-5xl md:text-6xl lg:text-7xl font-thin text-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 bg-clip-text tracking-tight lg:mt-8 animate-fadeIn">
            Ana Karoline da Silva
          </h1>

          <span className="  bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-transparent font-semibold transition-all duration-500 transform  text-center lg:text-left ">
            {dynamicTexts[textIndex]}
          </span>

          <div className="flex space-x-2 mt-8 mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-indigo-500 to-pink-600 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>

        <div className="mt-12 ">
          <div className="transform transition-all bg-yellow-50 rounded-b-full rounded-r-full  duration-700 "><SobreMim /></div>
          <div className="transform transition-all duration-700 "><Technologies /></div>
          <div><Contato /></div>
        </div>
      </div>
    </div>

  </div>


};

export default Hero;
