import React from "react";

class LifeCycle extends React.Component {
  // Order : constructor --> Render --> componentDidMount
  constructor(props) {
    super(props); // Initializes the React's component class(calls the parent constructor)
    // to get the props we need to pass it in super
    console.log("Hello from Contructor", this.props);

    this.state = {
      count: 0,
    };
    this.name = "Anand";
  }

  componentDidMount() {
    console.log("Hello from comonentDidMount");
    // Call an API in this
    // this is like useEffect
    // setInterval(() => {
    //   this.setState(preState => ({count: preState.count + 1}));
    // }, 5000);

    this.setState({count: 1});
    setTimeout(() => {
      console.log("I'm from setTimeout");
      this.name = "Raja"; // this will never trigger a re-render
      this.forceUpdate(); // this will trigger a FORCEFUL re-render(updating phase)
    }, 5000);
  }

  // update Phase
  componentDidUpdate() {
    console.log("Hello from componentDidUpdate");
    // this.setState({count: 2}); //this will go in infine loop
  }

  //Unmounting Phase
  componentWillUnmount() {
    console.log("Hello from Unmounting");
  }

  render() {
    console.log("Hello from Render");
    return (
      <>
        <h1>React Life Cycle Using Class</h1>
        <h4>Count: {this.state.count}</h4>
        <h4>{this.name}</h4>
      </>
    );
  }
}

export default LifeCycle;
