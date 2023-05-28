import { useState } from "react";

const FormValidation2 = () => {
  // event.target.name -> name attribute
  // event.target.id   -> id attribute

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: "",
  });

  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormInputs = (event) => {
    const {
      target: { id, value },
    } = event;

    if (userName) {
      setUserName("");
    }

    if (errorMessage) {
      setErrorMessage("");
    }

    setFormDetails({ ...formDetails, [id]: value });
  };

  const validateName = (input) => {
    const regex = /^[\w\s]+$/;

    /** Does the input match the pattern of regex ? */
    return regex.test(input); // returns a boolean
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /** Write all validations BEFORE calling setUserName */

    /** Check if any of the fields are empty */

    const allFieldsFilled = Object.values(formDetails).every((value) => value);

    if (!allFieldsFilled) {
      setErrorMessage("All fields are mandatory");
      return;
    }

    /** Check if name is not Alphanumeric with space */
    if (!validateName(formDetails.name)) {
      setErrorMessage("Name is not alphanumeric");
      return;
    }

    /** Check if email doesn't contain "@" */
    if (!formDetails.email.includes("@")) {
      setErrorMessage("Email must contain @");
      return;
    }

    /** Check if the phone number length is less than 6 */
    if (formDetails.password.length < 6) {
      setErrorMessage("Password must contain atleast 6 letters");
      return;
    }

    /** Success scenario */
    const userNameFromEmail = formDetails.email.split("@")[0];
    setUserName(userNameFromEmail);
  };

  return (
    <>
      <form className="form-container" onChange={handleFormInputs} onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Name" value={formDetails.name} />
        <input type="email" id="email" placeholder="Email" value={formDetails.email} />
        <select id="gender" value={formDetails.gender}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        <input
          type="number"
          id="phoneNumber"
          placeholder="Phone Number"
          value={formDetails.phoneNumber}
        />
        <input type="password" id="password" placeholder="Password" value={formDetails.password} />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      {userName && <h3>Hello {userName}</h3>}
      {errorMessage && <h4>{errorMessage}</h4>}
    </>
  );
  // keri.aditya@gmail.com
};

// Named Export
export { FormValidation2 };
