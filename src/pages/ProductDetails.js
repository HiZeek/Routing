import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <>
      <h1>ProductDetails</h1>
      {params.productId}
    </>
  );
};

export default ProductDetails;
