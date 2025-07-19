import React from "react";
import {Link} from "react-router-dom";

const Error = () => {
    const styleEl = {
        fontSize: "2rem",
        fontWeight: "bold",
    };
    return (
        <div>
            <div style={styleEl}>Error</div>
            <Link to="/home" style={styleEl}>
                Home
            </Link>
        </div>
    );
};

export default Error;
