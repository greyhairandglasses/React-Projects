import React from 'react'

const LandscapeCard = (props) => {
  const { heading, body, customer} = props
  return (
    <div>
      <div className="landscape-card">
        <h3 className="landscape-heading">{heading}</h3>
        <p className="landscape-body">{body}</p>
        <p className="landscape-customer">{customer}</p>
      </div>
    </div>
  )
}

export default LandscapeCard
