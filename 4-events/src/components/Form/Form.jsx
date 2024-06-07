export const Form = () => {
  return (
    <form
      onClick={(event) => {
        //it stops page from reloading when click submit button
        event.preventDefault();
      }}
    >
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};
