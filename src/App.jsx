import { useState } from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Shop from './Components/Shop'
import About from './Components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact'
import CheckOut from './Components/CheckOut'
import Bill from './Components/Bill'
import ThankYou from './Components/ThankYou'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/checkout" element={<CheckOut/>}></Route>
        <Route path="/bill" element={<Bill/>}></Route>
        <Route path="/thankyou" element={<ThankYou/>}></Route>
      </Routes>

    </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
