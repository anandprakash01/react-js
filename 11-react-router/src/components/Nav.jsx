import React from "react";
import { Link, NavLink } from "react-router-dom";

// NavLink will automatically get className .active
function Nav() {
  const navLinkStyle = (obj) => {
    console.log(obj);
    const { isActive } = obj;

    return {
      color: isActive ? "#fff" : "blue",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <nav className="primary-nav">
      {/* <Link to="/">Home</Link>
      <Link to="about">About</Link> */}

      <NavLink to="/" style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="about" style={navLinkStyle}>
        About
      </NavLink>
      <NavLink to="products" style={navLinkStyle}>
        Products
      </NavLink>
    </nav>
  );
}

export default Nav;
