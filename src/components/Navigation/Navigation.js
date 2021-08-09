import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../components/Button/Button'
import './Navigation.css'
import LogoImg from '../../assets/images/synergita-logo-1.png'
import dropDown_arrow from '../../assets/images/down_arrow.png'
function Navigation() {
  const [click, setClick] = useState(false)
  const [button] = useState(true)
  const handleClick = () => { setClick(!click) }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar navbar-expand-lg p-2">
          <div className="container-fluid">
            <button class="navbar-toggler ml-auto custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-target="#navbarTogglerDemo03"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ><span class="navbar-toggler-icon" onClick={handleClick}>  {click ? <FaTimes style={{ color: "black" }} /> : <FaBars style={{ color: "black" }} />}</span>
            </button>
            <Link className="navbar-brand" href="/"><img className='logoimg m-3' src={LogoImg} alt='Synergita-logo' /></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Products <img src={dropDown_arrow} alt="" /></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/" >Customers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/" tabindex="-1" aria-disabled="true">Company <img src={dropDown_arrow} alt="" /></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/" tabindex="-1" aria-disabled="true">Resources <img src={dropDown_arrow} alt="" /></Link>
                </li>
              </ul>
              <div className="navbar-left">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" href="/">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">Contact us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/" tabindex="-1" aria-disabled="true">Book a Demo</Link>
                  </li>
                  <li className="nav-item">
                    {button ? (
                      <Button buttonColor='orange'>Start free trail</Button>
                    ) : (null)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navigation
