import React from 'react'
import './Feature.css'
import { featureObjFive, featureObjFour, featureObjOne, featureObjThree, featureObjTwo } from './FeatureData'
import FeaturesHero from './FeaturesHero'


function Features() {
  return (
    <div className='feature'>
      <div className="container">
        <h2 >Why First-Time OKR Users Prefer</h2>
        <h2 className='featureHeader'>Synergita OKR?</h2>
        <div className="row1">
          <FeaturesHero {...featureObjOne} />
          <FeaturesHero {...featureObjTwo} />
          <FeaturesHero {...featureObjThree} />
          <FeaturesHero {...featureObjFour} />
          <FeaturesHero {...featureObjFive} />
        </div>
      </div>
    </div>
  )
}

export default Features
