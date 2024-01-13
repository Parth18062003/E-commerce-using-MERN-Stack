import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import AddToCartButton from "../../components/AddToCart";

const Price = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price / 1);
};

function ViewFilteredProduct() {
  const navigate = useNavigate();
  const { attributes, values } = useParams();
  const [products, setProducts] = useState();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const viewProduct = async (req, res) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-details/filter/:${encodeURIComponent(attributes)}/:${encodeURIComponent(values)}?page=${currentPage}`
      );
      setTotalProducts(data.totalProducts)
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewProduct();
  }, [currentPage]);

  const navigateBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <Container>
          <h2 className="mb-3">{attributes==='incart' ? "Cart Item" : values.toUpperCase() }</h2>
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              {products.length === 0 ? (
                <>
                  <Row className="mt-5 my-3">
                    <Col>
                      <h2 className="text-center">No Products Found</h2>
                    </Col>
                  </Row>
                  <Row className="my-3">
                    <Col className="text-center">
                      <Button
                        variant="basic"
                        onClick={navigateBack}
                        style={{
                          backgroundColor: "white",
                          border: "1px solid black",
                        }}
                      >
                        Return
                      </Button>
                    </Col>
                  </Row>
                </>
              ) : (
                <>
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
                                  {(product.brand).charAt(0).toUpperCase()+(product.brand).slice(1)}
                                </p>
                                <h5 className="card-title">
                                  {product.productname}
                                </h5>
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
                      </Col>
                    ))}
                  </Row>
                </>
              )}{" "}
            </>
          )}
                    <Row className="my-3">
            <Col className="text-center">
              <Pagination
                itemsPerPage='16'
                totalItems={totalProducts}// Update with your total item count
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default ViewFilteredProduct;
