// import React from 'react'
// import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div
      id="home"
      className="h-[100vh] pr-[15%] pl-[15%] flex justify-between items-center "
    >
      {/* home page section */}
      {/* <div > */}
      {/* <div className="flex justify-between"> */}
      <section className="">
        <h1 className="text-[40px] mb-[20px] text-gray-500 max-md:text-[27px]">
          Hello,
        </h1>
        <i className="text-[45px] text-blue-600 max-md:text-[30px]">
          I'M SANUSI OYINDAMOLA
        </i>
        <h1 className="text-[47px] mt-[20px] text-gray-600 max-md:text-[35px]">
          SOFTWARE DEVELOPER
        </h1>
        <a
          className="p-[10px] text-[20px] bg-pink-800 text-white font-bold hover:bg-orange-600"
          href=""
        >
          Download CV
        </a>
      </section>
      <section>
        <img
          className="firstlogo w-[350px] h-[500px]"
          src="logo.jpg"
          alt="logo"
        />
      </section>
      {/* </div> */}
      {/* </div> */}
      {/* Home page section ended */}
    </div>
  );
};

export default Home;
