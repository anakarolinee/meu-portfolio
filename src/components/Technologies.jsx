import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiPostman } from "react-icons/si";
import { FaElementor } from "react-icons/fa6";
import { FaWordpress, FaGitAlt } from "react-icons/fa";
import FigmaImg from "../assets/Figma.jpg";
import DecorativeElements from "./DecorativeElements";

const techs = [
  { name: "React", icon: <RiReactjsLine className="text-cyan-500" />, },
  { name: "Tailwind", icon: <RiTailwindCssFill className="text-cyan-400" />, },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, },
  { name: "Postman", icon: <SiPostman className="text-orange-500" />, },
  { name: "WordPress", icon: <FaWordpress className="text-blue-600" />, },
  { name: "Elementor", icon: <FaElementor className="text-pink-600" />, },
  {
    name: "Figma",
    icon: <img src={FigmaImg} alt="Figma" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded" />,
  },
];

const Technologies = () => {
  return (
    <div className="relative py-12 sm:py-12 px-4 sm:px-6 lg:px-8 ">
      <DecorativeElements variant="mixed" intensity="light" />

      <div className="relative z-10 mt-32 -mb-14 max-w-8xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className={`inline-flex items-center gap-1.5 sm:gap-2  backdrop-blur-sm border border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm hover:shadow-md  hover:scale-105 hover:bg-white ${tech.animation}`}
            >
              <div className="text-xl sm:text-xl md:text-3xl ">{tech.icon}</div>
              <span className="text-xl sm:text-sm text-gray-700 font-medium whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
