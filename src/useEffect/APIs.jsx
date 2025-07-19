import {useEffect, useState} from "react";

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

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data);
        //     setUsers(data);
        //   });

        // Async and await
        (async () => {
            //   setLoading(true); // loading start
            setState({...state, loading: true});

            try {
                // Not recommended. But it's possible to write fetch in one line.

                // const data = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)).json();

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                console.log(response);
                /* Error making the API call */
                if (!response.ok) {
                    throw new Error(`API failed status : ${response.status}`);
                }
                const data = await response.json();
                // console.log(data);
                // setUsers(data);
                // setLoading(false);
                // setState({ ...state, users: data, loading: false });
                setState(preState => {
                    // callback in State setter
                    return {...preState, users: data};
                });
            } catch (e) {
                // { message: `API failed status : ${response.status}` }
                // setError(e.message);
                // setState({ ...state, error: e.message, loading: false });
                setState(preState => {
                    return {...preState, error: e.message};
                });
            } finally {
                // setLoading(false);
                // setState({ ...state, loading: false }); //❌
                // we can not use it here because if fetch is successful even after that
                // finally will run always and it will set setState again which will
                // affect last setState (i.e. user:data setting) and gives us empty
                // there will be 2 state calls👾
                // to solve this either use single useState or callback form of State setter fun
                // setState(preState => {
                //     return {...preState, loading: false};
                // });
            }
            setState(preState => {
                return {...preState, loading: false};
            });
        })(); // IIFE (Immediately Invoked Function Expression)
        // because we will run this fun only once
    }, []);

    // console.log(state); // 3 times Re-render
    if (state.loading) {
        return <h4>Loading . . . </h4>;
    }

    if (state.error) {
        return (
            <div>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/5804/5804966.png"
                    height={150}
                />
                <h2 className="error">{state.error}</h2>
            </div>
        );
    }

    if (state.users.length === 0) {
        return <h2>No users in the system!</h2>;
    }

    return (
        <main style={{display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            {/* optional chaining */}
            {/* {users?.id} */}

            {state.users.map((user, i) => (
                <div key={i}>{user.name}, </div>
            ))}
        </main>
    );
}
export {APIs};
