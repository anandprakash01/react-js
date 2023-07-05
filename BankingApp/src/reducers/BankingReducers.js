// const initialState = {
//   currentBalance: 0,
//   accountType: "savings"
// }

const initialState = 0;

const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.amount;
    case "WITHDRAW":
      return state - action.amount;
    case "COLLECT_INTEREST":
      return state * 1.03;
    case "DELETE_ACCOUNT":
      return 0;
    default:
      return state;
  }
};

export default bankingReducer;

// Deposit
// {
//   type: "DEPOSIT",
//   amount: 10
// }

// Withdraw
// {
//   type: "WITHDRAW",
//   amount: 10
// }

// Collect Interest
// {
//   type: "COLLECT_INTEREST"
// }

// Delete Account
// {
//   type: "DELETE_ACCOUNT"
// }
