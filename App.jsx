import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { LoginSignup } from './Pages/LoginSignup'
import { Cart } from './Pages/Cart'
import { Shop } from './Pages/Shop'
import { Footer } from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/Men' element={<ShopCategory banner = {men_banner} category='men' />} />
          <Route path='/Women' element={<ShopCategory banner = {women_banner} category='women' />} />
          <Route path='/Kids' element={<ShopCategory banner = {kid_banner} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App