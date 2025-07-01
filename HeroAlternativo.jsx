import { anaKaroline } from "../constants";
import Technologies from "./Technologies";
import SobreMim from "./SobreMim";
import Contato from "./Contato";
import DecorativeElements from "./DecorativeElements";

const HeroAlternativo = () => {
  // Dados compactos das experiências
  const experienciasResumo = [
    {
      title: "Dev Front-End Jr",
      company: "AG Sistemas",
      period: "2024 - Atual",
      current: true,
      icon: "💻"
    },
    {
      title: "QA Tester",
      company: "AG Sistemas",
      period: "2024",
      current: false,
      icon: "🔍"
    }
  ];

  // Dados compactos dos projetos
  const projetosResumo = [
    {
      titulo: "Portfolio React",
      tech: "React + Tailwind",
      icon: "🌟"
    },
    {
      titulo: "Conversor Moedas",
      tech: "Vanilla JS",
      icon: "💱"
    }
  ];

  return <div className="relative">
    {/* Elementos decorativos para o Hero */}
    <DecorativeElements variant="floating" intensity="light" />

    <div className="flex flex-wrap relative z-10">
      <div className="w-full">
        {/* Seção Principal do Hero */}
        <div className="flex flex-col mt-48 items-center lg:items-start pb-12">
          <h1 className="pb-6 text-5xl font-thin text-gray-500 tracking-tight lg:mt-8 lg-text-6xl">Ana Karoline da Silva</h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Desenvolvedora Front-end Jr</span>
          <p className="my-2 text-lg py-4 font-light mt-6 text-gray-400 tracking-tighter max-w-2xl">{anaKaroline}</p>
          
          {/* Cards compactos inline */}
          <div className="mt-8 w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Experiências Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
                  <span className="mr-2">💼</span>
                  Experiência
                </h3>
                <div className="space-y-3">
                  {experienciasResumo.map((exp, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{exp.icon}</span>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{exp.title}</p>
                          <p className="text-gray-600 text-xs">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{exp.period}</p>
                        {exp.current && (
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projetos Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
                  <span className="mr-2">🚀</span>
                  Projetos
                </h3>
                <div className="space-y-3">
                  {projetosResumo.map((projeto, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{projeto.icon}</span>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{projeto.titulo}</p>
                          <p className="text-gray-600 text-xs">{projeto.tech}</p>
                        </div>
                      </div>
                      <button className="text-purple-600 hover:text-purple-800 text-xs font-medium">
                        Ver →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Stats rápidas */}
            <div className="mt-6 flex justify-center space-x-8 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-700">1+</p>
                <p className="text-xs text-gray-500">Anos Exp.</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-700">2</p>
                <p className="text-xs text-gray-500">Projetos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-700">5+</p>
                <p className="text-xs text-gray-500">Tecnologias</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-b border-neutral-200 my-12"></div>

        {/* Seções originais */}
        <div className="border-b border-neutral-900 pb-4"><SobreMim /></div>
        <Technologies />
        <Contato />
      </div>
    </div>
  </div>
};

export default HeroAlternativo;
