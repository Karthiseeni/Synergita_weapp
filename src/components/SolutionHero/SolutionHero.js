import React from 'react';
import './SolutionSection.css';

function SolutionHero({
  // lightBg,
  topLine,
  lightText,
  // lightTextDesc,
  headline,
  description,
  img,
  list,
  alt,
  imgStart
}) {
  return (
    <>
      <div className='solution__hero-section'>
        <div className='container'>
          <div className='row solution__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col-xl-6 col-md-6 col-sm-12'>
              <div className='solution__hero-text-wrapper'>
                <small>{topLine}</small>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className='solution__hero-subtitle' >
                  {description}
                </p>
                {list && list.length ?
                  <ul className='list'>
                    {list.map(li =>
                      <li className='list-para'>{li}</li>)}
                  </ul>
                  : null}
              </div>
            </div>
            <div className='col-xl-6 col-md-6 col-sm-12'>
              <div className='solution__hero-img-wrapper'>
                <img src={img} alt={alt} className='solution__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionHero;