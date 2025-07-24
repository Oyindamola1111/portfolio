// import React from 'react'

const Profile = () => {
  return (
    <div id="profile" className="profile h-[100vh] ">
      <section className="flex justify-center">
        <h1 className="text-blue-700 text-[45px] font-bold pb-[50px]">My Profile</h1>
      </section>
      <section className="flex justify-between items-center">
        <main>
          <img className="biglogo w-[350px] h-[500px]" src="biglogo.jpg" alt="logo" />
        </main>
        <main>
          <h1 className="text-green-950 w-[700px] text-[25px]">
            Motivated and detail-oriented Software Developer with a
            strong foundation in HTML, CSS, JavaScript,React js,MongoDB,Express js,Node js. Passionate
            about building clean, responsive, and interactive web interfaces.
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
