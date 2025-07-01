const DecorativeCircles = () => {
    return (
        <>
            {/* Círculo rosa-roxo */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>

            {/* Círculo amarelo-rosa */}
            <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

            {/* Círculo azul-roxo */}
            <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </>
    );
};

export default DecorativeCircles;
