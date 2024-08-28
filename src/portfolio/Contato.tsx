import React from 'react';

const Contato: React.FC = () => {
  return (
    <main className="flex-grow bg-gray-100 p-4">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Contato</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Nome:</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mensagem:</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
        </form>
      </section>
    </main>
  );
}

export default Contato;
