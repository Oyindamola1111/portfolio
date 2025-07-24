// import React from 'react'
// import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="head shadow-2xl bg-white pt-[20px] pb-[20px] pl-[100px] pr-[100px] flex justify-between items-center">
      <div>
     <a href="#home"> <i className="text-[25px] text-red-500">Sanusi Oyindamola</i></a>
      </div>
      <div className="text-[20px] text-blue-700 font-bold">
        <ul className="flex gap-[30px]">
          <li><a href="#home">Home</a></li>
         <li><a href="#profile">Profile</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#framework">Framework</a></li>
         <li><a href="#tool">Tool</a></li>
         <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
