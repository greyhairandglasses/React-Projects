import React from 'react'
import HorizontalCard from './HorizontalCard'

const CardContainer = () => {
  return (
    <>
      <h1 className="how-we" id="headings">How We Take Your Money</h1>
      <section className="card-container">
        <HorizontalCard
          heading="A heading"
          body="Harum ut illo nulla quia, veniam laudantium ipsam! Perferendis consequuntur qui quasi." 
        />
        <HorizontalCard
          heading="Another heading"
          body="Dolor totam incidunt in at quia maiores quasi fugiat ex expedita deserunt." 
          />
        <HorizontalCard
          heading="Heading for heading"
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </section>
    </>
  )
}

export default CardContainer
