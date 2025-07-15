import React from "react";
import PropsChildren from "./PropsChildren";
import {PropsDrilling} from "./PropsDrilling";

const Props = () => {
    return (
        <>
            <h2>Props</h2>
            <div>
                {/* props as one object */}
                <User user={{name: "Anand", email: "ap.anand@gmail.com", age: 15}} />
                {/* props as multiple values */}
                <User2 location="Beohari, MP" country="India" />
            </div>
            <PropsChildren />
            <PropsDrilling />
            <hr />
        </>
    );
};

const User = props => {
    const {user} = props;

    // Nested destructuring
    // const {
    //   user: { name, age, isMarried, hobbies, location },
    // } = props;

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
        </div>
    );
};
const User2 = props => {
    const {location, country} = props;
    return (
        <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
            <div>{location}</div>
            <h4>{country}</h4>
        </div>
    );
};

export default Props;
