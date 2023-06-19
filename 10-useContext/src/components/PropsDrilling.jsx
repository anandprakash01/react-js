import { useContext } from "react";

const ComponentC = ({ userName }) => {
  return <h3>Component C : {userName}</h3>;
};

const ComponentB = (props) => {
  return (
    <div>
      <h3>Component B</h3>
      {/* <ComponentC userName="Oscar Isaac" /> */}
      <ComponentC {...props} />
    </div>
  );
};

const ComponentA = (props) => {
  // props -> { userName: 'Oscar Isaac' }

  return (
    <div>
      <h3>Component A</h3>
      {/* <ComponentB userName="Oscar Isaac" /> */}
      <ComponentB {...props} />
    </div>
  );
};

const PropsDrilling = () => {
  const userName = "Oscar Isaac";

  return (
    <main>
      <ComponentA userName={userName} />
    </main>
  );
};

export default PropsDrilling;
