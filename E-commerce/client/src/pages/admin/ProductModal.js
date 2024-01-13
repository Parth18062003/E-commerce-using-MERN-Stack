import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Productmodal(props) {
  const { productname } = useParams();
  const [product, setProduct] = useState([]);

  const viewSingleProduct = async (req, res) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-details/:${encodeURIComponent(productname)}`
      );
      setProduct(data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewSingleProduct();
  }, [productname]);
  useEffect(() => {
    window.scrollTo([0, 0]);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cardstyle = {
    height: "450px",
    width: "450px",
  };

  return (
    <>
      <img
        onClick={handleShow}
        src={props.img}
        alt={product.productname}
        className="product-img img-fluid"
        style={cardstyle}
      />
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.productname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.img}
            alt={product.name}
            width="100%"
            style={{ height: "750px" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Productmodal;
