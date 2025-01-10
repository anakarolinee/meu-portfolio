
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import SobreMim from "./components/SobreMim";
import Technologies from "./components/Technologies";
import Projetos from "./components/projetos";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-300 selection:text-cyan-900">
      <div className=" fixed top-0 -z-10 h-full w-full"> 
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(128,0,128,0.13)_0,rgba(128,0,128,0)_50%,rgba(128,0,128,0)_100%)]"></div>  
        
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <SobreMim/>
          <Projetos/>
          <Technologies/>

      </div>
    </div>
  );
};

export default App;
