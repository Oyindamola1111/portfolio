// import React from 'react'
// import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div id="home">
       {/* home page section */}
      <div className="h-[100vh] pr-[10%] pl-[10%] flex justify-between items-center">
        {/* <div className="flex justify-between"> */}
     <section>
       <h1 className="text-[40px] mb-[20px] text-gray-500">Hello,</h1>
      <i className="text-[45px] text-blue-600">I'M SANUSI OYINDAMOLA</i>
      <h1 className="text-[50px] mt-[20px] text-gray-600">SOFTWARE DEVELOPER</h1>
      <button className="p-[7px] text-[20px] bg-red-500 text-white font-bold">Welcome</button>
     </section>
     <section>
     <img className="firstlogo w-[350px] h-[500px]" src="logo.jpg" alt="logo" />
     </section>
     {/* </div> */}
     </div>
     {/* Home page section ended */}
    </div>
  )
}

export default Home
