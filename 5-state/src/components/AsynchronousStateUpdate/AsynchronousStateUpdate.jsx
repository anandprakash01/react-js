import { useState } from "react";

/** Asynchronous State Updates */

export const AsynchronousStateUpdate = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    const nextCount = count + 1; // 1

    setCount(nextCount); // state setters are NOT immediate it will update after this fun

    //setCount(count + 1); !== count = count + 1; -> NOT WHAT HAPPENS!
    console.log(nextCount); // 1
  };

  /***********************************************/

  const [strength, setStrength] = useState(1);
  const [dexterity, setDexterity] = useState(3);
  const [intelligence, setIntelligence] = useState(5);

  function triggerLevelUp() {
    const nextStrength = strength + 3;
    const nextDexterity = dexterity + 3;
    const nextIntelligence = intelligence + 1;

    setStrength(nextStrength); // 7
    setDexterity(nextDexterity); // 11
    setIntelligence(nextIntelligence); // 18

    window.alert(`
        Congratulations! Your hero has been upgraded to:
        Str: ${nextStrength}
        Dex: ${nextDexterity}
        Int: ${nextIntelligence}
      `);
  }

  return (
    <>
      <div>
        <p>You've clicked {count} times.</p>
        <button onClick={handleCount}>Click me!</button>
      </div>

      <div className="container">
        <img
          alt="8-bit wizard character"
          src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
          width={"50px"}
        />
        <div>
          <button onClick={triggerLevelUp}>Level Up</button>
        </div>
      </div>
    </>
  );
};
