import {
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";

/*
 * Context : =>
 * Problem : Prop drilling
 *
 * Two important concepts :
 * 1. Provide a value ✅
 * 2. Consume a value ✅
 */

const ComponentC = () => {
  const userName = useContext(UserNameContext);
  return <h3>Component C : {userName} </h3>;
};

const ComponentB = () => {
  const userName = useContext(UserNameContext);
  return (
    <div>
      <h3>Component B : {userName}</h3>
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  //   const userName = useContext(UserNameContext);
  //   const { myName } = useContext(ObjectContext);

  return (
    <div>
      <h3>Component A </h3>
      {/* {myName} */}
      <ComponentB />
    </div>
  );
};

const UserNameContext = createContext(); //This should be outside of component
// const ObjectContext = createContext();

const Context = () => {
  const userName = "Oasis Oscar";
  //   =====> camelCase   -> anandPrakash
  //   =====> PascalCase  -> AnandPrakash
  /* createContext returns a Context Object,, Make sure to name it in PascalCase */

  return (
    <>
      <UserNameContext.Provider value={userName}>
        <ComponentA />
      </UserNameContext.Provider>
      {/* <ObjectContext.Provider value={{ myName: "Anand Prakash" }}>
        <ComponentA />
      </ObjectContext.Provider> */}
    </>
  );
};
export default Context;
