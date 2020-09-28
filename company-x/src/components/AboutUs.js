import React from 'react'

import img from '../imgs/stairs.jpg'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-text">
        <h1 className="about-heading" id="headings">About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae tempora numquam dolores tempore aliquam maxime quaerat, dolorum magnam vel exercitationem commodi atque, earum aperiam ullam! Nulla rem non tempore.
          Dolorem consequatur obcaecati autem dolor? Explicabo odit officia quae deserunt magnam dolorem perferendis eum. Odit quisquam, deserunt ducimus facilis doloribus atque consequuntur nobis reprehenderit mollitia tempora laboriosam quibusdam omnis totam.
        Hic ea quos, praesentium mollitia architecto aliquid tempora fuga quibusdam nam veniam inventore vel cum excepturi animi, quia nobis! Molestias deleniti sit voluptatem tenetur, molestiae nam in repellat. Modi, cumque!</p>
      </div>
      {/* <div className="about-img"> */}
        <img className="about-img" src={img} alt="A staircase" />
      {/* </div> */}
      {/* <span>Photo by <a href="https://unsplash.com/@kovacsz1?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Z S</a> on <a href="https://unsplash.com/s/photos/stairs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
    </div>
  )
}

export default AboutUs
