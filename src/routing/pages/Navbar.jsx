import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    const navStyles = {
        display: "flex",
        gap: "3rem",
        fontSize: "2rem",
    };
    return (
        <div style={navStyles}>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/random">Random</Link>
        </div>
    );
};

export default Navbar;
