import React from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";
import { Card, Col, Container, Row } from "react-bootstrap";

function AdminDashboard() {
  const [auth] = useAuth();
  return (
    <Layout>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{auth?.user?.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href='/dashboard/admin-profile/add-product'>Add Product</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default AdminDashboard;
