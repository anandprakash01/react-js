const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export const AlertButton = () => {
  const play = () => {
    console.log("playing");
  };
  //passing function which is in AlertButton to the element
  return (
    <Button onClick={play} msg="this is message">
      Play Anime
    </Button>
  );
};
