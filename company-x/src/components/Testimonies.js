import React from 'react'

import LandscapeCard from './LandscapeCard'


const Testimonies = () => {
  return (
    <div className="testimonies">
      <h1 className="test-heading" id="headings">Testimonies</h1>
      <div className="left-test">
        <LandscapeCard
          heading="Heading"
          body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim hic ipsam in, animi magnam reprehenderit accusantium molestiae officia atque possimus."
          customer="Tony Soprano" 
        />
        
        <LandscapeCard
          heading="Heading"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo odio iure adipisci natus est eius?"
          customer="Lester Freeman"
        />
      </div>
      
      <div className="right-test">
        <LandscapeCard
          heading="Heading"
          body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum blanditiis veniam odio perspiciatis maiores, autem praesentium repellat voluptatibus."
          customer="Walter White"
        />
        
        <LandscapeCard
          heading="Heading"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati provident perspiciatis odio quis, aperiam possimus pariatur quos. Mollitia, sit molestias rerum dolorum, consequatur, nihil vitae quisquam excepturi illum quis ipsam doloremque. Dolorum!"
          customer="Arthur Morgan"
        />
      </div>

    </div>
  )
}

export default Testimonies
