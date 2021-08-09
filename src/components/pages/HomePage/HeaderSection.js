import React from 'react'
import { Button } from '../../Button'
import './HeaderSection.css'
function HeaderSection({
  buttonLabel,
  img
}) {
  return (
    <div className='hero-header'>
      <section className='hero-heading'>
        <h1 className='headerOne'>Try OKR for the first time?</h1>
        <p className='headerTwo'>Synergita OKR is exactly what you need.</p>
        <p className='headerTwo'>Nothing more, nothing less.</p>
      </section>
      <Button buttonSize='btn--primary' buttonColor='purple'>
        {buttonLabel} Sign up for OKR <i class="fas fa-arrow-right"></i>
      </Button>
      <img className='header_img' src='images/header_img.png' alt="HeaderImage" />
    </div>
  )
}

export default HeaderSection
