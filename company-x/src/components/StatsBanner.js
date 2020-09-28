import React from 'react'
import analysis from '../icons/analysis.svg'
import goal from '../icons/goal.svg'
import team from '../icons/team.svg'

const StatsBanner = () => {
  return (
    <div className="stats-banner">
      
      {/* <span>Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
      <div className="stats-container">

        <div className="stats-text">
          
          <h3>Stats Bit</h3>
          <p>This is how good we are in numbers... With numbers.</p>

        </div>

        <div className="stats-info">
          
          <div className="solo-stat">
            <img src={analysis} alt="Magnifying glass"/>
            <p>172% analytics growth on avg.</p>
          </div>

          <div className="solo-stat">
            <img src={goal} alt="Arrow in the bullseye" />
            <p>97.8% of client targets hit within 9 months</p>
          </div>

          <div className="solo-stat">
            <img src={team} alt="Circle of avatars" />
            <p>92% workforce happiness</p>
          </div>

        </div>
        {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
      </div>

    </div>
  )
}

export default StatsBanner
