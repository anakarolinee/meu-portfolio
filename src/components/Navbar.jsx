import  { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        <h2 className="mx-2 w-15">AK</h2>
      </div>

      {/* Navegação */}
      <div className="flex justify-center">
        {/* Menu principal */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75"
              href="#"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75"
              href="#"
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75"
              href="#"
            >
              Currículo
            </a>
          </li>
        </ul>

        {/* Menu hambúrguer em telas menores */}
        <div className="relative md:hidden">
          <button
            className="text-gray-500 transition hover:text-gray-500/75 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Ícone do menu hambúrguer */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Menu dropdown */}
          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg">
              <li className="border-b">
                <a
                  className="block px-4 py-2 text-gray-500 transition hover:text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Projetos
                </a>
              </li>
              <li className="border-b">
                <a
                  className="block px-4 py-2 text-gray-500 transition hover:text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-gray-500 transition hover:text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Currículo
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Redes sociais */}
      <div className="m-8 flex items-center gap-4 text-2xl text-purple-800">
        <a
          href="https://www.linkedin.com/in/ana-karoline-araujo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-purple-600" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-purple-600" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
