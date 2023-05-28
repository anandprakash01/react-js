// sent Prop from a top level element to all the way down to a child.
// even thow the intermediate components don't need it.
const C = ({ city, children }) => {
  return (
    <h1>
      Hello {city} {children}
    </h1>
  );
};

const B = ({ children }) => children;
const A = ({ children }) => children;

const PropsDrilling = () => {
  return (
    <A>
      <B>
        <C city="Banglore">,I'm Anand</C>
      </B>
    </A>
  );
};

export default PropsDrilling;
