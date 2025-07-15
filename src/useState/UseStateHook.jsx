import React, {useState} from "react";

const UseStateHook = () => {
    const [count, setCount] = useState(0);

    const [formDetails, setFormDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        // formDetails[field] = value;

        // const newFormDetails = { ...formDetails, [field]: value };
        setFormDetails({...formDetails, [field]: value});
    };

    const handleClick = () => {
        setCount(pre => pre + 1);
    };

    return (
        <>
            <div>
                <h3>{count}</h3>
                <button onClick={handleClick}>Increase Count</button>
            </div>
            <main>
                <label>First Name: </label>
                <input
                    onChange={handleChange}
                    value={formDetails.firstName}
                    type="text"
                    name="firstName"
                    placeholder="Anand"
                />
                <label>Last Name: </label>
                <input
                    onChange={handleChange}
                    value={formDetails.lastName}
                    type="text"
                    name="lastName"
                    placeholder="Prakash"
                />
                <label>Email: </label>
                <input
                    onChange={handleChange}
                    value={formDetails.email}
                    type="email"
                    name="email"
                    placeholder="xyz@abc.com"
                />
                <div className="output">
                    <h3>
                        Name: {formDetails.firstName} {formDetails.lastName}
                    </h3>
                    <h3>Email: {formDetails.email}</h3>
                </div>
            </main>
        </>
    );
};

export default UseStateHook;
