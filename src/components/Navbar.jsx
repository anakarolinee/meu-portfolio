import { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);  // Ref para o menu dropdown

  // Fechar o menu se clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Adiciona o ouvinte de evento quando o componente é montado
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          <a href="/">
            <h2 className="mx-2 w-15">AK</h2>
          </a>
        </div>

        {/* Navegação */}
        <nav className="flex items-center space-x-6">
          {/* Menu principal */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                className="text-gray-600 transition hover:text-purple-600"
                to="/projetos"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 transition hover:text-purple-600"
                to="/esperiencias"
              >
                Experiências
              </Link>
            </li>
            <li>
              <li className="text-gray-600 transition hover:text-purple-600">
                <a href="../../public/Currículo Ana Karoline.pdf" target="_blank">CV</a>

              </li>
            </li>
          </ul>

          {/* Menu hambúrguer em telas menores */}
          <div className="relative md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-purple-800 focus:outline-none"
            >
              <PiHamburgerFill className="h-8 w-8 hover:text-purple-500" />
            </button>

            {/* Menu dropdown */}
            {menuOpen && (
              <ul
                ref={menuRef} // Associando o ref ao menu dropdown
                className="absolute right-0 mt-4 w-48 rounded-lg bg-white shadow-lg"
              >
                <li className="border-b">
                  <Link
                    className="block px-4 py-2 text-gray-600 transition hover:bg-gray-100 hover:text-purple-600"
                    to="/projetos"
                  >
                    Projetos
                  </Link>
                </li>
                <li className="border-b">
                  <Link
                    className="block px-4 py-2 text-gray-600 transition hover:bg-gray-100 hover:text-purple-600"
                    to="/esperiencias"
                  >
                    Experiências
                  </Link>
                </li>
                <li className="border-b">
                  <a
                    href="../../public/Currículo Ana Karoline.pdf"
                    target="_blank"
                    className="block w-full px-4 py-2 text-gray-600 transition hover:bg-gray-100 hover:text-purple-600"
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-4 py-2 text-gray-600 transition hover:bg-gray-100 hover:text-purple-600"
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" /> Github
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center px-4 py-2 text-gray-600 transition hover:bg-gray-100 hover:text-purple-600"
                    href="https://www.linkedin.com/in/ana-karoline-araujo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Redes sociais */}
        <div className="hidden md:flex items-center space-x-4 text-2xl text-purple-800">
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
    </header>
  );
};

export default Navbar;
