import React, {useState} from "react";
import ReactDom from "react-dom";
import {createPortal} from "react-dom";

const PopUp = ({onClick}) => {
    const modalStyle = {
        background: "gray",
        borderRadius: "4px",
        width: "8rem",
        padding: "1rem",
        textAlign: "center",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    return ReactDom.createPortal(
        <div style={modalStyle}>
            <h3>Hey There</h3>
            <button onClick={onClick}>Close</button>
        </div>,
        document.getElementById("portal")
    );
};

const Modal = () => {
    const [show, setShow] = useState(false);
    const handleModal = () => {
        setShow(!show);
    };

    return (
        <>
            <h3>Portal/Modal</h3>
            {show && <PopUp onClick={handleModal} />}
            <button onClick={handleModal}>Show Modal</button>
            <hr />
        </>
    );
};

export default Modal;
