import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
// Routes kind of replaces Switch
// Route must be nested in a Routes tag
// Default behavior or Routes is to use exact paths
// Routes does not nest | uses self closing tags with element prop - takes jsx component
// Navigate kind of replaces Redirect
// All nested "Route"s in a "Routes" tag are relative to parent's route path
// Must add a /* wildcard on path of parent route

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [cartIsEmpty] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/test"
            element={
              <div>
                <h2>Test Page</h2>
                <p>Hello!</p>
              </div>
            }
          />
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route
            path="/checkout"
            element={
              cartIsEmpty ? <Navigate to="/products" /> : <p>Checkout</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
