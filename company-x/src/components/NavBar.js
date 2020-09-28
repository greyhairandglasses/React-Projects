import React, { useState } from 'react'


const NavBar = () => {

  const [visibility, changeVisibility] = useState(false);

  const toggleDisplay = () => {
    changeVisibility(!visibility)
  }

  return (
    <nav>
      <h1 className="nav-name" id="headings">Cmpny X</h1>
      <ul className={`nav-list ${visibility ? 'nav-displayed' : ''}`}>
        <li className="nav-links"><a href="#">Somewhere</a></li>
        <li className="nav-links"><a href="#">Link</a></li>
        <li className="nav-links"><a href="#">Location</a></li>
        <li className="nav-links"><a href="#">Blog</a></li>
        <li className="nav-links"><a href="#">Abous Us</a></li>
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
