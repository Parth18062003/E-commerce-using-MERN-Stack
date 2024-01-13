import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const LikeProductButton = ({ productId, isLiked, style }) => {
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        setLiked(isLiked);
      }, [isLiked]);
  const handleLike = async () => {
    try {
      await axios.put(`http://localhost:8080/api/v1/product/product-cart/liked/${productId}`, {
        isLiked: true,
      });
      setLiked(true)
      // Handle success or update UI accordingly
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Handle error or display an error message
    }
  };

  const handleRemoveLike = async () => {
    try {
      await axios.put(`http://localhost:8080/api/v1/product/product-cart/liked/${productId}`, {
        isLiked: false,
      });
      setLiked(false)
      // Handle success or update UI accordingly
    } catch (error) {
      console.error("Error removing from cart:", error);
      // Handle error or display an error message
    }
  };

  return (
    <>
    <div key={isLiked.toString()}> {/* Add a key prop based on isLiked */}
      {liked ? (
        <Button
          variant="outline-basic border-0"
          onClick={handleRemoveLike}
          style={{ color: "red" }}
        >
          <i className="fa-solid fa-heart fa-xl"></i>
        </Button>
      ) : (
        <Button
          variant="outline-basic border-0"
          onClick={handleLike}
          style={style}
        >
          <i className="fa-regular fa-heart fa-xl"></i>
        </Button>
      )}
    </div>
    </>
  );
};

export default LikeProductButton;
