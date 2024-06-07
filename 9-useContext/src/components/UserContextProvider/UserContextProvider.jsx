import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ city: "Hyderabad" });

  const updateUserCity = (newCity) => {
    setUser({ city: newCity.toUpperCase() });
  };

  return (
    <UserContext.Provider value={[user, updateUserCity]}>{children}</UserContext.Provider>
  );
};

export default UserContext;
