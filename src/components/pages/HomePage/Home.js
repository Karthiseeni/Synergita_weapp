import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import HeaderSection from './HeaderSection';
import Features from './Features';
function Home() {
  return (
    <>
      <div className='homePage'>
        <HeaderSection />
        <Features />
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjFour} />
      </div>
    </>
  );
}

export default Home;