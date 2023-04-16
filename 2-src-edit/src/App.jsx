
// const App = () => {
//   return (
//     // <div>
//     //   <header>Header</header>
//     //   <main>Main</main>
//     //   <footer>Footer</footer>
//     // </div>

//     //react Fragments
//     <>
//       <header>Header</header>
//       <main>Main</main>
//       <footer>Footer</footer>
//     </>
//   );
// };

const App = () => {
  return (
    // for and class is reserved keyword in javaScript
    //  so use htmlFor and className
    <>
      <input className="" type="text" id="name" />
      {/* <label for="name"></label> */}
      <label htmlFor="name">Name</label>
    </>
  );
};

export default App;
