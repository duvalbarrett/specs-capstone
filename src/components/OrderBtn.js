import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const OrderBtn = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    isAuthenticated && (
      <button className="placeorder-btn" onClick={() => navigate("/order")}>
        Cart
      </button>
    )
  );
};

export default OrderBtn;
