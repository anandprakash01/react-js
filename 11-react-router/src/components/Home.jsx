import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // the second argument is optional
  // this is for replace a new route

  // navigate can be used anywhere

  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         navigate("error-page");
  //       }
  //       const data = await response.json();

  //       navigate("success");
  //     })();
  //   }, []);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          //   navigate("order-summary");
          navigate("order-summary", { replace: true }); // replace will not create history to go back
        }}
      >
        Place order
      </button>
    </div>
  );
}

export default Home;
