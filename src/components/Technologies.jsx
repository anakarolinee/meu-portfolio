import { RiReactjsLine } from "react-icons/ri";
import { DiBootstrap } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import  FigmaImg  from "../assets/Figma.jpg";

const Technologies = () => {

    return <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
        <div className="rounded-2xl border-4 border-neutral-200 p-3">
        <RiReactjsLine className="text-7xl text-cyan-500" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-200 p-3">
        <SiJavascript className="text-7xl text-yellow-400 rounded-2xl " />
      </div>
      <div className="rounded-2xl border-4 border-neutral-200 p-3">
        <DiBootstrap className="text-7xl text-white" style={{ backgroundColor: '#7952B3', padding: '8px', borderRadius: '8px' }} />
      </div>
      <div className="rounded-2xl border-4 border-neutral-200 p-3">
        <RiTailwindCssFill className="text-7xl text-cyan-400" />
      </div>
    
      <div className="rounded-2xl border-4 border-neutral-200 p-3">
        <FaWordpress className="text-7xl text-blue-600" />
      </div>
      <div className="rounded-2xl border-4 border-neutral-200 p-3">
        <img src={FigmaImg} alt="Sobre mim" className="w-20 h-20  rounded-2xl " />
      </div> 
</div>


         
      



    </div>
};

    export default Technologies;