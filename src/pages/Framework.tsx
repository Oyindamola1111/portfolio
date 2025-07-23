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
    <div id="framework" className="h-[70vh]">
      <div className="flex justify-center">
        <h1 className="text-blue-700 text-[45px] font-bold">Frameworks</h1>
      </div>
     <div className="flex justify-center items-center gap-[100px] h-[50vh]">
      <main className="frame">
         <p className=" text-red-400">
      <IoLogoHtml5 size={100}/></p>
      <p>Html</p>
      </main>
      <main  className="frame">
        <p className="text-blue-500"><FaCss3Alt size={100}/></p>
        <p>Css</p>
      </main>
      <main  className="frame">
        <p className="text-yellow-500"><TbBrandJavascript size={100}/></p>
        <p>JavaScript</p>
      </main>
      <main  className="frame">
        <p className="text-pink-700"><FaReact size={100}/></p>
        <p>React</p>
      </main>
      <main  className="frame">
        <p className="text-blue-300"><RiTailwindCssFill size={100}/></p>
        <p>Tailwind</p>
      </main>
      <main  className="frame">
        <p className="text-lime-500"><FaNodeJs size={100}/></p>
        <p>Node.js</p>
      </main>
      <main  className="frame">
        <p className="text-green-800"><BiLogoMongodb size={100}/></p>
        <p>MongoDB</p>
      </main>
     </div>
    </div>
  )
}

export default Framework
