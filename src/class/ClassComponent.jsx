import React from "react";

class ClassComponent extends React.Component {
    // order : constructor ---> Render ---> componentDidMount
    constructor(props) {
        super(props); // Initializes the React's component class(calls the parent constructor)
        // to get the props we need to pass it in super
        console.log("hello from Constructor");

        // 1. constructor is used to initialize state
        // 2. to bind eventListeners

        this.userName = "Anand"; // this is like useRef

        // this.state is always an object
        this.state = {
            count: 0,
            title: null,
        };
    }

    // functions
    increment = () => {
        // this merges the state
        // this.setState({
        //     count: this.state.count + 1,
        // });

        this.setState(
            prev => {
                return {count: prev.count + 1};
            },
            () => {
                console.log("This runs immediately after state update");
            }
        );
    };

    // life Cycle methods

    // 1. whenever component mounts, runs only one. eg. like useEffect make an api call
    componentDidMount() {
        (async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const {title} = await response.json();
            this.setState({
                title,
            });
            this.name = "Raja"; // this will never trigger a re-render
        })();
    }

    // 2. called after updating
    componentDidUpdate(prevProps, preState) {
        if (this.props.title != prevProps.title) {
            // make API call
        }
        console.log("Hello from componentDidUpdate");
        // this.setState({count: 2}); //this will go in infinite loop
    }

    // 3. call before unmounting
    componentWillUnmount() {
        console.log("Hello from Unmounting");
    }

    render() {
        console.log("Hello from Render");
        return (
            <>
                <h3>Class Component</h3>
                <div>
                    <div>Name: {this.userName}</div>
                    <div>{this.state.count}</div>
                    <div>{this.state.title}</div>
                    <button onClick={this.increment}>Increment</button>
                </div>
            </>
        );
    }
}

export default ClassComponent;
