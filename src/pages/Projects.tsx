// import React from 'react'
const Projects = () => {
  return (
    <div id="projects" className="min-h-screen px-6 md:px-[160px] py-10">
      {/* Title */}
      <div className="flex justify-center">
        <h1 className="text-blue-700 text-[32px] md:text-[45px] font-bold pb-8 text-center">
          Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Project Card */}
        <main className="flex flex-col sm:flex-row items-center gap-5 bg-gray-100 p-6 rounded-[20px] shadow-2xl">
          <a href="https://move-io.vercel.app/">
            <img
              className="w-full sm:w-[300px] h-[200px] object-cover rounded-[30px]"
              src="move.png"
              alt="Move Project"
            />
          </a>
          <div className="w-full sm:w-[350px] text-center sm:text-left">
            <a href="https://move-io.vercel.app/">
              <p className="text-blue-700 hover:text-green-600 break-words">
                https://move-io.vercel.app/
              </p>
            </a>
            <p>Achieved this project using pure HTML and CSS</p>
          </div>
        </main>

        <main className="flex flex-col sm:flex-row items-center gap-5 bg-gray-100 p-6 rounded-[20px] shadow-2xl">
          <a href="https://myuser.vercel.app/">
            <img
              className="w-full sm:w-[300px] h-[200px] object-cover rounded-[30px]"
              src="userform.png"
              alt="User Form Project"
            />
          </a>
          <div className="w-full sm:w-[350px] text-center sm:text-left">
            <a href="https://myuser.vercel.app/">
              <p className="text-blue-700 hover:text-green-600 break-words">
                https://myuser.vercel.app/
              </p>
            </a>
            <p>Achieved this project with React</p>
          </div>
        </main>

        <main className="flex flex-col sm:flex-row items-center gap-5 bg-gray-100 p-6 rounded-[20px] shadow-2xl">
          <a href="https://chrome-replica-brown.vercel.app/">
            <img
              className="w-full sm:w-[300px] h-[200px] object-cover rounded-[30px]"
              src="extension.png"
              alt="Chrome Extension Project"
            />
          </a>
          <div className="w-full sm:w-[350px] text-center sm:text-left">
            <a href="https://chrome-replica-brown.vercel.app/">
              <p className="text-blue-700 hover:text-green-600 break-words">
                https://chrome-replica-brown.vercel.app/
              </p>
            </a>
            <p>Achieved this project using pure HTML and CSS</p>
          </div>
        </main>

        <main className="flex flex-col sm:flex-row items-center gap-5 bg-gray-100 p-6 rounded-[20px] shadow-2xl">
          <a href="https://mtn-data-site-replica.vercel.app/">
            <img
              className="w-full sm:w-[300px] h-[200px] object-cover rounded-[30px]"
              src="mtn.png"
              alt="MTN Project"
            />
          </a>
          <div className="w-full sm:w-[350px] text-center sm:text-left">
            <a href="https://mtn-data-site-replica.vercel.app/">
              <p className="text-blue-700 hover:text-green-600 break-words">
                https://mtn-data-site-replica.vercel.app/
              </p>
            </a>
            <p>Achieved this project using pure HTML and CSS</p>
          </div>
        </main>

        <main className="flex flex-col sm:flex-row items-center gap-5 bg-gray-100 p-6 rounded-[20px] shadow-2xl">
          <a href="https://moniepoint-seven.vercel.app/">
            <img
              className="w-full sm:w-[300px] h-[200px] object-cover rounded-[30px]"
              src="moniepoint.png"
              alt="Moniepoint Project"
            />
          </a>
          <div className="w-full sm:w-[350px] text-center sm:text-left">
            <a href="https://moniepoint-seven.vercel.app/">
              <p className="text-blue-700 hover:text-green-600 break-words">
                https://moniepoint-seven.vercel.app/
              </p>
            </a>
            <p>
              Achieved this project using pure HTML and CSS during a group
              presentation on Moniepoint
            </p>
          </div>
        </main>

        <main className="flex flex-col sm:flex-row items-center gap-5 bg-gray-100 p-6 rounded-[20px] shadow-2xl">
          <a href="https://piggy-vest-three.vercel.app/">
            <img
              className="w-full sm:w-[300px] h-[200px] object-cover rounded-[30px]"
              src="piggy.png"
              alt="PiggyVest Project"
            />
          </a>
          <div className="w-full sm:w-[350px] text-center sm:text-left">
            <a href="https://piggy-vest-three.vercel.app/">
              <p className="text-blue-700 hover:text-green-600 break-words">
                https://piggy-vest-three.vercel.app/
              </p>
            </a>
            <p>Achieved this project using pure HTML and CSS</p>
          </div>
        </main>

        <main className="flex flex-col sm:flex-row items-center gap-5 bg-gray-100 p-6 rounded-[20px] shadow-2xl">
          <a href="https://meta-ai-three.vercel.app/">
            <img
              className="w-full sm:w-[300px] h-[200px] object-cover rounded-[30px]"
              src="meta.png"
              alt="Meta AI Project"
            />
          </a>
          <div className="w-full sm:w-[350px] text-center sm:text-left">
            <a href="https://meta-ai-three.vercel.app/">
              <p className="text-blue-700 hover:text-green-600 break-words">
                https://meta-ai-three.vercel.app/
              </p>
            </a>
            <p>Achieved this project using pure HTML and CSS</p>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Projects;

