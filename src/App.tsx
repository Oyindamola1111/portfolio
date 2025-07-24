// import React from 'react'
import Header from "./static/Header"
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Projects from "./pages/Projects"
import Framework from "./pages/Framework"
import Tools from "./pages/Tools"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div>
       {/* <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Framework" element={<Framework/>}/>
        <Route path="/Tools" element={<Tools/>}/>
        <Route path="/Contact" element={<Contact/>}/>
       </Routes>
       </BrowserRouter> */}
       <Header/>
       <section id="home">
        <Home/>
       </section>
       <section id="profile">
        <Profile/>
       </section>
       <section id="projects">
        <Projects/>
       </section>
       <section id="framework">
        <Framework/>
       </section>
       <section id="tools">
        <Tools/>
       </section>
       <section id="contact">
        <Contact/>
       </section>
    </div>
  )
}

export default App
