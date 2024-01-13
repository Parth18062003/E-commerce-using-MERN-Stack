import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <Container fluid className="footer mt-5" style={{minHeight:'20vh'}}>
        <Row>
          <Col md={4}>
            <Row className="footer-links my-3">
              <Col xs={4} md={6} className="mb-3">
                <h5>Info</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="/" className="nav-a p-0 text-muted">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/contact" className="nav-a p-0 text-muted">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/faqs" className="nav-a p-0 text-muted">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/stores" className="nav-a p-0 text-muted">
                      Stores
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={6} md={6} className="mb-3">
                <h5>Policies</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="/privacy-policy"
                      className="nav-a p-0 text-muted"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/returns-exchange"
                      className="nav-a p-0 text-muted"
                    >
                      Returns and Exchange
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/terms-conditions" className="nav-a p-0 text-muted">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="/orders-shippings" className="nav-a p-0 text-muted">
                      Orders and Shippings
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col md={8}>
            <Row>
              <Col xs={12} md={6} className="footer-icons my-3 mb-3">
                <h5 className="nav flex-row justify-content-center">
                  Our Socials
                </h5>
                <ul className="nav flex-row justify-content-around mt-4">
                  <li className="nav-item mb-2">
                    <Link
                      to="https://www.facebook.com/"
                      className="nav-a p-0 text-muted"
                    >
                      <i className="fa-brands fa-facebook fa-xl"></i>
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="https://twitter.com/?lang=en-in"
                      className="nav-a p-0 text-muted"
                    >
                      <i className="fa-brands fa-twitter fa-xl"></i>
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="https://www.instagram.com/"
                      className="nav-a p-0 text-muted"
                    >
                      <i className="fa-brands fa-instagram fa-xl"></i>
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="https://www.youtube.com/"
                      className="nav-a p-0 text-muted"
                    >
                      <i className="fa-brands fa-youtube fa-xl"></i>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6} className="my-3 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-basic" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col className="d-flex flex-column flex-sm-row justify-content-between py-2 border-top">
          <p>
            <sup>
              <i className="fa-regular fa-copyright fa-sm"></i>
            </sup>
            2023 SneakerHead, Inc. All rights reserved.
          </p>
        </Col>
      </Container>
    </>
  );
}

export default Footer;
