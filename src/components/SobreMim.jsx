import profilePic from "../assets/Anak.png";
import { QuemSouEu } from "../constants";

const SobreMim = () => {
    return <div className="border-b border-neutral-900 pb-4">
     <h2 className="my-20 text-center text-gray-400 text-4xl">Quem sou <span className="text-purple-600 ">eu?</span>
     </h2>
     <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-6 ">
        <div className="flex items-center justify-center">
        <img src={profilePic} alt="Ana Karoline" className="rounded-full object-cover"/>
        </div>
        </div>
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
            <p className="my-6 max-w-xl py-6 ">{QuemSouEu}</p>
        </div>
      </div>
    </div>     
 </div>
  };
  
  export default SobreMim;
  