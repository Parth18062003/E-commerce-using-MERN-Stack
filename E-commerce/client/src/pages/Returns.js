import React from "react";
import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Returns() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col  style={{border:'1px solid black',padding:'1em 3em'}}>
          <h2 className="text-center">Returns &amp; Exchange</h2>
            <p className="h5 mt-4">
              <strong>All sales at SneakerHead<sup>&copy;</sup>, are final.</strong>
              <br />
              <br />
              Considering the uniqueness of our offering, exchange or returns
              may not be always possible. We can surely support if it’s a
              genuine size exchange or can provide a GIFT CARD/credit note in
              case your size is not available.
              <br />
              <br />
              Please note that we do not provide support on discounted/SALE
              items so make sure you order the correct size required by you.
              However, we do accept returns/refunds if you receive an incorrect
              or defective item.
              <br />
              <br />
              <strong>Exchange or Returns:</strong>
              <br />
              <br />
              1. Within 7 days of receiving the product.
              <br />
              <br />
              2. You can place your return or exchange request by{" "}
              <Link to="/contact/#contact-form">clicking here</Link> or by mailing
              us at care@sneakerhead.in
              <br />
              <br />
              3. Item should be returned the way you received i.e. the brown
              carton along with the product box, tags intact, and the product
              should be unused.
              <br />
              <br />
              4. You will receive Gift Card/credit or exchange once we have
              received the product and is inspected by our team. Takes up to 4-5
              days.
              <br />
              <br />
              5. Refunds are ONLY processed based on fulfillment errors, such as
              incorrectly shipped, damaged, or missing items.
              <br />
              <br />
              Note: If there is any genuine problem which is not getting solved
              through our Return Centre then please do let us know by mailing us
              at care@sneakerhead.in, we will be happy to assist you.
              <br />
              <br />
              <br />
              <br />
              The below products are excluded from exchange and returns:
              <br />
              <br />
              1. Discounted/Sale Items
              <br />
              <br />
              2. Hype releases i.e. Air Jordan lows/mids/Highs, Dunks, or
              Exclusively Collab items.
              <br />
              <br />
              3. Accessories excluding Retrosuperfuture.
            </p>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Returns;
