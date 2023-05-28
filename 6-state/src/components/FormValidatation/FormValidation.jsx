import { useState } from "react";
import "./style.css";

export const FormValidation = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    genderError: "",
    emailError: "",
  });

  const handelFormDetails = (event) => {
    // show error on input change
    // console.log(event);
    setShowOutput(false);
    const field = event.target.name;
    let value = event.target.value;
    if (field == "gender") {
      value = event.target.id;
    }
    formDetails[field] = value;
    const firstNameError =
      field === "firstName" && value.length < 3 && "First name must contain at least 3 characters";

    const lastNameError =
      field === "lastName" && value.length < 3 && "Last name must contain at least 3 characters";

    const genderError = field === "gender" && value == false && "Gender select required !!";
    const emailError =
      field === "email" && value.length < 3 && "Email must contain at least 3 characters";
    // const { firstName, lastName, gender, email } = formDetails;
    // const firstNameError = firstName.length < 3 && "First Name must contain atleast 3 characters";
    // const lastNameError = lastName.length < 3 && "Last Name must contain atleast 3 characters";
    // const emailError = email.length < 3 && "Email must contain atleast 3 characters";
    // const genderError = gender.length < 1 && "Gender must be selected";

    if (firstNameError || lastNameError || genderError || emailError) {
      setFormErrors({
        firstNameError,
        lastNameError,
        genderError,
        emailError,
      });

      //   switch (field) {
      //     case "firstName":
      //       setFormErrors({
      //         ...formErrors,
      //         firstNameError,
      //       });
      //       break;
      //     case "lastName":
      //       setFormErrors({
      //         ...formErrors,
      //         lastNameError,
      //       });
      //       break;
      //     case "gender":
      //       setFormErrors({
      //         ...formErrors,
      //         genderError,
      //       });
      //       break;
      //     case "email":
      //       setFormErrors({
      //         ...formErrors,
      //         emailError,
      //       });
      //   }
    } else {
      setFormErrors({
        firstNameError: "",
        lastNameError: "",
        genderError: "",
        emailError: "",
      });
    }

    setFormDetails({ ...formDetails });
  };

  const validated =
    formDetails.firstName.length >= 2 &&
    formDetails.lastName.length >= 2 &&
    formDetails.email.length >= 2 &&
    formDetails.gender.length > 1;

  const [showOutput, setShowOutput] = useState(false);
  const submit = (event) => {
    // this does not work in onClick fun
    event.preventDefault();

    const { firstName, lastName, gender, email } = formDetails;

    const firstNameError = firstName.length < 3 && "First name must contain at least 3 characters";
    const lastNameError = lastName.length < 3 && "Second name must contain at least 3 characters";
    const genderError = gender == false && "Gender must be selected";
    const emailError = email.length < 3 && "Email must contain at least 3 characters";

    setFormErrors({
      firstNameError,
      lastNameError,
      genderError,
      emailError,
    });
    setShowOutput(true);
  };
  return (
    <>
      <form>
        <div className="formgroup">
          <label htmlFor="firstName">First Name: </label>

          <div>
            <input onChange={handelFormDetails} type="text" name="firstName" id="firstName" />
            {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}
          </div>
        </div>
        <div className="formgroup">
          <label htmlFor="lastName">Last Name: </label>

          <div>
            <input onChange={handelFormDetails} type="text" name="lastName" id="lastName" />
            {formErrors.lastNameError && <p>{formErrors.lastNameError}</p>}
          </div>
        </div>
        <div className="formgroup">
          <div>Gender:</div>
          <div onClick={handelFormDetails}>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
          </div>
          {formErrors.genderError && <p>{formErrors.genderError}</p>}
        </div>
        <div className="formgroup">
          <label htmlFor="email">Email: </label>
          <div>
            <input onChange={handelFormDetails} type="email" id="email" name="email" />
            {formErrors.emailError && <p>{formErrors.emailError}</p>}
          </div>
        </div>
        <button onClick={submit}>Show Output</button>
      </form>
      <div>
        <h4>Output:</h4>
        {showOutput && (
          <div>
            <p>FirstName: {formDetails.firstName}</p>
            <p>LastName: {formDetails.lastName}</p>
            <p>Gender: {formDetails.gender}</p>
            <p>Email: {formDetails.email}</p>
          </div>
        )}
      </div>
    </>
  );
};
