import React, {useMemo, useState} from "react";

const UseMemoHookForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    const handleInputChange = e => {
        e.stopPropagation();
        // this will stop from running the parent fun(eventBubbling) and hey will fun not run
        setUser(prev => {
            return {...prev, [e.target.name]: e.target.value};
        });
    };
    const hey = () => {
        console.log("hey from function attached in main");
    };

    const isValidName = string => {
        console.log("isValidName run!");
        return string.length >= 5;
    };

    // this will only validate when name is change and cause re-render
    const isNameError = useMemo(() => {
        return !isValidName(user.name);
    }, [user.name]);

    return (
        <main onChange={hey}>
            <input
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleInputChange}
            />
            {isNameError && <span style={{border: "2px solid red"}}>Error Name</span>}
            <input
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputChange}
            />
        </main>
    );
};

export default UseMemoHookForm;
