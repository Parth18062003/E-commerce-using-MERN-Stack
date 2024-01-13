import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Accordion, Carousel, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import Productmodal from "./ProductModal";
import Loading from "../../components/Loading";
import SizeModal from "../../components/SizeModal";
import AddToCartButton from "../../components/AddToCart";
import LikeProductButton from "../../components/LikeProduct";

const Price = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price / 1);
};

function ViewSingleProduct() {
  const { productname } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const [inCart, setInCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    setIsLiked(isLiked);
  }, [isLiked]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const viewSingleProduct = async (req, res) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-details/:${encodeURIComponent(productname)}`
      );
      setProduct(data.product);
      setInCart(data.product.inCart);
      setIsLiked(data.product.isLiked);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    viewSingleProduct();
  }, [productname]);

  return (
    <>
      <Layout>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <div className="product-details-content my-5">
            <div className="container mt-3">
              <Row>
                {product?.imagesLinks && (
                  <Col lg={8} md={8} sm={12}>
                    {isMobile ? (
                      <>
                        {" "}
                        <Carousel style={{ width: "28rem" }}>
                          {product?.imagesLinks.map((image, index) => (
                            <Carousel.Item key={index}>
                              <img
                                src={image}
                                alt=""
                                style={{ width: "100%" }}
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </>
                    ) : (
                      <>
                        {" "}
                        <div className="row">
                          <div>
                            {product?.imagesLinks &&
                              Array.from({
                                length: Math.ceil(
                                  product.imagesLinks.length / 2
                                ),
                              }).map((row, rowIndex) => (
                                <Row key={rowIndex} className="mb-4">
                                  {[0, 1].map((colIndex) => {
                                    const imageIndex = rowIndex * 2 + colIndex;
                                    return (
                                      imageIndex <
                                        product.imagesLinks.length && (
                                        <Col key={colIndex}>
                                          <Productmodal
                                            img={
                                              product.imagesLinks[imageIndex]
                                            }
                                          />
                                        </Col>
                                      )
                                    );
                                  })}
                                </Row>
                              ))}
                          </div>
                        </div>
                      </>
                    )}
                  </Col>
                )}
                <Col lg={4} md={4} sm={12}>
                  <div className="row flex-column">
                    <div className="col mt-3">
                      <div className="d-flex justify-content-between">
                        <h5 className="text-body-secondary">
                          {product.brand.charAt(0).toUpperCase() +
                            product.brand.slice(1)}
                        </h5>
                        <LikeProductButton
                          productId={product._id}
                          isLiked={isLiked}
                        />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <h2>{product?.productname}</h2>
                    </div>
                    <div className="col mt-3">
                      <p className="h5">
                        <strong>
                          <Price price={product?.price} />
                        </strong>
                      </p>
                    </div>
                    <SizeModal />
                    <div className="col mt-5 text-center">
                      <AddToCartButton
                        productId={product._id}
                        inCart={inCart}
                        style={{
                          backgroundColor: "black",
                          width: "100%",
                          color: "white",
                          padding: "1em",
                        }}
                      />
                    </div>
                    <div className="col mt-5">
                      <Accordion alwaysOpen>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <strong>About Product</strong>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p className="text-body-secondary">
                              {product?.description}
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <strong>Product Details</strong>
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul
                              className="list-group text-body-secondary"
                              id="productdetails"
                            >
                              <p>
                                <li className="list-group-item">
                                  <b>Manufacturer :</b> {product?.manufacturer}
                                </li>
                                <li className="list-group-item">
                                  <b>Country of Origin :</b>{" "}
                                  {product?.countryOfOrigin}
                                </li>
                                <li className="list-group-item">
                                  <b>Imported By :</b> {product?.importedBy}
                                </li>
                                <li className="list-group-item">
                                  <b>Weight :</b> {product?.weight} kg
                                </li>
                                <li className="list-group-item">
                                  <b>Article Code :</b> {product?.articleCode}
                                </li>
                              </p>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

export default ViewSingleProduct;
