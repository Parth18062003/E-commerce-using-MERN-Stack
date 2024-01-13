import React from 'react'
import Layout from '../components/Layout'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <Layout>
        <Container className='text-center'>
            <h1 style={{fontSize:'8em'}}>404</h1>
            <h2>Page not found</h2>
            <Link to='/'>Back to Home Page</Link>
        </Container>
    </Layout>
  )
}

export default Error