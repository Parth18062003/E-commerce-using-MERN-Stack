import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Loading() {
  return (
    <Container>
        <Row>
            <Col></Col>
            <Col>
            <img src="https://media.tenor.com/QCGvP7rgeq8AAAAC/jordans-shoes.gif" alt="Fetching Products" />
            <h2 className='text-center'>Fetching Products</h2>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}

export default Loading