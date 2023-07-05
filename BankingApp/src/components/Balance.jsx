import { Title } from "@mantine/core";
import { useSelector } from "react-redux";

// useSelector will give state which is in redux store
const Balance = () => {
  const state = useSelector((storeSta) => {
    return storeSta;
  });
  return (
    <div>
      <Title order={1}>Balance : Rs. {state}</Title>
    </div>
  );
};

export default Balance;
