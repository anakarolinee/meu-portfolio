import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(128,0,128,0.13)_0,rgba(128,0,128,0)_50%,rgba(128,0,128,0)_100%)]"></div>
      </div>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-lg bg-white bg-opacity-10 p-8 shadow-lg backdrop-blur-lg">
          <h2 className="mb-6 text-center text-2xl font-semibold text-neutral-100">
            Entre em Contato
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-neutral-200"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-neutral-500 bg-neutral-800 p-2.5 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-cyan-300"
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-200"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-neutral-500 bg-neutral-800 p-2.5 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-cyan-300"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-neutral-200"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-neutral-500 bg-neutral-800 p-2.5 text-white placeholder-gray-400 focus:border-cyan-300 focus:ring-cyan-300"
                placeholder="Digite sua mensagem"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-300 px-4 py-2 text-center font-semibold text-cyan-900 shadow hover:bg-cyan-400"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
