import Home from "./Pages/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TopBar from "./components/Header/TopBar";
import WishPage from "./Pages/wishPage/WishPage";
import CartPage from "./Pages/cartPage/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/wishlist" element={<WishPage />} />
          <Route path="/cartlist" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
