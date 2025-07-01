import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import DecorativeElements from "./DecorativeElements";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message.text]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: "", type: "" });

    const YOUR_EMAIL = "anakarolinedev23@gmail.com";
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || serviceId === 'seu_service_id_aqui') {
        throw new Error('Service ID não configurado. Configure VITE_EMAILJS_SERVICE_ID no arquivo .env');
      }

      if (!templateId || templateId === 'seu_template_id_aqui') {
        throw new Error('Template ID não configurado. Configure VITE_EMAILJS_TEMPLATE_ID no arquivo .env');
      }

      if (!publicKey || publicKey === 'sua_public_key_aqui') {
        throw new Error('Public Key não configurada. Configure VITE_EMAILJS_PUBLIC_KEY no arquivo .env');
      }

      if (serviceId && templateId && publicKey) {

        const templateParams = {
          from_name: formData.nome,
          from_email: formData.email,
          message: formData.mensagem,
          to_email: YOUR_EMAIL,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setMessage({
          text: "✅ Mensagem enviada com sucesso! Entrarei em contato em breve.",
          type: "success"
        });
      } else {
        const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(
          `Contato do Portfólio - ${formData.nome}`
        )}&body=${encodeURIComponent(
          `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`
        )}`;

        window.location.href = mailtoLink;
        setMessage({
          text: "📧 Seu cliente de email foi aberto. Complete o envio por lá!",
          type: "success"
        });
      }

      setFormData({
        nome: "",
        email: "",
        mensagem: "",
      });

    } catch (error) {
      console.error(' Erro ao enviar email:', error);

      let errorMessage = "";

      if (error.status === 400) {
        errorMessage = "Erro na configuração do EmailJS. Verifique as credenciais.";
      } else if (error.status === 401) {
        errorMessage = "Chave de API inválida. Verifique a Public Key no arquivo .env";
      } else if (error.status === 404) {
        errorMessage = "Template ou Serviço não encontrado. Verifique os IDs no arquivo .env";
      } else if (error.status === 422) {
        errorMessage = "Dados do formulário inválidos. Verifique os campos obrigatórios.";
      } else if (error.message && error.message.includes('network')) {
        errorMessage = "Erro de conexão. Verifique sua internet e tente novamente.";
      } else if (error.text && error.text.includes('template')) {
        errorMessage = "Erro no template do EmailJS. Verifique a configuração do template.";
      } else {
        errorMessage = `Erro inesperado: ${error.text || error.message || 'Erro desconhecido'}`;
      }

      setMessage({
        text: `${errorMessage} Entre em contato diretamente: ${YOUR_EMAIL}`,
        type: "error"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <DecorativeElements variant="floating" intensity="strong" />
      <div className="fixed top-0 -z-10  h-full w-full">
      </div>
      <div className="flex min-h-screen -mt-6 items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
          <h2 className="mb-6 sm:mb-8 lg:mb-12 text-center  text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-500 px-2">
            Entre em contato comigo
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="relative">
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="mt-4 sm:mt-6 focus:outline-none border-b w-full pb-4 sm:pb-6 border-gray-300 placeholder-transparent text-gray-600 focus:border-purple-400 transition-colors peer text-sm sm:text-base"
                placeholder="Nome"
              />
              <label
                htmlFor="nome"
                className="absolute left-0 top-4 sm:top-6 md:top-8 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 sm:peer-placeholder-shown:top-8 peer-focus:-top-0 peer-focus:text-purple-400 peer-focus:text-xs sm:peer-focus:text-sm peer-valid:-top-0 peer-valid:text-purple-400 peer-valid:text-xs sm:peer-valid:text-sm"
              >
                Nome
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-4 sm:mt-6 focus:outline-none border-b w-full pb-4 sm:pb-6 border-gray-300 placeholder-transparent text-gray-600 focus:border-purple-400 transition-colors peer text-sm sm:text-base"
                placeholder="E-mail"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-4 sm:top-6 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 sm:peer-placeholder-shown:top-8 peer-focus:-top-0 peer-focus:text-purple-400 peer-focus:text-xs sm:peer-focus:text-sm peer-valid:-top-0 peer-valid:text-purple-400 peer-valid:text-xs sm:peer-valid:text-sm"
              >
                E-mail
              </label>
            </div>
            <div className="relative">
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                className="mt-4 sm:mt-6 focus:outline-none border-b w-full pb-2 border-gray-300 placeholder-transparent text-gray-600 focus:border-purple-400 transition-colors resize-none peer text-sm sm:text-base"
                placeholder="Mensagem"
                rows="3"
              />
              <label
                htmlFor="mensagem"
                className="absolute left-0 top-4 sm:top-6 text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 sm:peer-placeholder-shown:top-8 peer-focus:-top-0 peer-focus:text-purple-400 peer-focus:text-xs sm:peer-focus:text-sm peer-valid:-top-0 peer-valid:text-purple-400 peer-valid:text-xs sm:peer-valid:text-sm"
              >
                Mensagem
              </label>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-full p-3 sm:p-4 w-full sm:w-auto sm:min-w-56 text-center justify-center bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 hover:from-pink-400 hover:via-slate-500 hover:to-purple-500 text-white text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mx-auto block sm:mx-0"
            >
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </button>

            {message.text && (
              <div
                className={`mt-4 p-3 sm:p-4 rounded-lg text-center font-medium transition-all duration-300 text-sm sm:text-base ${message.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
                  }`}
              >
                {message.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
