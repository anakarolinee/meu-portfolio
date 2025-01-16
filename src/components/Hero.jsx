import { anaKaroline} from "../constants";
import Technologies from "./Technologies";
import SobreMim from "./SobreMim";
 const Hero = () => {
  
 return <div className="">
         <div className="flex flex-wrap">
          <div className="w-full ">
            <div className="flex flex-col mt-48 items-center lg:items-start border-b border-neutral-900 pb-4">
            <h1 className="pb-16 text-5xl font-thin text-gray-500 tracking-tight lg:mt-8 lg-text-6xl">Ana Karoline da Silva </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"> Desenvolvedora Front-end Jr</span>
            <p className="my-2 text-lg py-6 font-light mt-12 text-gray-400 tracking-tighter">{anaKaroline}</p>
        </div>
        <div className="border-b border-neutral-900 pb-4 "><SobreMim/></div>
        <Technologies/>

    </div>  
  </div>
  </div>


};

export default Hero;
