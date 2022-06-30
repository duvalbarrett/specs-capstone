import React from "react";
import { Link, useNavigate } from "react-router-dom";
import OrderBtn from "./OrderBtn";
import LoginBtn from "./Login";
import LogoutBtn from "./LogoutBtn";
import cover from "../images/Vintage Tech-logo  transparency/default.png";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="header-nav">
        <div className="header-links">
          <div className="header-left">
            <button
              className="item-buttons"
              onClick={() => navigate("/phones")}
            >
              Phones
            </button>
          </div>
        </div>

        <div className="header-mid">
          <Link to="/">
            <img src={cover} className="logo" alt="" />
          </Link>
        </div>

        <div className="header-right">
          <button className="item-buttons2" onClick={() => navigate("/games")}>
            Games
          </button>
          <LoginBtn />
          <OrderBtn />
          <LogoutBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
