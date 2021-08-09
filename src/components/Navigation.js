import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../components/Button'
import './Navigation.css'
import LogoImg from '../images/synergita-logo-1.png'
import dropDown_arrow from '../images/down_arrow.png'
function Navigation() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => { setClick(!click) }
  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
    if (window.innerWidth <= 1248) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  };
  useEffect(() => {
    showButton();
  }, [])
  window.addEventListener('resize', showButton)
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes style={{ color: "black" }} /> : <FaBars style={{ color: "black" }} />}
            </div>
            <Link to='/' onClick={closeMobileMenu}>
              <img className='navbar-logo' src={LogoImg} alt="Synergita-logo" />
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products <img className='down_arrow' src={dropDown_arrow} alt="down_arrow" /></Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Customers</Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Company <img className='down_arrow' src={dropDown_arrow} alt="down_arrow" /></Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links pr-3' onClick={closeMobileMenu}>Resources <img className='down_arrow' src={dropDown_arrow} alt="down_arrow" /></Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Pricing</Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Book a Demo</Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to='/signup' className='btn-link' onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline' buttonColor='orange'>Start free trail</Button>
                  </Link>
                ) : (
                  // <Link to='/signup' className='btn-link' onClick={closeMobileMenu}>
                  <Button className='btn--outline ' buttonStyle='btn--mobile' buttonColor='orange'>Start free trail </Button>
                  // </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navigation
