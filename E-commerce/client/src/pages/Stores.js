import { React, useRef, useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";

function Stores() {
  const mumbaiRef = useRef(null);
  const delhiRef = useRef(null);
  const bangaloreRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scrollToSection = () => {
      switch (location.hash) {
        case "#mumbai":
          mumbaiRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "#delhi":
          delhiRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        case "#bangalore":
          bangaloreRef.current.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    };

    if (location.hash) {
      scrollToSection();
    }
  }, [location]);
  return (
    <Layout>
      <Container fluid>
        <Row>
          <div ref={mumbaiRef}></div>
          <Col className="mx-5 my-4">
            <h2>Mumbai</h2>
            <p className="text-muted">
              Ground Floor, Yashwant Smruti Building, 12th Road, Khar West,
              Off-Linking Road, Near Madhu Park, Mumbai-400052
            </p>
            <p>Phone: +91-9628736892</p>
            <p>Email: info@sneakerhead.com</p>
            <ul>
              Opening Hours:
              <li style={{ listStyle: "none" }}>Timings: 10am - 11pm</li>
            </ul>
          </Col>
          <Col className="my-3">
            <Card className="mx-2" style={{ width: "50rem" }}>
              <Card.Img
                variant="top"
                src="https://www.highsnobiety.com/static-assets/dato/1681910425-best-sneaker-stores-new-york-45.jpg?fp-x=0.5&fp-y=0.5&fit=crop&auto=compress%2Cformat&cs=srgb&ar=1199%3A800&w=1199"
              />
              <div className="card-img-overlay">
                <h4>
                  <Badge pill bg="light" text="dark">
                    Mumbai
                  </Badge>
                </h4>
              </div>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <div ref={delhiRef}></div>
          <Col className="mx-5 my-4">
            <h2>Delhi</h2>
            <p className="text-muted">
              Shop no 1, 337, Gali no 11, Opposite Hans Charitable Hospital,
              Hakikat Nagar, GTB Nagar, Delhi
            </p>
            <p>Phone: +91-9767635912</p>
            <p>Email: info@sneakerhead.com</p>
            <ul>
              Opening Hours:
              <li style={{ listStyle: "none" }}>Timings: 10am - 11pm</li>
            </ul>
          </Col>
          <Col className="my-3">
            <Card className="mx-2" style={{ width: "50rem" }}>
              <Card.Img
                variant="top"
                src="https://img.buzzfeed.com/buzzfeed-static/complex/images/DSC_7452_p4rbm3/None.jpg?downsize=1040:*&output-format=auto&output-quality=auto"
              />
              <div className="card-img-overlay">
                <h4>
                  <Badge pill bg="light" text="dark">
                    Delhi
                  </Badge>
                </h4>
              </div>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <div ref={bangaloreRef}></div>
          <Col className="mx-5 my-4">
            <h2>Bangalore</h2>
            <p className="text-muted">
              Maheswari Nagar, 1St Main Road, Near Titan Watch World &
              Electronics, Bangalore, Karnataka 560057
            </p>
            <p>Phone: +91-9965295412</p>
            <p>Email: info@sneakerhead.com</p>
            <ul>
              Opening Hours:
              <li style={{ listStyle: "none" }}>Timings: 10am - 11pm</li>
            </ul>
          </Col>
          <Col className="my-3">
            <Card className="mx-2" style={{ width: "50rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.sanity.io/images/c1chvb1i/production/983fb14f1383fbba477c6fe54de39afb7884a393-1100x735.jpg/undefeated-shibuya-in-store.jpg"
              />
              <div className="card-img-overlay">
                <h4>
                  <Badge pill bg="light" text="dark">
                    Bangalore
                  </Badge>
                </h4>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Stores;
