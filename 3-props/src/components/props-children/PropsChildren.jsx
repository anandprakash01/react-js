import React from "react";

const Button = ({btnTitle, children}) => {
  return <button title={btnTitle}>{children}</button>;
};

const Layout = props => {
  return (
    <main>
      {props.children}
      <Button btnTitle={props.btnTitle}>Click me</Button>
    </main>
  );
};

// -------------main Component------------
const PropsChildren = () => {
  return (
    <>
      <Button>Click me</Button>
      <Layout btnTitle="this is title">
        {/* all inside this is children prop */}
        <h4>this is header</h4>
        <h4>this is footer</h4>
      </Layout>
    </>
  );
};
export default PropsChildren;
