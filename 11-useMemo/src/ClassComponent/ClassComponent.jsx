import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // 1: constructor is used for initialize state
    // 2: to bind eventListeners
    this.userName = "Anand"; // this is like useRef

    //this.state is always an object
    this.state = {
      count: 0,
      title: null,
    };
  }

  increment = () => {
    //this merges the state
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState(
      (preState) => {
        return { count: preState.count + 1 };
      },
      () => {
        console.log("this runs immediatly after state update");
      }
    );
  };

  //   life cycle methods

  // whenever component mounts, runs only one. eg. like useEffect make an api call
  componentDidMount() {
    (async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const { title } = await response.json();
      this.setState({
        title,
      });
    })();
  }
  //   called after updating
  componentDidUpdate(preProps, preState) {
    if (this.props.title != preProps.title) {
      //make apiCall
    }
  }

  // call before unmounting
  componentWillUnmount() {}

  render() {
    return (
      <>
        <h1>Name: {this.userName}</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.title}</h1>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
export default ClassComponent;
