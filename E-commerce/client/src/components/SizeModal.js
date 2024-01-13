import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SizeChart from "./SizeChart";

function SizeModal() {
  const { productname } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [tags, setTags] = useState([]);
  const [productType, setProductType] = useState("");
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/product/product-details/${encodeURIComponent(productname)}`
        );
        setAvailableSizes(data.product.sizes);
        setTags(data.product.tags);
        setProductType(data.product.category);
        setProductId(data.product._id);
      } catch (error) {
        console.error("Error fetching sizes:", error);
      }
    };

    fetchSizes();
  }, []);

  return (
    <>
      <div className="col mt-4">
        <div className="d-flex justify-content-between">
          <p className="h6 mt-2">Shoe size (UK)</p>
          <Button variant="basic border-0" onClick={handleShow}>
            <i className="fa-solid fa-ruler fa-lg"></i> Size Chart
          </Button>
          {productType === "accessories" ? (
            <></>
          ) : (
            <>
              {" "}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Size Chart {tags.includes("mens") ? "(Men's)" : "(Women's)"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SizeChart
                    productType={productType}
                    tags={
                      tags.includes("mens")
                        ? "mens"
                        : "womens" && tags.includes("topwear")
                        ? "topwear"
                        : "bottomwear"
                    }
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="basic" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </div>
        <div className="col mt-2 text-center" id="sizecontainer">
          <div className="row">
            {availableSizes &&
              availableSizes.map((size) => (
                <div className="col-2 py-2" key={size._id}>
                  <button className="btn btn-dark">{size.size}</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SizeModal;
