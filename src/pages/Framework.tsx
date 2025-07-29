// import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const Framework = () => {
  return (
    <div id="framework" className="h-[100vh] mt-[350px] ">
      <div className="flex justify-center ">
        <h1 className="text-blue-700 text-[45px] font-bold">Frameworks</h1>
      </div>
     <div className="grid grid-cols-4 justify-center items-center content-center gap-[50px] mt-[50px] pl-[160px]">
      <main className="frame w-[200px]  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
         <p className=" text-red-400">
      <IoLogoHtml5 size={200}/></p>
      <p>Html</p>
      </main>
      <main  className="frame w-[200px]  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
        <p className="text-blue-500"><FaCss3Alt size={200}/></p>
        <p>Css</p>
      </main>
      <main  className="frame w-[200px]  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
        <p className="text-yellow-500"><TbBrandJavascript size={200}/></p>
        <p>JavaScript</p>
      </main>
      <main  className="frame w-[200px]  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
        <p className="text-pink-700"><FaReact size={200}/></p>
        <p>React</p>
      </main>  
      <main  className="frame w-[200px]  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
        <p className="text-blue-300"><RiTailwindCssFill size={200}/></p>
        <p>Tailwind</p>
      </main>
      <main  className="frame w-[200px]  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
        <p className="text-lime-500"><FaNodeJs size={200}/></p>
        <p>Node.js</p>
      </main>
      <main  className="frame w-[200px]  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
        <p className="text-green-800"><BiLogoMongodb size={200}/></p>
        <p>MongoDB</p>
      </main>
     </div>
    </div>
  )
}

export default Framework
