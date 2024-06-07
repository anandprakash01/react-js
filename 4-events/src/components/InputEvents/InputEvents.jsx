const handelChange = (event) => {
  console.log(event.target.value);
};

const handelFocus = () => {
  console.log("Element in focus");
};
// blur event occurs only when the input element was previously in focus
const handelBlur = () => {
  console.log("Element in focus removed (blur)");
};

export const InputEvent = () => {
  return (
    <main>
      <label htmlFor="input">Name: </label>
      <input
        onBlur={handelBlur}
        onFocus={handelFocus}
        onChange={handelChange}
        id="input"
        type="text"
      />
    </main>
  );
};
