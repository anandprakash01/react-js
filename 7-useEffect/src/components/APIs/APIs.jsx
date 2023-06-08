import { useEffect, useState } from "react";
import APIsCss from "./APIs.module.css";
import Loader from "./Loader";

function APIs() {
  // useState ✅
  // useEffect

  // Side-Effect
  // 1. Changing title of the page
  // 2. Make API calls
  // 3. Timer and Intervals
  // 4. Event Listeners

  // Cleanups

  //   const [loading, setLoading] = useState(false);
  //   const [users, setUsers] = useState([]);
  //   const [error, setError] = useState("");

  const [state, setState] = useState({
    loading: false,
    users: [],
    error: "",
  });

  // useReducer
  useEffect(() => {
    // Using fetch directly
    /*  if we use outside useEffect fetch will run every 
        time whenever the component will rerender */
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUsers(data);
    //   });

    // Async and await
    (async () => {
      //   setLoading(true); // loading start
      setState({ ...state, loading: true });

      try {
        // Not recommended. But it's possible to write fetch in one line. 😎

        // const data = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)).json();

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        /* Error making the API call */
        if (!response.ok) {
          throw new Error(`API failed status : ${response.status}`);
        }
        const data = await response.json();
        // setUsers(data);
        // setLoading(false);
        // setState({ ...state, users: data, loading: false });
        setState((preState) => {
          // callback in State setter
          return { ...preState, users: data };
        });
      } catch (e) {
        // { message: `API failed status : ${response.status}` }
        // setError(e.message);
        // setState({ ...state, error: e.message, loading: false });
        setState((preState) => {
          return { ...preState, error: e.message };
        });
      } finally {
        // setLoading(false);
        // setState({ ...state, loading: false }); //❌
        // we can not use it here because if fetch is successfull even after that
        // finally will run always and it will set setState again which will
        // affect last setState (i.e. user:data setting) and gives us empty
        // there will be 2 state calls👾
        // to solve this either use single useState or callback form of State setter fun
        setState((preState) => {
          return { ...preState, loading: false };
        });
      }
    })(); // IIFE // beacause we will run this fun only once
  }, []);

  console.log(state); // 3 times Re-render
  if (state.loading) {
    return <Loader />;
  }

  if (state.error) {
    return (
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/5804/5804966.png" height={150} />
        <h2 className="error">{error}</h2>
      </div>
    );
  }

  if (state.users.length === 0) {
    return <h2>No users in the system!</h2>;
  }

  return (
    <main>
      {/* optional chaining */}
      {/* {users?.id} */}

      {state.users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </main>
  );
}
export { APIs };
