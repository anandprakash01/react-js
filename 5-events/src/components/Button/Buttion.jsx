const user = {
  id: 1,
  name: "anand",
};

export const Button = () => {
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          console.log("clicked2");
        }}
      >
        Click me
      </button>
      {/* // Using this way, we can not pass any other arguments, apart from the event object which is passed by react itself */}
      <button id="one" onClick={oneFun}>
        Button one
      </button>
      <button id="two" onClick={oneFun}>
        Button two
      </button>
      <button id="three" onClick={oneFun}>
        Button three
      </button>

      <button
        onClick={(event) => {
          passArg("anand", user, event);
        }}
      >
        Passing Arguments
      </button>
    </>
  );
};

// using regular javaScript :
// first grab the element then add an event listner
// Inportant: we run the callback when the button is clicked

function handleClick(event) {
  console.log("clicked");
  console.log(event);
  console.log(event.target);
}

const oneFun = (event) => {
  console.log(event.target.innerText);
  console.log(`${event.target.id} is clicked`);
};

const passArg = (arg, user, event) => {
  console.log(arg);
  console.log(user);
};
