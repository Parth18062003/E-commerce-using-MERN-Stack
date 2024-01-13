import { React, useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import  { useNavigate, useLocation} from 'react-router-dom'

function Spinner1({path = 'login'}) {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 500)
        count === 0 && navigate
        (`/${path}`,{
            state: location.pathname
        })
        return () => {
            clearInterval(interval)
        }
    }, [count, navigate, location, path])

  return (
    <>
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h2 className="text-center">Redirecting in {count} ...</h2>
    </Container>
    </>
  )
}

export default Spinner1;