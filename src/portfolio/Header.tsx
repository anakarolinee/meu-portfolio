import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Meu Portfólio</div>
        <div>
          <Link to="/" className="mr-4">Início</Link>
          <Link to="/sobre" className="mr-4">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
