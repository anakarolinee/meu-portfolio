import { useEffect, useRef } from "react";
import profilePic from "../assets/Anak.png";
import { QuemSouEu } from "../constants";

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
    <div ref={sectionRef} className="pb-32">
      <h2 className="my-20  text-center text-gray-400 text-4xl">
        Quem sou <span className="text-purple-600">eu?</span>
      </h2>
      <div className="flex flex-wrap">
        <div
          ref={imgRef}
          className="w-full lg:w-1/2 lg:p-6 opacity-0 scale-90 translate-y-8 transition-all duration-1000"
        >
          <div className="flex items-center justify-center">
            <img
              src={profilePic}
              alt="Ana Karoline"
              className="rounded-full object-cover w-48 h-48 sm:w-28 sm:h-28 md:w-72 md:h-72"
            />
          </div>
        </div>
        <div
          ref={textRef}
          className="w-full lg:w-1/2 opacity-0 scale-90 translate-y-8 transition-all duration-1000"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my- max-w-xl py-16 text-gray-400">{QuemSouEu}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
