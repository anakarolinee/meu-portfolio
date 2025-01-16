const Projetos = () => {
  return (
    <div className="pb-24">
      <h2 className="my-32 text-center text-gray-500 text-4xl">Meus Projetos</h2>

      <div className="flex flex-wrap justify-center">
        {/* Primeiro projeto */}
        <h1 className="text-2xl text-center mb-4 w-full">
         Portfólio em React + Vite     
        </h1>
        <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0 flex justify-center">
          <div className="flex items-center justify-center w-full">
            <p className="text-center text-gray-700">
              Este projeto é o meu currículo desenvolvido com <span className="inline-block py-1 px-3 rounded-full bg-orange-200 text-orange-800 text-sm mr-2">React</span>, <span className="inline-block py-1 px-3 rounded-full bg-cyan-200 text-cyan-800 text-sm mr-2">Tailwind</span>, <span className="inline-block py-1 px-3 rounded-full bg-pink-200 text-pink-800 text-sm mr-2">CSS</span> e <span className="inline-block py-1 px-3 rounded-full bg-lime-200 text-lime-800 text-sm mr-2"> JavaScript</span>. O objetivo é demonstrar minhas habilidades em front-end e minhas experiências com essas tecnologias.
            </p>
          </div>
        </div>

        <div className="w-full border-b border-neutral-900 my-8"></div>
      </div>

      <div className="flex flex-wrap justify-center">
        <h1 className="text-2xl mt-8 text-center mb-4 w-full">
          Conversor de Dólar em Real
        </h1>
        <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0 flex justify-center">
          <div className="flex items-center justify-center w-full">
            <p className="text-center text-gray-700">
            Este projeto é um conversor desenvolvido com  <span className="inline-block py-1 px-3 rounded-full bg-purple-200 text-purple-800 text-sm mr-2">HTML</span>, 
            <span className="inline-block py-1 px-3 rounded-full bg-pink-200 text-pink-800 text-sm mr-2">CSS</span> e <span className="inline-block py-1 px-3 rounded-full bg-lime-200 text-lime-800 text-sm mr-2">JavaScript</span>. Ele tem como objetivo fornecer uma ferramenta simples e funcional para conversão de unidades, demonstrando minhas habilidades com tecnologias web puras.
            </p>
          </div>
        </div>

        <iframe
          src="../../public/conversor/index.html" // Ajuste o caminho conforme necessário
          className="w-full h-96 lg:h-[400px] border-none mb-6"
          title="Conversor"
        ></iframe>

        {/* Seção final */}
        <div className="w-full lg:w-1/2 flex justify-center px-4">
          <div className="flex flex-col items-center justify-center w-full">
            {/* Se necessário, adicione mais conteúdo ou funcionalidades aqui */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
