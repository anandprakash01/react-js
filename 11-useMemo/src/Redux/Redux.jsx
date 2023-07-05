import { useSelector, useDispatch } from "react-redux";
import { combineReducers, createStore } from "redux";

// -------------------------Action creator-------------------
// Actions
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

//Delete policy
const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

//Create claim
const createClaim = (name, amountOfmoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    playload: {
      name: name,
      amount: amountOfmoneyToCollect,
    },
  };
};

// -----------------------------------Reducers------------------------
const claimHistory = (oldClaims = [], action) => {
  if (action.type == "CREATE_CLAIM") {
    const newClaim = action.payload;
    return [...oldClaims, newClaim];
  }
  return oldClaims;
};

const accounting = (bagOfMoney = 10, action) => {
  if (action.type == "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amount;
  }
  if (action.type == "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listofPolicies = [], action) => {
  if (action.type == "CREATE_POLICY") {
    return [...listofPolicies, action.payload.name];
  }
  if (action.type == "DELETE_POLICY") {
    return listofPolicies.filter((policy) => {
      return policy != action.payload.name;
    });
  }
  return listofPolicies;
};

// -----------------combine all reducers---------------

export const ourDepartment = combineReducers({
  //key Name can be anything
  accounting: accounting,
  policies: policies,
  claimHistory: claimHistory,
});

console.log(createClaim("anand", 10));

const ReduxComponent = () => {
  //dispatch
  const dispatch = useDispatch();
  dispatch(createPolicy("hr", 100));
  dispatch(createPolicy("prakash", 200));
  dispatch(createPolicy("anand", 10));
  // dispatch(createClaim("anand", 5));
  // dispatch(deletePolicy("hr"));

  const ac = useSelector((preState) => {
    return preState;
  });
  console.log(ac);
  return <h1>REDUX</h1>;
};

export default ReduxComponent;
