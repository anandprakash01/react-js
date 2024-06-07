import {useState} from "react";

import {Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import {About} from "./components/About";
import Nav from "./components/Nav";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import {FeaturedProducts} from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />

        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
