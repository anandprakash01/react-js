import { useEffect, useState } from "react";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls (react-query)
// 3. Timer and Intervals

const ChangeTitle = () => {
  useEffect(() => {
    document.title = "Hello, Anand☯️";
    console.log("Title changed");
  }, []);

  return (
    <main>
      <h1>Change Title Component, using useEffect</h1>
    </main>
  );
};

// Cleanups
/**********************************************************************/
const InputField = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  const { firstName, email, phoneNumber } = formDetails;

  const handleFormChange = (event) => {
    setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
    // console.log(firstName, email, phoneNumber);
  };
  // print when only email is changed
  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <main onChange={handleFormChange}>
      <input name="firstName" type="text" placeholder="First Name" value={firstName} />
      <input name="email" type="email" placeholder="Email" value={email} />
      <input name="phoneNumber" type="number" placeholder="Phone Number" value={phoneNumber} />
    </main>
  );
};
/********************************************/
function MouseCoords() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [showMouseCoords, setShowMouseCoords] = useState(true);

  useEffect(() => {
    if (showMouseCoords) {
      function handleMouseMove(event) {
        console.log("Inside handleMouseMove function");
        // console.log(window);
        // setMousePosition({ x: window.clientX, y: window.clientY });
        setMousePosition({ x: event.clientX, y: event.clientY });
      }

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [showMouseCoords]);

  return (
    <>
      {showMouseCoords && (
        <h1>
          {mousePosition.x} / {mousePosition.y}
        </h1>
      )}
      <button
        onClick={() => {
          setShowMouseCoords(!showMouseCoords);
        }}
      >
        Mouse cordinates: {showMouseCoords ? "On" : "OFF"}
      </button>
    </>
  );
}

/************************************************************/

function WindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { height, width } = windowDimensions;

  useEffect(() => {
    function handleResize(event) {
      // const {
      //   target: { innerHeight, innerWidth },
      // } = event;

      const { innerHeight, innerWidth } = window;

      setWindowDimensions({ width: innerWidth, height: innerHeight });
    }

    window.addEventListener("resize", handleResize);

    //this will run when this component will be unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <h1>
      {width} / {height}
    </h1>
  );
}

/*******************************************************/

function MainuseEffect() {
  return (
    <>
      <ChangeTitle />
      <InputField />
      <MouseCoords />
      <WindowSize />
    </>
  );
}
export default MainuseEffect;
