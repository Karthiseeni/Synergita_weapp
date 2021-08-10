import React from 'react';
import './Footer.css';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <section className='footer-header row p-3'>
          <div className='col-xl-8 col-md-8 col-sm-12 '>
            <h3>
              Discover the Power of <br /> Continous Employee <br /> Performance and Engagement
            </h3>
          </div>
          <div className='col-xl-4 col-md-4 col-sm-12 '>
            <Button buttonStyle='btn--outline' buttonColor='orange'>Start free trail <i class="fas fa-arrow-right"></i></Button>
          </div>
        </section>
        <div class="container my-5">
          <section class="text-center text-lg-start" >
            <div class="container p-4">
              <section>
                <div class="row">
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5>Company</h5>
                    <ul class="list-unstyled mb-0 text-right">
                      <li>
                        <Link className='text-reset' href="#!">About Us</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Careers</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Partner with Us</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Contact Us</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Success Stories</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Synergita BCP</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5>Learn More</h5>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <Link className='text-reset' href="#!">Pricing</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Intergration</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Security</Link>
                      </li>
                      <li><Link className='text-reset' href="#!">Press Releases</Link></li>
                      <li><Link className='text-reset' href="#!">Presentations</Link></li>
                      <li><Link className='text-reset' href="#!">Cheatsheets</Link></li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5>Top Features</h5>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <Link className='text-reset' href="#!">Performance Management</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Employee Engagement</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">360 Degeree Feedback</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">Performance Reviews</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!">People & Performance Analytics</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5>Contact Us</h5>
                    <ul class="list-unstyled mb-0">
                      <li>
                        <Link className='text-reset' href="#!"><i class="fas fa-phone fa-rotate-90 p-2"></i>(IN) +91-954-276-3279</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!"><i class="fa fa-phone fa-rotate-90 p-2" aria-hidden="true"></i>(US) +1-408-878-EASY</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!"><i class="fa fa-phone fa-rotate-90 p-2" aria-hidden="true"></i>(SG) +65-3163-3050</Link>
                      </li>
                      <li>
                        <Link className='text-reset' href="#!"><i class="fa fa-envelope p-2" aria-hidden="true"></i>info@synergita.com</Link>
                      </li>
                      <li>
                        <ul className='pt-3 p-0' style={{ fontSize: "24px" }}>
                          <Link href="" class="me-2 p-1">
                            <i class="fab fa-facebook-f "></i>
                          </Link>
                          <Link href="" class="me-2 p-1">
                            <i class="fab fa-twitter  "></i>
                          </Link>
                          <Link href="" class="me-2 p-1">
                            <i class="fab fa-linkedin "></i>
                          </Link>
                          <Link href="" class="me-2 p-1">
                            <i class="fab fa-youtube "></i>
                          </Link>
                          <Link href="" class="me-2 p-1">
                            <i class="fab fa-instagram "></i>
                          </Link>
                          <Link href="" class="me-2 p-1">
                            <i class="fab fa-pinterest "></i>
                          </Link>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
      <section className='container row'>
        <div className='col-xl-9 col-md-8 col-sm-12 text-center '>
          <Link className='text-reset '>Terms of Service</Link>
          <Link className='text-reset p-2 '>Privacy Policy</Link>
          <Link className='text-reset p-2'>Support</Link>
          <Link className='text-reset '>Blog</Link>
        </div>
        <div className='col-xl-3 col-md-4 col-sm-12 text-center '>
          <Link className='text-reset'>Copyright &#169; 2020 | Synergita</Link>
        </div>
      </section>
    </div >
  );
}

export default Footer;