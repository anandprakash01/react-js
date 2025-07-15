import React from "react";
import UseStateHook from "./useStateHook";
import {FormValidation} from "./FormValidation";
import {LazyState} from "./LazyState";
import UpdatingUseState from "./UpdatingUseState";
import LiftingStateUp from "./LiftingStateUp";

const index = () => {
    return (
        <>
            <h2>useState Hook</h2>
            <UseStateHook />
            <FormValidation />
            <LazyState />
            <UpdatingUseState />
            <LiftingStateUp />
            <hr />
        </>
    );
};

export default index;
