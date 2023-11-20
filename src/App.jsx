import React from 'react'
import Home from './Pages/Home'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/productDetails' element={<ProductDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;