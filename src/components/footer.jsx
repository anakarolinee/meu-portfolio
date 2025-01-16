const Footer = () => {
  return (
    <footer className="bottom-0 w-full h-46 bg-purple-500 bg-opacity-80 shadow-md backdrop-blur-md">
      <div className="w-full text-center py-6">
        <p className="mt-8 text-sm text-white">&copy; {new Date().getFullYear()} Ana Karoline da Silva.</p>
        
        <div className="mt-4">
          
          {/* Botão para WhatsApp */}
          {/* <a
            href="https://wa.me/5511992065803" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white bg-purple-400 hover:bg-purple-500 hover:scale-105 shadow-lg rounded-full shadow "
          >
            Entre em contato comigo
          </a> */}
          <a
            href="https://www.linkedin.com/in/ana-karoline-araujo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-4 px-4 py-2 text-white bg-purple-400 hover:bg-purple-500 hover:scale-105 shadow-lg rounded-full shadow "
          >
            Ver Linkedin
          </a>
          <a
            href="mailto:anakarolinedev23@gmail.com"
            className="inline-block ml-4 px-4 py-2 text-white bg-purple-400  hover:bg-purple-500 hover:scale-105 rounded-full shadow "
          >
            Enviar E-mail
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
