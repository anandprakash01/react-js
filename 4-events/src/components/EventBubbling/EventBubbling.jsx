const handleClick = (event) => {
  //   console.log(event);
  if (event.target.innerText) {
    switch (event.target.innerText) {
      case "T-Shirt":
        console.log("T-Shirt clicked");
        // break;
        return;
      case "Jeans":
        console.log("Jeans clicked");
        // break;
        return;
      case "Casual":
        console.log("Casual clicked");
        // break;
        return;
      case "Formals":
        console.log("Formals clicked");
        // break;
        return;
    }
  }
};

export const EventBubbling = () => {
  const capture = () => {};
  return (
    <main onClick={handleClick}>
      <button>T-Shirt</button>
      <button>Jeans</button>
      <button>Casual</button>
      <button>Formals</button>
      <button onChangeCapture={capture}>Formals</button>
    </main>
  );
};
