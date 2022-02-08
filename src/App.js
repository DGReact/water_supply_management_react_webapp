import "./App.css";
import Home from "./pages/Home";
import Ourservices from "./pages/Ourservices";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  // return  <Home />;
  return (
  // <Ourservices/>
  <BrowserRouter>
      <Routes>
          <Route exact path="/services" element={<Ourservices />} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/products-details" element={<ProductDetails/>} />
          <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
