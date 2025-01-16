const Experiencias = () => {
    return (
      <div className="pb-24">
        <h2 className="my-32 text-center text-gray-500 text-4xl">Experiências Profissionais</h2>
  
        {/* Experiência 1 */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-center mb-4">Desenvolvedora Front-End Jr</h3>
              <p className="text-center text-gray-600 mb-2">AG Sistemas</p>
              <p className="text-center text-gray-500 mb-4"> Julho 2024 - Presente</p>
              <p className="text-center text-gray-700">
              Como desenvolvedora front-end, possuo experiência em projetos de grande escala, utilizando tecnologias modernas como React, Tailwind CSS e outras ferramentas avançadas. Minha principal responsabilidade é criar interfaces de usuário intuitivas, garantindo a componetização eficiente de elementos, um design responsivo e o aprimoramento contínuo do desempenho das aplicações. 
              Estou comprometida em entregar soluções que não só atendam às necessidades dos usuários, mas que também proporcionem uma experiência fluida e otimizada.
              </p>
            </div>
          </div>
          <div className="w-full border-b border-neutral-900 my-8"></div>
        </div>
  
        {/* Experiência 2 */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-center mb-4">Estagiária de Testes QA </h3>
              <p className="text-center text-gray-600 mb-2">AG Sistemas</p>
              <p className="text-center text-gray-500 mb-4">Março 2024 - Julho 2024</p>
              <p className="text-center text-gray-700">
              Minha primeira experiência na área de tecnologia foi como Tester de Software, onde desenvolvi um olhar crítico e detalhista para garantir a qualidade dos sistemas. 
              Durante o estágio, também pude explorar meu lado criativo ao criar páginas usando WordPress e Elementor, além de desenvolver wireframes no Figma. Foi nesse ambiente que despertou meu interece pelo desenvolvimento Front-End.
              </p>
            </div>
          </div>
          <div className="w-full border-b border-neutral-900 my-8"></div>
        </div>

      </div>
    );
  };
  
  export default Experiencias;
  