import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddToCartButton from "./AddToCart";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <>
      <button className="next" onClick={onClick}>
        <i className="fa-solid fa-chevron-right fa-xl"></i>
      </button>
    </>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <>
      <button className="prev" onClick={onClick}>
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </button>
    </>
  );
}

const Price = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price / 1);
};

function CardCarousel({ products: propProducts, filterProp }) {
  const [products, setProducts] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const viewProduct = async (req, res) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/v1/product/product-details/filter/tags/${filterProp}`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (propProducts) {
      setProducts(propProducts);
    } else {
      viewProduct();
    }
  }, [propProducts]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container fluid>
        <Row className="my-5">
          <Col>
            <h1 className="card-title my-2">{filterProp.replace("s","'s")}</h1>
          </Col>
          <Col className="cards">
            <Slider {...settings}>
              {products.slice(0,10).map((product) => (
                <div
                  key={product._id}
                  className="d-flex justify-content-center"
                  id="cards"
                  onMouseEnter={() => setHoveredCard(product._id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="card" 
                  style={isMobile ?  {width: "13rem",height:'25rem'} : {width:'21rem'} }>
                    <Link
                      to={`/view-product/${encodeURIComponent(
                        product.productname
                      )}`}
                      className="link-underline link-underline-opacity-0"
                    >
                      <img
                        src={
                          hoveredCard === product._id
                            ? product.imagesLinks[1]
                            : product.imagesLinks[0]
                        }
                        className="card-img-top d-block w-100"
                        alt={product.productname}
                        style={isMobile ?  {height: "230px"} : {height:'300px'} }
                      />
                      <div className="card-body">
                        <p className="card-text text-body-secondary">
                        {(product.brand).charAt(0).toUpperCase()+(product.brand).slice(1)}
                        </p>
                        <h5 className="card-title">{product.productname}</h5>
                        <p className="card-text">
                          <strong>
                            <Price price={product.price} />
                          </strong>
                        </p>
                        <AddToCartButton productId={product._id}/>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardCarousel;
