import React from "react";
import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";

function Orders() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col>
            <h2 className="text-center">Order & Shipping</h2>
            <br />
            <h4>
              <b>
                How long does it usually take to deliver an order? <br />
                <br />
              </b>
            </h4>
            <h5>
              From the date of purchase you can expect delivery within 4-6 Days.
              Free shipping on orders above Rs. 9,999.
            </h5>
            <br />
            <h4>
              <b>
                How do I track the status of my order? <br />
                <br />
              </b>
            </h4>
            <h5>
              Upon dispatch of the order, you will receive a tracking number
              along with an URL within 2-5 days. You can use that URL to track
              your order.
            </h5>
            <br />
            <h4>
              <b>
                I didn't receive a tracking number and its still processing?{" "}
                <br />
                <br />
              </b>
            </h4>
            <h5>
              You should receive a shipping confirmation email within 3-5 days
              of your purchase or when it is dispatched.
            </h5>
            <br />
            <h4>
              <b>
                Why isn't my order showing up on the tracking page? <br />
                <br />
              </b>
            </h4>
            <h5>
              Orders that haven’t been shipped or scanned by Bluedart won’t show
              up on the tracking page. Please allow 3-5 business days for this
              information to appear.
            </h5>
            <br />
            <h4>
              <b>
                I only received one of the items in my order, where is the rest?{" "}
                <br />
                <br />
              </b>
            </h4>
            <h5>
              Web orders can come from multiple warehouses. If you only receive
              part of your shipment, don’t worry, you’ll receive tracking on
              your other goods as they ship.
            </h5>
            <br />
            <h4>
              <b>
                Will you keep my credit card information on file? <br />
                <br />
              </b>
            </h4>
            <h5>
              No, we do not store your payment instrument’s details on our
              website. All your payment information is handled by our payments
              provider Instamojo.
            </h5>
            <br />
            <h4>
              <b>
                Can I use an online credit in-store? <br />
                <br />
              </b>
            </h4>
            <h5>
              Unfortunately, Superkicks online credits can only be used on
              www.superkicks.in, and cannot be used in-store.
            </h5>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Orders;
