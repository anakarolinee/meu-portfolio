import { useEffect, useRef } from "react";
import { QuemSouEu } from "../constants";
import { oi } from "../constants";
import { bemVindo } from "../constants";
import profilePic from "../assets/Anak.png";
import DecorativeElements from "./DecorativeElements";

const SobreMim = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  const fadeInObserver = (elementRef) => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
          entry.target.classList.remove("opacity-0", "translate-y-8", "scale-90");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0", "scale-100");
          entry.target.classList.add("opacity-0", "translate-y-8", "scale-90");
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  };

  useEffect(() => {
    fadeInObserver(textRef);
    fadeInObserver(imgRef);
    fadeInObserver(sectionRef);
  }, []);

  return (
    <div ref={sectionRef} className="pb-32 relative">

      <DecorativeElements variant="circles" intensity="light" />

      <h2 className="my-20 text-center text-gray-400 text-4xl relative z-10">

      </h2>
      <div className="flex flex-wrap relative z-10">
        <div
          ref={imgRef}
          className="w-full lg:w-1/2 lg:p-6 opacity-0 scale-90 translate-y-8 transition-all duration-1000"
        >
          <div className="flex justify-center mt-16 -mb-14 ">
            <img
              src={profilePic}
              alt="Ana Karoline"
              className="rounded-full  object-cover w-48 h-48 sm:w-28 sm:h-28 md:w-72 md:h-72"
            />
          </div>
        </div>
        <div
          ref={textRef}
          className="w-full lg:w-1/2 opacity-0 scale-90 translate-y-8 transition-all duration-1000"
        >
          <p className="text-2xl mt-10 sm:text-xl md:text-2xl font-light text-gray-500 leading-relaxed max-w-xl py-16 px-4 sm:px-0">
            {oi}
          </p>
          <p className="text-lg sm:text-xl font-light text-gray-500 leading-relaxed max-w-xl -mt-8 px-4 sm:px-0">
            {QuemSouEu}
          </p>
          <p className="text-lg sm:text-xl font-light text-gray-500 leading-relaxed max-w-xl mt-12  px-4 sm:px-0">
            {bemVindo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
