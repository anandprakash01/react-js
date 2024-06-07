const Input = ({ className = "", ...restprops }) => {
  //   return <input {...props} className={`anand ${props.className || ""}`} />;
  return <input {...restprops} className={`anand ${className}`} />;
};

const DestructureProps = () => {
  return <Input className="random" type="text" maxLength={10}></Input>;
};

export default DestructureProps;
