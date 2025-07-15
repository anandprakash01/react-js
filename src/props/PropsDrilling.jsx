import React from "react";

// sending Prop from a top level element to all the way down to a child.even though the intermediate components don't need it.

export const PropsDrilling = () => {
    const user = {
        name: "anandprakash",
        email: "prakash@gmail.com",
    };
    return (
        <>
            <h3>Props Drilling</h3>
            <Parent user={user} />
        </>
    );
};

const Parent = ({user}) => {
    return (
        <div>
            <p>Parent Component</p>
            <IntermediateComponent user={user} />
        </div>
    );
};

const IntermediateComponent = ({user}) => {
    return (
        <div>
            <p>Intermediate Component</p>
            <Child user={user} />
        </div>
    );
};

const Child = ({user}) => {
    return (
        <div>
            <p>ChildComponent</p>
            <span>Name: {user.name}</span>
            {",   "}
            <span>Email: {user.email}</span>
        </div>
    );
};
