import React from "react";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Users from "./pages/Users";
import About from "./pages/About";
import Error from "./pages/Error";

const Routing = () => {
    const LayOut = () => {
        return (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        );
    };
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<LayOut />} errorElement={<Error />}>
                    <Route index element={<Home />} />
                    <Route index path="/home" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="user" element={<Users />} />
                <Route path="*" element={<Error />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default Routing;
