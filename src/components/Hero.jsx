import { anaKaroline} from "../constants";
 const Hero = () => {
  
 return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
         <div className="flex flex-wrap">
          <div className="w-full ">
            <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-5xl font-thin text-gray-500 tracking-tight lg:mt-8 lg-text-6xl">Ana Karoline da Silva </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Front-end Jr</span>
            <p className="my-2 mx-w-xl py-6 font-light text-gray-400 tracking-tighter">{anaKaroline}</p>
        </div>
    </div>  
    <div className="w-full lg:w-1/2 lg:p-8">
    <div className="flex justify-center">
      </div>
    </div>  
  </div>
  </div>


};

export default Hero;
