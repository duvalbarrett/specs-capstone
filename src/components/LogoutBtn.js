import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="logout-btn" onClick={() => logout()}>
        Logout
      </button>
    )
  );
};

export default LogoutBtn;
