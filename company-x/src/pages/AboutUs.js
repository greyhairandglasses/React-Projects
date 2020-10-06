import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Map from '../components/Map'

import './AboutUs.css'

const AboutUs = () => {

  const officeLocation = {
    center: {
      lat: 40.748817,
      lng: -73.985428,
    },
    address: '20 W 34th St, New York, NY 10001, United States',
  }

  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <main>
        <div className="about-content">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, consectetur tempore quos vel velit ea tempora temporibus ex voluptates laborum illum iusto maxime eius error veniam explicabo assumenda corrupti autem eaque quas molestias mollitia vitae officia! Sapiente molestias commodi neque ut facilis exercitationem magni soluta quia voluptatum. Ullam dolores optio quis, molestias, consequuntur deleniti odio, voluptatum tenetur cum praesentium aut! Provident cum ullam, veniam harum distinctio quibusdam. Ea dolore quam sequi, reiciendis officia sapiente aliquid ullam minima accusantium nesciunt. Voluptatem eaque temporibus ipsa quisquam id dignissimos sed facere, autem dicta? Magnam rerum et cumque, fugiat illum ratione quas excepturi deserunt?</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic enim eius quae? Inventore, repellat. Adipisci, harum, ducimus molestiae officiis molestias officia alias similique sunt voluptatem aliquid architecto facilis, quasi necessitatibus accusantium! Culpa ex cumque similique temporibus dolores a esse quam doloribus distinctio. Mollitia natus quas suscipit eveniet animi sint fuga ad, assumenda dolores magni, similique sequi voluptatibus facere consectetur ipsam odit unde nam molestias? Quasi vero impedit deserunt laboriosam nisi iure similique obcaecati. Voluptatibus, repellendus.</p>
          <br />
          <Map location={officeLocation} zoomLevel={18}/>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default AboutUs
