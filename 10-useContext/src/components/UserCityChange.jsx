import { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";

import UserContext from "./UserContext";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const UserMumbai = () => {
  const setUser = useContext(UserContext);
  return (
    <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
      <h3>Mumbai</h3>
      <button onClick={() => setUser({ city: "Mumbai" })}>Update from Mumbai</button>
    </div>
  );
};

const UserBangalore = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Bangalore</h3>
        <button onClick={() => setUser({ city: "Bangalore" })}>Update from Bangalore</button>
      </div>
      <UserMumbai />
    </>
  );
};

const UserLucknow = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Lucknow</h3>
        <button onClick={() => setUser({ city: "Lucknow" })}>Update from Lucknow</button>
      </div>
      <UserBangalore />
    </>
  );
};

const UserCityChange = () => {
  const [user, setUser] = useState({ city: "Hyderabad" });

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <h1>{user.city}</h1>
      <UserContext.Provider value={setUser}>
        <UserLucknow />
      </UserContext.Provider>
      <button onClick={() => setUser({ city: "Hyderabad" })}>Reset</button>
    </div>
  );
};

export default UserCityChange;
