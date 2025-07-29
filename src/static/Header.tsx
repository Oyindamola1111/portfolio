// import React from 'react'
// import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="head shadow-2xl bg-white pt-[20px] pb-[20px] pl-[160px] pr-[160px] flex justify-between items-center max-md:bg-red-500 ">
      <div>
     <a href="#home"> <i className="text-[25px] text-pink-800 font-bold hover:text-red-700 max-md:text-[20px]">Sanusi Oyindamola</i></a>
      </div>
      <div className="text-[20px] text-blue-700 font-bold">
        <ul className="flex gap-[30px]">
          <li><a className=" hover:text-sky-500" href="#home">Home</a></li>
         <li><a className="hover:text-sky-500" href="#profile">Profile</a></li>
         <li><a  className="hover:text-sky-500" href="#projects">Projects</a></li>
         <li><a  className="hover:text-sky-500" href="#framework">Framework</a></li>
         <li><a  className="hover:text-sky-500" href="#tool">Tools</a></li>
         <li><a  className="hover:text-sky-500" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
