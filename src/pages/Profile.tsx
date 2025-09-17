// import React from 'react'
const Profile = () => {
  return (
    <div id="profile" className="profile min-h-screen px-6 md:px-[160px] py-10">
      {/* Title */}
      <section className="flex justify-center">
        <h1 className=" text-blue-700 text-[32px] md:text-[45px] font-bold pb-8 text-center">
          My Profile
        </h1>
      </section>

      {/* Content */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Image */}
        <main>
          <img
            className="biglogo w-[250px] h-[350px] md:w-[350px] md:h-[500px] rounded-[20px] object-cover shadow-lg"
            src="biglogo.jpg"
            alt="logo"
          />
        </main>

        {/* Text */}
        <main className="w-full md:w-[700px]">
          <h1 className="text-green-950 text-[18px] md:text-[25px] leading-relaxed text-center md:text-left">
            Motivated and detail-oriented Software Developer with a
            strong foundation in HTML, CSS, JavaScript, React.js, MongoDB,
            Express.js, and Node.js. Passionate about building clean,
            responsive, and interactive web interfaces.  
            Eager to join a collaborative team where I can learn problem-solving
            skills, creativity, and a commitment to writing efficient,
            maintainable code, grow, and contribute to real-world applications.
          </h1>
        </main>
      </section>
    </div>
  );
};

export default Profile;
