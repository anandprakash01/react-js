import { useContext } from "react";

import UserContext, { UserContextProvider } from "./UserContextProvider";

const SelectedCity = () => {
  const [user] = useContext(UserContext);
  return <h1>{user.city}</h1>;
};

const UserMumbai = () => {
  const [, updateUserCity] = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Mumbai</h3>
        <button onClick={() => updateUserCity("Mumbai")}>Update from Mumbai</button>
      </div>
      <SelectedCity />
    </>
  );
};

const UserBangalore = () => {
  const [, updateUserCity] = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Bangalore</h3>
        <button onClick={() => updateUserCity("Bangalore")}>Update from Bangalore</button>
      </div>
      <UserMumbai />
    </>
  );
};

const UserLucknow = () => {
  const [, updateUserCity] = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Lucknow</h3>
        <button onClick={() => updateUserCity("Lucknow")}>Update from Lucknow</button>
      </div>
      <UserBangalore />
    </>
  );
};

const ChangeCity = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "row" }}>
      <UserContextProvider>
        <UserLucknow />
      </UserContextProvider>
    </div>
  );
};

export default ChangeCity;
