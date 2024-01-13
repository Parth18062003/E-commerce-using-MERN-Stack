import React from 'react'
import Layout from '../../components/Layout'
import { useAuth } from '../../context/auth'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Dashboard() {
  const [auth] = useAuth()
  return (
    <>
    <Layout>
      <Container>
        <Row>
          <Col></Col>
          <Col className='text-center'>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{auth?.user?.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                {auth?.user?.email}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
    </>
  )
}

export default Dashboard