import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Sbm<span className="text-gray-800">Master</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#courses" className="hover:text-blue-600">Courses</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <button onClick={onLoginClick} className="hover:text-blue-600">Login</button>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2">
          <a href="#home" className="block text-gray-700">Home</a>
          <a href="#courses" className="block text-gray-700">Courses</a>
          <a href="#about" className="block text-gray-700">About</a>
          <a href="#contact" className="block text-gray-700">Contact</a>
          <button onClick={onLoginClick} className="block text-blue-600">Login</button>
        </div>
      )}
    </header>
  );
};

export default Header;
