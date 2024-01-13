import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Price = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price / 1);
};

function ViewProduct() {
  const [products, setProducts] = useState();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);

  const viewProduct = async (req, res) => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/product/product-details");
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewProduct();
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <h2 className="text-center mb-4">All Products</h2>
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              {" "}
              <Row className="my-3">
                {products?.map((product) => (
                  <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={3}>
                    <div
                      className="d-flex justify-content-center my-2"
                      id="cards"
                      onMouseEnter={() => setHoveredCard(product._id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className="card"
                        style={{ width: "19rem", height: "30rem" }}
                      >
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
                            style={{ height: "300px" }}
                          />
                          <div className="card-body">
                            <p className="card-text text-body-secondary">
                              {product.brand}
                            </p>
                            <h5 className="card-title">
                              {product.productname}
                            </h5>
                            <p className="card-text">
                              <strong>
                                <Price price={product.price} />
                              </strong>
                            </p>
                            <a href="/" className="btn btn-basic mt-1">
                              Add to Cart
                            </a>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export default ViewProduct;
