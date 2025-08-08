// import React from 'react'
// import { Link } from "react-router-dom"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-2xl bg-white px-6 md:px-[160px] py-5 flex justify-between items-center relative">
      {/* Logo */}
      <a href="#home" className="text-[25px] text-pink-800 font-bold hover:text-red-700 max-md:text-[20px]">
        Sanusi Oyindamola
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex text-[20px] text-blue-700 font-bold gap-[30px]">
        <a className="hover:text-sky-500" href="#home">Home</a>
        <a className="hover:text-sky-500" href="#profile">Profile</a>
        <a className="hover:text-sky-500" href="#projects">Projects</a>
        <a className="hover:text-sky-500" href="#framework">Framework</a>
        <a className="hover:text-sky-500" href="#tool">Tools</a>
        <a className="hover:text-sky-500" href="#contact">Contact</a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-2xl text-blue-700 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-[20px] text-blue-700 font-bold md:hidden">
          <a onClick={() => setIsOpen(false)} className="hover:text-sky-500" href="#home">Home</a>
          <a onClick={() => setIsOpen(false)} className="hover:text-sky-500" href="#profile">Profile</a>
          <a onClick={() => setIsOpen(false)} className="hover:text-sky-500" href="#projects">Projects</a>
          <a onClick={() => setIsOpen(false)} className="hover:text-sky-500" href="#framework">Framework</a>
          <a onClick={() => setIsOpen(false)} className="hover:text-sky-500" href="#tool">Tools</a>
          <a onClick={() => setIsOpen(false)} className="hover:text-sky-500" href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;

