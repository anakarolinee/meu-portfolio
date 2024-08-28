import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex-grow bg-gray-100 p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao meu portfólio!</h1>
        <p className="text-lg mb-4">Aqui você encontrará informações sobre meus projetos e habilidades.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Projetos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Exemplo de card de projeto */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Projeto 1</h3>
            <p>Descrição do projeto 1.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Projeto 2</h3>
            <p>Descrição do projeto 2.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Projeto 3</h3>
            <p>Descrição do projeto 3.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
