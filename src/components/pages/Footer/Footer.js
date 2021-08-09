import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <section className='footer-header row'>
          <p className='footer-subscription-heading col-6'>
            Discover the Power of Continous Employee Performance and Engagement
          </p>
          <div className='input-areas col-6'>
            <Button buttonStyle='btn--outline' buttonColor='orange'>Start free trail <i class="fas fa-arrow-right"></i></Button>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Company</h2>
              <Link to='/sign-up'>About Us</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Partner With Us</Link>
              <Link to='/'>Contact Us</Link>
              <Link to='/'>Success Stories</Link>
              <Link to='/'>Synergita BCP</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Learn More</h2>
              <Link to='/'>Pricing</Link>
              <Link to='/'>Integration</Link>
              <Link to='/'>Security</Link>
              <Link to='/'>Press Releases</Link>
              <Link to='/'>Presentation</Link>
              <Link to='/'>Cheatsheets</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Top Features</h2>
              <Link to='/'>Performance Management</Link>
              <Link to='/'>Employee Engagement</Link>
              <Link to='/'>360 Degree Feedback</Link>
              <Link to='/'>Perormance Reviews</Link>
              <Link to='/'>People & Performance Analytics</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>(IN) +91-954-376-3279</Link>
              <Link to='/'>(US) +1-408-878-EASY</Link>
              <Link to='/'>(SG) +65-3163-3050</Link>
              <Link className='social-icons' to='/'>info@synergita.com</Link>
              <div className='social-icons'>
                <Link
                  className='social-icon-link'
                  to={
                    '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                  }
                  target='_blank'
                  aria-label='Youtube'
                >
                  <FaFacebook />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </Link>
                <Link
                  className='social-icon-link'
                  to={
                    '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                  }
                  target='_blank'
                  aria-label='Youtube'
                >
                  <FaYoutube />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <FaTwitter />
                </Link>
                <Link
                  className='social-icon-link'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='footer-bottom row'>
        <div className='col-8'>
          <Link style={{ textDecoration: 'none' }} className='col-2'>Terms of Service</Link>
          <Link style={{ textDecoration: 'none' }} className='col-2'>Privacy Policy</Link>
          <Link style={{ textDecoration: 'none' }} className='col-2'>Support</Link>
          <Link style={{ textDecoration: 'none' }} className='col-2'>Blog</Link>
        </div>
        <div className='col-5'>
          <Link style={{ textDecoration: 'none' }} className='col-2'>Copyright &#169; 2020 | Synergita</Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;