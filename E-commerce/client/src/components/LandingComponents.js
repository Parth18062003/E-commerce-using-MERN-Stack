import React, { useEffect, useState } from 'react'
import video1 from '../components/videos/vid1.mp4'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function LandingCards(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
    <>
      <Container fluid>
    <Col className='mx-3 my-5 mb-1'>
      {props.title && <h3 className=''>{props.title}</h3>}
    </Col>
    <Row>
      <Col className="d-flex flex-wrap">
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <Link to={props.link1}>
            <Card className="mx-2" style={!isMobile ? { width: '30rem' } : {width:'28rem'}}>
              <Card.Img variant="top" src={props.img1} />
              <div className='card-img-overlay'>
                <h4><Badge pill bg="light" text="dark">{props.pill1}</Badge></h4>
              </div>
            </Card>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <Link to={props.link2} >
            <Card className="mx-2" style={!isMobile ? { width: '30rem' } : {width:'28rem'}}>
              <Card.Img variant="top" src={props.img2} />
              <div className='card-img-overlay'>
                <h4><Badge pill bg="light" text="dark">{props.pill2}</Badge></h4>
              </div>
            </Card>
          </Link>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
          <Link to={props.link3}>
            <Card className="mx-2" style={!isMobile ? { width: '30rem' } : {width:'28rem'}}>
              <Card.Img variant="top" src={props.img3} />
              <div className='card-img-overlay'>
                <h4><Badge pill bg="light" text="dark">{props.pill3}</Badge></h4>
              </div>
            </Card>
          </Link>
        </Col>
      </Col>
    </Row>
  </Container>
    </>
  )
}

export const LandingVideo = () => {

    return (
      <>
      <Container fluid className='px-5'>
      <div className="video-container">
        <video width="100%" height="100%" autoPlay muted loop controls={false}>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </Container>
      </>
    );
  };

 export function Landingimg(props) {
    return (
      <>
      <div className="container-fluid text-center mt-3 px-5">
        <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/efc21be6-ab7a-44d0-9e03-09755bc6133a/nike-just-do-it.jpg" className="img-fluid" alt="Nike InfinityRN 4" useMap="#coverimg"/>
        <map name="coverimg"> 
        <area shape="default" coords="" href="/view-product/Nike InfinityRN 4" alt="Nike InfinityRN 4" />
        </map>  
      </div>
      </>
    )
  }
