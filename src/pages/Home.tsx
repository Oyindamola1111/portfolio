// import React from 'react'
// import { Link } from "react-router-dom"const Home = () => {

const Home = () => {

  return (
    <div
      id="home"
      className="min-h-screen px-6 md:px-[160px] flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left gap-10 bg-gradient-to-b from-purple-50 to-white"
    >
      {/* Left Section */}
      <section className="animate-fadeIn space-y-4">
        <h1 className="text-[28px] md:text-[36px] font-light text-gray-500">
          👋 Hello,
        </h1>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-[32px] md:text-[45px] font-extrabold">
          I'M SANUSI OYINDAMOLA
        </h2>
        <p className="text-[22px] md:text-[30px] text-gray-700 tracking-wide">
          SOFTWARE DEVELOPER
        </p>

        <p className="max-w-lg text-gray-500 leading-relaxed text-[16px] md:text-[18px]">
          Passionate about building modern, responsive, and user-friendly
          applications. I love transforming ideas into real-world digital
          solutions.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a
  className="cursor-pointer px-6 py-3 text-[18px] md:text-[20px] bg-gradient-to-r from-pink-600 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg rounded-full transition-transform transform hover:scale-105"
  href="/Sanusi-Oyindamola-Resume.pdf"
  download="Sanusi-Oyindamola-Resume.pdf"
>
  Download CV
</a>

          <a
            className="px-6 py-3 text-[18px] md:text-[20px] border-2 border-pink-600 text-pink-600 font-semibold rounded-full hover:bg-pink-50 transition"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Right Section */}
      <section className="animate-fadeIn delay-200">
        <div className="">
          <img
            className="w-[250px] h-[350px] md:w-[350px] md:h-[500px] object-cover rounded-2xl shadow-lg border-4 border-white"
            src="logo.jpg"
            alt="Profile"
          />
          {/* <div className="absolute inset-0 rounded-2xl"></div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;

