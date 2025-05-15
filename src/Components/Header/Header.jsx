import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <NavLink to={"/todoinput"}>AddToProducts</NavLink>
          <NavLink to={"/todoitem"}>Products</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
