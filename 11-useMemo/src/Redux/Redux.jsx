// -------------------------Action creator-------------------

// ------------------------Actions---------------------------
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
      amountOfmoneyToCollect: amountOfmoneyToCollect,
    },
  };
};

// -----------------------------------Reducers------------------------
const claimHistory = (oldClaims, action) => {
  if (action.type == "CREATE_CLAIM") {
    const newClaim = action.payload;
    return [...oldClaims, newClaim];
  }
  return oldClaims;
};

const accounting = (bagOfMoney, action) => {
  if ((action.type = "CREATE_CLAIM")) {
    return (bagOfMoney = action.payload.amountOfmoneyToCollect);
  }
  if ((action.type = "CREATE_POLICY")) {
    return (bagOfMoney = action.payload.amount);
  }
  return bagOfMoney;
};

const policies = (listofPolicies, action) => {
  if ((action.type = "CREATE_POLICY")) {
    return [...listofPolicies, action.payload.name];
  }
  if ((action.type = "DELETE_POLICY")) {
    return listofPolicies.filter((policy) => {
      return policy.name != action.payload.name;
    });
  }
  return listofPolicies;
};

const Redux = () => {};
