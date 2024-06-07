import { useState } from "react";

export const ComplexFormState = () => {
  // //we can use useState inside corresponding component only

  //method 1
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  // const MAPPING = {
  //   firstName: setFirstName,
  //   lastName: setLastName,
  //   email: setEmail,
  // };
  // const handelChange = (event) => {
  //   // also can use another method using if else but this is better way using objects
  //   const field = event.target.name;
  //   const value = event.target.value;
  //   const set = MAPPING[field];
  //   set(value);
  //   // console.log(value);
  // };

  // Method 2
  // const [formDetails, setFormDetails] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  // });
  // const handelChange = (event) => {
  //   const field = event.target.name;
  //   const value = event.target.value;

  //   if (field == "firstName") {
  //     formDetails.firstName = value;
  //   } else if (field == "lastName") {
  //     formDetails.lastName = value;
  //   } else {
  //     formDetails.email = value;
  //   }

  //   const newFormDetails = { ...formDetails };
  //   setFormDetails(newFormDetails);
  // };

  //method 3 best
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handelChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    // formDetails[field] = value;

    // const newFormDetails = { ...formDetails, [field]: value };
    setFormDetails({ ...formDetails, [field]: value });
  };
  return (
    <main>
      <label>First Name: </label>
      <input
        onChange={handelChange}
        value={formDetails.firstName}
        type="text"
        name="firstName"
        placeholder="Anand"
      />
      <label>Last Name: </label>
      <input
        onChange={handelChange}
        value={formDetails.lastName}
        type="text"
        name="lastName"
        placeholder="Prakash"
      />
      <label>Email: </label>
      <input
        onChange={handelChange}
        value={formDetails.email}
        type="email"
        name="email"
        placeholder="xyz@abc.com"
      />
      <div className="output">
        <h3>
          Name: {formDetails.firstName} {formDetails.lastName}
        </h3>
        <h3>Email: {formDetails.email}</h3>
      </div>
    </main>
  );
};
