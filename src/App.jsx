import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projetos from "./components/projetos";
import Experiencias from "./components/Experiencias";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background fixo */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-4] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(128,0,128,0.13)_0,rgba(128,0,128,0)_50%,rgba(128,0,128,0)_100%)]"></div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Conteúdo principal */}
        <main className="flex-grow container mx-auto px-8">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/experiencias" element={<Experiencias />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
