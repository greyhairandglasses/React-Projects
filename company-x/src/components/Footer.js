import React from 'react'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info footer-contents">
        <h3>Information</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, natus id. Dolorem, suscipit. Eveniet assumenda eum praesentium ad mollitia, architecto dolorem laudantium ipsum sunt voluptatum! Excepturi explicabo animi ducimus nihil.</p>
      </div>

      <div className="footer-links footer-contents">
        <h3>Quicklinks</h3>
        <ul>
          <li>Go here</li>
          <li>Go there</li>
          <li>Mission Statement</li>
          <li>Success Stories</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer-newsletter footer-contents">
        <h3>Newsletter</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In cum repellendus qui. Alias excepturi corrupti sint nulla quibusdam, dignissimos voluptatibus?</p>
        <form>
          <input  type="text" placeholder="Please enter your e-mail address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Footer
