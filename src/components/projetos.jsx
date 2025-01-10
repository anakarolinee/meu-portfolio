import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const projetos = () => {
    return <div className="border-b border-neutral-900 pb-4">
     <h2 className="my-20 text-center text-4xl">Meus Projetos
     </h2>
     <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
        <div className="flex items-center justify-center">
            <img src={aboutImg} alt="Sobre mim" />
        </div>
        </div>
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 ">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>     
 </div>
  };
  
  export default projetos;
  