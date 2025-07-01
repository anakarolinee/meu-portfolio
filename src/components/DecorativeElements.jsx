const DecorativeElements = ({ variant = "default", intensity = "medium" }) => {

  // Configurações de intensidade
  const intensityConfig = {
    light: {
      opacity: "opacity-10",
      size: "scale-75",
      animation: "animate-pulse"
    },
    medium: {
      opacity: "opacity-20",
      size: "scale-100",
      animation: "animate-pulse"
    },
    strong: {
      opacity: "opacity-30",
      size: "scale-125",
      animation: "animate-bounce"
    }
  };

  const config = intensityConfig[intensity] || intensityConfig.medium;

  // Diferentes variantes de decoração
  const renderVariant = () => {
    switch (variant) {
      case "circles":
        return (
          <>
            {/* Círculos decorativos */}
            <div className={`absolute top-10 left-10 w-24 h-24 bg-pink-200 rounded-full ${config.opacity} ${config.animation}`}></div>
            <div className={`absolute top-32 right-20 w-16 h-16 bg-purple-200 rounded-full ${config.opacity} ${config.animation} delay-300`}></div>
            <div className={`absolute bottom-20 left-16 w-32 h-32 bg-cyan-200 rounded-full ${config.opacity}`}></div>
            <div className={`absolute bottom-40 right-10 w-20 h-20 bg-slate-200 rounded-full ${config.opacity} ${config.animation} delay-500`}></div>
          </>
        );

      case "geometric":
        return (
          <>
            {/* Formas geométricas */}
            <div className={`absolute top-1/4 left-1/6 w-12 h-12 bg-gradient-to-r from-pink-300 to-purple-400 rotate-45 ${config.opacity} animate-spin-slow`}></div>
            <div className={`absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-l from-cyan-300 to-blue-400 rotate-12 ${config.opacity}`}></div>
            <div className={`absolute top-1/2 right-1/6 w-10 h-10 bg-gradient-to-r from-slate-300 to-gray-400 rotate-90 ${config.opacity} ${config.animation}`}></div>
            <div className={`absolute bottom-1/4 left-1/3 w-14 h-14 bg-gradient-to-l from-purple-300 to-pink-400 rotate-6 ${config.opacity}`}></div>
          </>
        );

      case "lines":
        return (
          <>
            {/* Linhas decorativas */}
            <div className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent ${config.opacity}`}></div>
            <div className={`absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-300 to-transparent opacity-15`}></div>
            <div className={`absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent ${config.opacity}`}></div>
          </>
        );

      case "floating":
        return (
          <>
            {/* Elementos flutuantes */}
            <div className={`absolute top-16 left-1/5 w-6 h-6 bg-pink-300 rounded-full ${config.opacity} animate-bounce delay-200`}></div>
            <div className={`absolute top-1/3 right-1/5 w-4 h-4 bg-purple-300 rounded-full ${config.opacity} animate-bounce delay-700`}></div>
            <div className={`absolute bottom-1/4 left-1/4 w-5 h-5 bg-cyan-300 rounded-full ${config.opacity} animate-bounce delay-1000`}></div>
            <div className={`absolute bottom-16 right-1/6 w-7 h-7 bg-slate-300 rounded-full ${config.opacity} animate-bounce delay-500`}></div>
            <div className={`absolute top-2/3 left-1/6 w-3 h-3 bg-blue-300 rounded-full ${config.opacity} animate-bounce delay-300`}></div>
          </>
        );

      case "mixed":
        return (
          <>
            {/* Combinação de elementos */}
            <div className={`absolute top-12 left-12 w-20 h-20 bg-pink-200 rounded-full ${config.opacity} ${config.animation}`}></div>
            <div className={`absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-300 to-pink-400 rotate-45 ${config.opacity}`}></div>
            <div className={`absolute bottom-20 left-1/5 w-16 h-16 bg-cyan-200 rounded-full ${config.opacity}`}></div>
            <div className={`absolute bottom-1/3 right-1/6 w-6 h-6 bg-gradient-to-l from-slate-300 to-gray-400 rotate-12 ${config.opacity} ${config.animation} delay-400`}></div>
            <div className={`absolute top-0 left-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-15`}></div>
          </>
        );

      default:
        return (
          <>
            {/* Padrão - elementos sutis */}
            <div className={`absolute top-20 left-20 w-16 h-16 bg-pink-200 rounded-full ${config.opacity} ${config.animation}`}></div>
            <div className={`absolute bottom-20 right-20 w-12 h-12 bg-purple-200 rounded-full ${config.opacity} ${config.animation} delay-300`}></div>
            <div className={`absolute top-1/2 left-1/4 w-6 h-6 bg-gradient-to-r from-cyan-300 to-blue-400 rotate-45 ${config.opacity}`}></div>
          </>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {renderVariant()}
    </div>
  );
};

export default DecorativeElements;
