import React from "react";

const PropsChildren = () => {
    return (
        <div>
            <Layout btnTitle="this is title">
                {/* all inside this is children prop */}
                <h4>this is header</h4>
                <h4>this is footer</h4>
            </Layout>
        </div>
    );
};

const Layout = props => {
    const {children, btnTitle} = props;
    return (
        <div>
            <div>{children}</div>
            <button>{btnTitle}</button>
        </div>
    );
};

export default PropsChildren;
