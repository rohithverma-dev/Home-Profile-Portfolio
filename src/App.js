import React, { useState } from 'react'
import "./App.css"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function App() {
  const [name, setName] = useState("HOME")
  return (
    <>
      <div className="profile-navbar">
        <div className="logo">Portfolio.</div>
        <div className="all-sections">
          <a onClick={() => setName("HOME")} className={(name === "HOME") ? "active" : ""} href="#" style={{ '--i': 1 }} >Home</a>
          <a onClick={() => setName("SKILLS")} className={(name === "SKILLS") ? "active" : ""} href="#" style={{ '--i': 2 }}>Skills</a>
          <a onClick={() => setName("TIMELINE")} className={(name === "TIMELINE") ? "active" : ""} href="#" style={{ '--i': 3 }}>Timeline</a>
          <a onClick={() => setName("PROJECTS")} className={(name === "PROJECTS") ? "active" : ""} href="#" style={{ '--i': 4 }}>Projects</a>
          <a onClick={() => setName("CONTACT")} className={(name === "CONTACT") ? "active" : ""} href="#" style={{ '--i': 5 }}>Contact</a>
        </div>
      </div>
      <div className="profile-section">
        <div className="left-section">
          <h3 id="fullstack">FullStack-Developer</h3>
          <h1>Rohit Verma</h1>
          <div className="container">
            <div className="sec-texts">
              <div className='skills'>Frontend Developer</div>
              <div className='skills'>Backend Developer</div>
              <div className='skills'>UI/UX Designer</div>
            </div>
          </div>
          <p><span>Full Stack Web Developer with expertise in React.js, CSS, and JavaScript, passionate about building dynamic and responsive web applications.</span></p>
          <a href="#" target='_blank' className="btn">Download Resume</a>
          <a href="#" className="btn2">Hire Me Now</a>
          <div className="social-media">
            <a href="#" target='_blank' style={{ '--i': '7' }}><FaGithub /></a>
            <a href="#" target='_blank' style={{ '--i': '8' }}><FaTwitter /></a>
            <a href="#" target='_blank' style={{ '--i': '9' }}><FaLinkedin /> </a>
          </div>

        </div>
        <div className="right-section">
          <div className="">
            <img src="/portfolio2 copy.png" alt="" />
          </div>
            <div className="image_shadow"></div>
        </div>
      </div>
    </>
  )
}

export default App
