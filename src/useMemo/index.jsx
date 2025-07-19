import React from "react";
import MemoFun from "./MemoFun";
import UseMemoHook from "./UseMemoHook";
import UseMemoHookForm from "./UseMemoHookForm";
import UseCallbackHook from "./useCallbackHook";

const index = () => {
    return (
        <>
            <h2 style={{textAlign: "center"}}>Memoization</h2>
            <h3>memo (Higher order component)</h3>
            <MemoFun />
            <hr />
            <h3>useMemo</h3>
            <UseMemoHook />
            <UseMemoHookForm />
            <hr />
            <h3>useCallback</h3>
            <UseCallbackHook />
        </>
    );
};

export default index;
