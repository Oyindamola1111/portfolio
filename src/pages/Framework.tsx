// import React from 'react'

import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

const Framework = () => {
  return (
    <div id="framework" className="min-h-screen mt-20 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <div className="flex justify-center">
        <h1 className="text-blue-700 text-3xl sm:text-4xl md:text-5xl font-bold">
          Frameworks
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        
        {/* HTML */}
        <main className="frame w-full bg-gray-100 px-6 py-7 rounded-2xl shadow-2xl flex flex-col items-center">
          <p className="text-red-400">
            <IoLogoHtml5 className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40" />
          </p>
          <p className="mt-4 font-medium">HTML</p>
        </main>

        {/* CSS */}
        <main className="frame w-full bg-gray-100 px-6 py-7 rounded-2xl shadow-2xl flex flex-col items-center">
          <p className="text-blue-500">
            <FaCss3Alt className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40" />
          </p>
          <p className="mt-4 font-medium">CSS</p>
        </main>

        {/* JavaScript */}
        <main className="frame w-full bg-gray-100 px-6 py-7 rounded-2xl shadow-2xl flex flex-col items-center">
          <p className="text-yellow-500">
            <TbBrandJavascript className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40" />
          </p>
          <p className="mt-4 font-medium">JavaScript</p>
        </main>

        {/* React */}
        <main className="frame w-full bg-gray-100 px-6 py-7 rounded-2xl shadow-2xl flex flex-col items-center">
          <p className="text-pink-700">
            <FaReact className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40" />
          </p>
          <p className="mt-4 font-medium">React</p>
        </main>

        {/* Tailwind */}
        <main className="frame w-full bg-gray-100 px-6 py-7 rounded-2xl shadow-2xl flex flex-col items-center">
          <p className="text-blue-300">
            <RiTailwindCssFill className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40" />
          </p>
          <p className="mt-4 font-medium">Tailwind</p>
        </main>
       
      </div>
    </div>
  );
};

export default Framework;

