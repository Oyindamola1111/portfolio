// import React from 'react'
const Tools = () => {
  return (
    <div
      id="tools"
      className="min-h-screen px-4 sm:px-10 md:px-20 lg:px-[160px] mt-[50px] md:mt-[100px]"
    >
      <div className="flex justify-center">
        <h1 className="text-blue-700 text-3xl sm:text-4xl md:text-[45px] font-bold mb-10">
          Tools used
        </h1>
      </div>

      <div className="flex flex-col gap-5 items-start">
        <h1 className="text-lg sm:text-xl md:text-[25px] text-green-900 bg-blue-300 px-6 py-3 rounded-lg hover:text-[27px] transition">
          Github
        </h1>
        <h1 className="text-lg sm:text-xl md:text-[25px] text-white bg-red-600 px-6 py-3 rounded-lg hover:text-[27px] transition">
          Context API
        </h1>
        <h1 className="text-lg sm:text-xl md:text-[25px] text-black bg-green-400 px-6 py-3 rounded-lg hover:text-[27px] transition">
          Responsive Designs
        </h1>
        <h1 className="text-lg sm:text-xl md:text-[25px] text-green-900 bg-yellow-300 px-6 py-3 rounded-lg hover:text-[27px] transition">
          Figma
        </h1>
        <h1 className="text-lg sm:text-xl md:text-[25px] text-blue-200 bg-red-600 px-6 py-3 rounded-lg hover:text-[27px] hover:bg-red-400 transition">
          Chrome
        </h1>
      </div>
    </div>
  );
};

export default Tools;

