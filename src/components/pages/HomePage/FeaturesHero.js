import React from 'react'
function FeaturesHero({
  img,
  description,
  headline
}) {
  return (
    <>
      <div className="col-4">
        <img className='featuresImg' src={img} alt="" />
        <h5 className='subHeading'>{headline}</h5>
        <p className="para">{description} </p>
      </div>
    </>
  )
}

export default FeaturesHero
