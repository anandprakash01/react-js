import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>
        <input type="search" />
        <nav className="products-nav">
          <Link to="featured">Featured</Link>
          <Link to="new">New</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Products;
