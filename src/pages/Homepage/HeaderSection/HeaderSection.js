import React from 'react'
import { Button } from '../../../components/Button/Button'
import './HeaderSection.css'
import headerImg from '../../../assets/images/header_img.png'
function HeaderSection({
  buttonLabel
}) {
  return (
    <div className='hero-header'>
      <section className='hero-heading'>
        <h1 className='headerOne'>Try OKR for the first time?</h1>
        <h6 className='headerTwo'>Synergita OKR is exactly what you need.</h6>
        <h6 className='headerTwo pb-3'>Nothing more, nothing less.</h6>
      </section>
      <Button className='btn p-3' buttonSize='btn--outline' buttonColor='purple'>
        {buttonLabel} Sign up for OKR <i class="fas fa-arrow-right p-2 pt-1  pb-0"></i>
      </Button>
      <img className='header_img' src={headerImg} alt="HeaderImage" />
    </div>
  )
}

export default HeaderSection