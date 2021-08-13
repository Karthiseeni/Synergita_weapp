import './Footer.css';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <section className='footer-header row p-3'>
          <div className='col-xl-8 col-md-8 col-sm-12 '>
            <h3 className='px-3'>
              Discover the Power of <br /> Continous Employee <br /> Performance and Engagement
            </h3>
          </div>
          <div className='col-xl-4 col-md-4 col-sm-12 '>
            <Button buttonStyle='btn--outline' buttonColor='orange'>Start free trail <i className="fas fa-arrow-right"></i></Button>
          </div>
        </section>
        <div className="container my-3 pt-5">
          <section className="text-center text-lg-start" >
            <div className="container px-5 mx-3">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5>Company</h5>
                  <ul className="list-unstyled mb-0">
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
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5>Learn More</h5>
                  <ul className="list-unstyled mb-0">
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
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5>Top Features</h5>
                  <ul className="list-unstyled mb-0">
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
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5>Contact Us</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link className='text-reset' href="#!"><i className="fas fa-phone fa-rotate-90 p-2"></i>(IN) +91-954-276-3279</Link>
                    </li>
                    <li>
                      <Link className='text-reset' href="#!"><i className="fa fa-phone fa-rotate-90 p-2" aria-hidden="true"></i>(US) +1-408-878-EASY</Link>
                    </li>
                    <li>
                      <Link className='text-reset' href="#!"><i className="fa fa-phone fa-rotate-90 p-2" aria-hidden="true"></i>(SG) +65-3163-3050</Link>
                    </li>
                    <li>
                      <Link className='text-reset' href="#!"><i className="fa fa-envelope p-2" aria-hidden="true"></i>info@synergita.com</Link>
                    </li>
                    <li>
                      <ul className='p-0 pt-3' style={{ fontSize: "24px" }}>
                        <Link href="" className="me-2 ">
                          <i className="fab fa-facebook-f "></i>
                        </Link>
                        <Link href="" className="me-2">
                          <i className="fab fa-twitter  "></i>
                        </Link>
                        <Link href="" className="me-2">
                          <i className="fab fa-linkedin "></i>
                        </Link>
                        <Link href="" className="me-2">
                          <i className="fab fa-youtube "></i>
                        </Link>
                        <Link href="" className="me-2">
                          <i className="fab fa-instagram "></i>
                        </Link>
                        <Link href="" className="me-2 p-1">
                          <i className="fab fa-pinterest "></i>
                        </Link>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container pt-2">
        <section className='container px-5 mx-3'>
          <div className='row'>
            <div className='col-xl-9 col-md-8 col-sm-12 '>
              <Link className='text-reset p-3 px-0'>Terms of Service</Link>
              <Link className='text-reset p-3 '>Privacy Policy</Link>
              <Link className='text-reset p-3'>Support</Link>
              <Link className='text-reset p-3'>Blog</Link>
            </div>
            <div className='col-xl-3 col-md-4 col-sm-12 text-center '>
              <Link className='text-reset'>Copyright &#169; 2020 | Synergita</Link>
            </div>
          </div>
        </section>
      </div>
    </div >
  );
}

export default Footer;