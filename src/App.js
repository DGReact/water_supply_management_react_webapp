import "./App.css";
import Home from "./pages/Home";
import Ourservices from "./pages/Ourservices";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  // return  <Home />;
  return (
  // <Ourservices/>
  <BrowserRouter>
      <Routes>
          <Route exact path="/services" element={<Ourservices />} />
          <Route exact path="/products" element={<Products/>} />
          <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
