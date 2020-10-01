import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

  const [visibility, changeVisibility] = useState(false);

  const toggleDisplay = () => {
    changeVisibility(!visibility)
  }

  return (
    <nav>
      <NavLink className="nav-links" to="/"><h1 className="nav-name" id="headings">Cmpny X</h1></NavLink>
      <ul className={`nav-list ${visibility ? 'nav-displayed' : ''}`}>
        <li><NavLink className="nav-links" to="/">Products & Solutions</NavLink></li>
        <li><NavLink className="nav-links" to="/">Services & Consulting</NavLink></li>
        <li><NavLink className="nav-links" to="/">Affiliates</NavLink></li>
        <li><NavLink className="nav-links" to="/blog" activeClassName="current-page">Blog</NavLink></li>
        <li><NavLink className="nav-links" to="/about" activeClassName="current-page">About Us</NavLink></li>
      </ul>
      <div className="hamburger" onClick={toggleDisplay}>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
    </nav>
  )
}

export default NavBar


// import React from 'react'

// const NavBar = () => {
//   return (
//     <nav>
//       <h1 className="nav-name" id="headings">Cmpny X</h1>
//       <ul className="nav-list">
//         <li>Somewhere</li>
//         <li>A Place</li>
//         <li>Another Location</li>
//         <li>Another-nother Location</li>
//         <li>Where are we?</li>
//       </ul>
//     </nav>
//   )
// }

// export default NavBar
