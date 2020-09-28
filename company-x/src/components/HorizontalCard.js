import React from 'react'

const HorizontalCard = (props) => {
  
  const { heading, body } = props

  return (
    <div className="horizontal-card">
      <header className="card-header">
        <h3>{heading}</h3>
        <p>{body}</p>
      </header>
    </div>
  )
}

export default HorizontalCard
