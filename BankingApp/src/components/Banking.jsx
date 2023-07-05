import { Input, Button, Flex } from "@mantine/core";
import { useRef } from "react";
import { useDispatch } from "react-redux";

// Action Creators
const createDeposit = (amount) => {
  return {
    type: "DEPOSIT",
    amount: Number(amount),
  };
};

const createWithdraw = (amount) => {
  return {
    type: "WITHDRAW",
    amount: Number(amount),
  };
};

const createCollectInterest = () => {
  return {
    type: "COLLECT_INTEREST",
  };
};

const createDeleteAccount = () => {
  return {
    type: "DELETE_ACCOUNT",
  };
};

export const Banking = () => {
  const inputRef = useRef(null); //to prevent re-renders
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(createDeposit(inputRef.current.value));
  };

  const handleWithdraw = () => {
    dispatch(createWithdraw(inputRef.current.value));
  };

  const handleCollectInterest = () => {
    dispatch(createCollectInterest());
  };

  const handleDeleteAccount = () => {
    dispatch(createDeleteAccount());
  };

  return (
    <div>
      <div>
        <Input ref={inputRef} style={{ width: "50%" }} />
      </div>

      <Flex
        mih={50}
        gap="xl"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
        style={{ marginTop: "2rem" }}
      >
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          onClick={handleDeposit}
        >
          Deposit
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          onClick={handleWithdraw}
        >
          Withdraw
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          onClick={handleCollectInterest}
        >
          Collect Interest
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
      </Flex>
    </div>
  );
};
