import { useState, memo, useRef, useMemo } from "react";
import StyleCSS from "./formHandle.module.css";

function isValidName(string) {
  console.log("isValidName run!");
  return !string.includes("&");
}

export const FormHandle = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    location: "",
  });

  const handleInputChange = (event) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // this will only validate when name is change and cause re-render
  const isNameError = useMemo(() => {
    return !isValidName(formDetails.name);
  }, [formDetails.name]);

  return (
    <main onChange={handleInputChange}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formDetails.name}
        className={isNameError && StyleCSS.error}
      />
      <input name="email" type="email" placeholder="Email" value={formDetails.email} />
      <input
        name="location"
        type="text"
        placeholder="Location"
        value={formDetails.location}
      />
    </main>
  );
};
