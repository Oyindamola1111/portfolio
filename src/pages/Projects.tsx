// import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className="h-[100vh] px-[160px]">
      
      <div className="flex justify-center">
      <h1 className="text-blue-700 text-[45px] font-bold pb-[50px]">Projects</h1>
      </div>

      <div>
        <section className="grid grid-cols-3 gap-[50px] mt-[50px]">
          <main className="flex items-center gap-5  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
            <a href="https://move-io.vercel.app/"><img className=" w-[300px] h-[200px] rounded-[30px]" src="move.png" alt="logo"/></a>
           <div className="w-[350px]">
             <a href="https://move-io.vercel.app/"><p className="text-blue-700 hover:text-green-600">https://move-io.vercel.app/</p></a>
            <p>Achieved this project using pure html and css</p>
           </div>
          </main>
          <main className="flex items-center gap-5  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
            <a className="images" href="https://myuser.vercel.app/"><img className="w-[300px] h-[200px] rounded-[30px]" src="userform.png" alt="logo"/></a>
           <div className="w-[350px]">
             <a href="https://myuser.vercel.app/"><p className="text-blue-700  hover:text-green-600">https://myuser.vercel.app/</p></a>
            <p>Achieved this project with react</p>
           </div>
          </main>
          <main className="flex items-center gap-5  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
            <a className="images" href="https://chrome-replica-brown.vercel.app/"><img className="w-[300px] h-[200px] rounded-[30px]" src="extension.png" alt="logo"/></a>
           <div className="w-[350px]">
             <a href="https://chrome-replica-brown.vercel.app/"><p className="text-blue-700  hover:text-green-600">https://chrome-replica-brown.vercel.app/</p></a>
            <p>Achieved this project using pure html and css</p>
           </div>
          </main>
          <main className="flex items-center gap-5  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
            <a className="images" href="https://mtn-data-site-replica.vercel.app/"><img className="w-[300px] h-[200px] rounded-[30px]" src="mtn.png" alt="logo"/></a>
           <div className="w-[350px]">
             <a href="https://mtn-data-site-replica.vercel.app/"><p className="text-blue-700  hover:text-green-600">https://mtn-data-site-replica.vercel.app/</p></a>
            <p>Achieved this project using pure html and css</p>
           </div>
          </main>
          <main className="flex items-center gap-5  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
            <a className="images" href="https://moniepoint-seven.vercel.app/"><img className="w-[300px] h-[200px] rounded-[30px]" src="moniepoint.png" alt="logo"/></a>
           <div className="w-[350px]">
             <a href="https://moniepoint-seven.vercel.app/"><p className="text-blue-700  hover:text-green-600">https://moniepoint-seven.vercel.app/</p></a>
            <p>Achieved this project using pure html and css during a group presentation on Moniepoint</p>
           </div>
          </main>
          <main className="flex items-center gap-5  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
            <a className="images" href="https://piggy-vest-three.vercel.app/"><img className="w-[300px] h-[200px] rounded-[30px]" src="piggy.png" alt="logo"/></a>
           <div className="w-[350px]">
             <a href="https://piggy-vest-three.vercel.app/"><p className="text-blue-700  hover:text-green-600">https://piggy-vest-three.vercel.app/</p></a>
            <p>Achieved this project using pure html and css</p>
           </div>
          </main>
          <main className="flex items-center gap-5  bg-gray-100 px-6 py-7 rounded-[20px] shadow-2xl">
            <a className="images" href="https://meta-ai-three.vercel.app/"><img className="w-[300px] h-[200px] rounded-[30px]" src="meta.png" alt="logo"/></a>
           <div className="w-[350px]">
             <a href="https://meta-ai-three.vercel.app/"><p className="text-blue-700  hover:text-green-600">https://meta-ai-three.vercel.app/</p></a>
            <p>Achieved this project using pure html and css</p>
           </div>
          </main>
        </section>
      </div>

    </div>
  )
}

export default Projects
