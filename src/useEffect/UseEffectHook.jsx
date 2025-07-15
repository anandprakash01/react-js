import React, {useEffect, useState} from "react";

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls
// 3. Timer and Intervals

const UseEffectHook = () => {
    const [mount, setMount] = useState(false);
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });
    const [showMouseCoords, setShowMouseCoords] = useState(false);

    useEffect(() => {
        document.title = "Hello, Anand☯️";
        console.log("Title changed");
    }, []);

    // Mouse Event
    useEffect(() => {
        if (showMouseCoords) {
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            //cleanup fun
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [showMouseCoords]);

    const handleMount = () => {
        setMount(!mount);
    };

    const handleMouseMove = event => {
        console.log("Inside handleMouseMove function");
        setMousePosition({x: event.clientX, y: event.clientY});
    };

    return (
        <div>
            {mount && <AnotherComponent />}
            <button onClick={handleMount}>Mount/Unmount Component</button>

            {showMouseCoords && (
                <h1>
                    {mousePosition.x} / {mousePosition.y}
                </h1>
            )}
            <button
                onClick={() => {
                    setShowMouseCoords(!showMouseCoords);
                }}
            >
                Mouse coordinates: {showMouseCoords ? "On" : "OFF"}
            </button>
        </div>
    );
};

const AnotherComponent = () => {
    useEffect(() => {
        console.log("Another Component mounted");

        // whenever useEffect returns it runs just before the component is unmounted
        return () => {
            console.log("Another Component unmounted");
        };
    }, []);
    return <h2>Another Component</h2>;
};

export default UseEffectHook;
