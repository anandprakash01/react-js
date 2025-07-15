const EventBubbling = () => {
    const handleClickGrandparent = () => {
        console.log("Grandparent clicked!");
    };

    const handleClickParent = () => {
        console.log("Parent clicked!");
    };

    const handleClickChild = event => {
        console.log("Child clicked!");
        // the line below, stops the bubbling
        event.stopPropagation();
        console.log(event);
    };

    return (
        <div
            onClick={handleClickGrandparent}
            style={{border: "2px solid blue", padding: "10px", cursor: "pointer"}}
        >
            Grandparent
            <div
                onClick={handleClickParent}
                style={{
                    border: "2px solid green",
                    padding: "10px",
                    cursor: "pointer",
                }}
            >
                Parent
                <button
                    onClick={handleClickChild}
                    style={{padding: "10px", cursor: "pointer"}}
                >
                    Child Button
                </button>
            </div>
        </div>
    );
};

export default EventBubbling;
