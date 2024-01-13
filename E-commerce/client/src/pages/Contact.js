import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Contact() {
  const contactFormRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Container>
        <Row>
          <Col xl={3}></Col>
          <Col xl={6} >
            <Col className="text-center">
              <h2>Contact</h2>
            </Col>
            <Col>
              <p className="h4 my-4 mx-4">
                <h3>Online Order and Enquiries</h3>
              </p>
              <p className="mx-4 h4">
                Customer care mail id - care@sneakerhead.in
                <br />
                <br />
                Customer Care number: 022-41498322
              </p>
            </Col>
            <Col className="my-3">
              <p className="h4 mx-4">
                <strong>Find Us</strong>
              </p>
              <br />
              <ul className="h5 my-2" style={{ listStyle: "none" }}>
                <li>
                  <strong>Mumbai</strong>
                </li>
                <li className="text-muted mt-2">
                  Ground Floor, Yashwant Smruti Building, 12th Road, Khar West,
                  Off-Linking Road, Near Madhu Park, Mumbai-400052
                </li>
                <li className="text-muted mt-2">Phone: +91-9628736892</li>
                <li className="text-muted mt-2">Email: info@sneakerhead.com</li>
                <li className="text-muted mt-2">Timing: 10am - 11pm</li>
              </ul>
              <br />
              <ul className="h5 my-2" style={{ listStyle: "none" }}>
                <li>
                  <strong>Delhi</strong>
                </li>
                <li className="text-muted mt-2">
                  Shop no 1, 337, Gali no 11, Opposite Hans Charitable Hospital,
                  Hakikat Nagar, GTB Nagar, Delhi
                </li>
                <li className="text-muted mt-2">Phone: +91-9767635912</li>
                <li className="text-muted mt-2">Email: info@sneakerhead.com</li>
                <li className="text-muted mt-2">Timing: 10am - 11pm</li>
              </ul>
              <br />
              <ul className="h5 my-2" style={{ listStyle: "none" }}>
                <li>
                  <strong>Bangalore</strong>
                </li>
                <li className="text-muted">
                  Maheswari Nagar, 1St Main Road, Near Titan Watch World &
                  Electronics, Bangalore, Karnataka 560057
                </li>
                <li className="text-muted mt-2">Phone: +91-9965295412</li>
                <li className="text-muted mt-2">Email: info@sneakerhead.com</li>
                <li className="text-muted mt-2">Timing: 10am - 11pm</li>
              </ul>
            </Col>
          </Col>
          <Col xl={3}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col className="form mt-4" ref={contactFormRef} id="contact-form">
            <Form>
              <h3 className="text-muted">Contact Us</h3>
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="" />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="" />
                </Col>
              </Row>
              <Col>
                <Form.Group className="mt-3 mb-3" controlId="">
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mt-3 mb-3" controlId="">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Select aria-label="Subject">
                  <option>Subject</option>
                  <option value="1">Product Inquiry</option>
                  <option value="2">Order Delivery</option>
                  <option value="3">Payment/Refund</option>
                  <option value="4">Exchange</option>
                  <option value="5">Other</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Group
                  className="mt-3 mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="basic" type="submit" value="Submit">
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Contact;
