import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const AddToCartButton = ({ productId, inCart, style }) => {
  const handleAddToCart = async () => {
    try {
      await axios.put(`http://localhost:8080/api/v1/product/product-cart/${productId}`, { inCart: true });
      // Handle success or update UI accordingly
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Handle error or display an error message
    }
  };

  const handleRemoveFromCart = async () => {
    try {
      await axios.put(`http://localhost:8080/api/v1/product/product-cart/${productId}`, { inCart: false });
      // Handle success or update UI accordingly
    } catch (error) {
      console.error("Error removing from cart:", error);
      // Handle error or display an error message
    }
  };

  return (
    <>
      {inCart ? (
        <Button variant="outline-basic border-0" onClick={handleRemoveFromCart} style={style}>
          Remove from Cart
        </Button>
      ) : (
        <Button variant="outline-basic border-0" onClick={handleAddToCart} style={style}>
          Add to Cart
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
