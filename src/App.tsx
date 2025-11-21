import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
// Cart removed: CartModal no longer needed
import CheckoutSuccess from './pages/CheckoutSuccess'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
  <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
