import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Order Placed</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
}

export default OrderSummary;
