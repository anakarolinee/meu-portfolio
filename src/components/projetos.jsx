import DecorativeElements from "./DecorativeElements";
import { TbWorld, TbBrandGithub } from "react-icons/tb";
import projetoFigmaImg from "../assets/projeto-figma.png";
import projetoConversorImg from "../assets/projeto-conversor.png";
import meuPortifolioImg from "../assets/meu-portfolio.png";
const Projetos = () => {
  const abrirDemo = (iframe) => {
    window.open(iframe, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  const projetos = [
    {
      id: 2,
      titulo: "Conversor de Moedas",
      descricao: "Aplicação para conversão de dólar para real usando tecnologias web puras. Valor do dolar baseado na época criada.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      iframe: "conversor/index.html",
      github: "https://github.com/anakarolinee/conversor"
    },
    {
      id: 3,
      titulo: "Protótipo de site de vendas Restaurante",
      descricao: "Protótipo de site para vendas de comida vegana, desenvolvido no Figma com foco em UX/UI design.",
      tecnologias: ["Figma", "UI/UX Design", "Prototipagem"],
      iframe: "https://www.figma.com/design/RMtuiqwtWXFIhkDlZCQOGk/Mistura-Vegana?node-id=0-1&t=DnkqPwddX1D8mBFz-1"
    },
    {
      id: 1,
      titulo: " Este Portfólio Pessoal",
      descricao: "Site responsivo desenvolvido com React, Vite, Tailwind CSS e JavaScript. Form feito com EmailJS.",
      tecnologias: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      destaque: true
    },
  ];

  return (
    <div className="pb-24 relative">
      <DecorativeElements variant="geometric" intensity="medium" />
      <div className="relative my-20 z-10">
        <h2 className=" mt-32 text-center text-gray-500 text-4xl ">Meus Projetos</h2>
        <div className="max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-4">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className={`bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2'
                }`}
            >
              <div className="mb-4">
                {projeto.iframe ? (
                  <div
                    className="bg-gray-50 rounded-lg p-2 h-48 hover:bg-gray-100 transition-colors relative group"
                  >
                    {projeto.id === 3 ? (
                      <img
                        src={projetoFigmaImg}
                        alt="Protótipo Figma - Restaurante Vegano"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                        <img
                          src={projetoConversorImg}
                          alt="Site de conversão de moedas"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <img
                    src={meuPortifolioImg}
                    alt="Este Portfólio Pessoal"
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{projeto.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{projeto.descricao}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {projeto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(projeto.iframe || projeto.github) && (
                  <div className="flex gap-2 ">
                    {projeto.iframe && (
                      <button
                        onClick={() => abrirDemo(projeto.iframe)}
                        className="flex mt-3 items-center gap-1  text-gray-600 hover:text-purple-600 rounded-lg transition-colors text-sm"
                        title="Ver demo"
                      >
                        <TbWorld className="w-5 h-5" />
                      </button>
                    )}
                    {projeto.github && (
                      <a
                        href={projeto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center mt-3 gap-1  text-gray-600 hover:text-purple-600 rounded-lg transition-colors text-sm"
                        title="Ver código no GitHub"
                      >
                        <TbBrandGithub className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
