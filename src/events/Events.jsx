import React from "react";
import EventBubbling from "./EventBubbling";

const Events = () => {
    const Options = [
        {label: "Iron Man", value: "RDJ"},
        {label: "Caption America", value: "Chris Evan"},
        {label: "Hulk", value: "Mark Ruffalo"},
    ];

    const handelChange = event => {
        console.log(event.target.value);
    };

    const handelFocus = () => {
        console.log("Element in focus");
    };
    // blur event occurs only when the input element was previously in focus
    const handelBlur = () => {
        console.log("Element in focus removed (blur)");
    };

    const handleSubmit = event => {
        //it stops page from reloading when click submit button
        event.preventDefault();
    };

    const handleSelect = event => {
        console.log(event.target.options);
        const {selectedIndex} = event.target.options;
        // console.log(Options[selectedIndex]);
        console.log(event.target.value);
    };
    return (
        <>
            <EventBubbling />
            <form onClick={handleSubmit}>
                <label htmlFor="input">Name: </label>
                <input
                    onBlur={handelBlur}
                    onFocus={handelFocus}
                    onChange={handelChange}
                    id="input"
                    type="text"
                />
                <button>Submit</button>
            </form>

            <select onChange={handleSelect}>
                {Options.map((opt, idx) => {
                    return (
                        <option key={idx} value={opt.value}>
                            {opt.label}
                        </option>
                    );
                })}
            </select>
            <hr />
        </>
    );
};

export default Events;
