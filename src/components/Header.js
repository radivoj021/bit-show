import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div className="container1">
        <Link to="/" id="logo">
          Bit Show
        </Link>
        <div id="search">
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
};

export default Header;
