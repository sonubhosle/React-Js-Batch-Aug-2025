import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
const Home = React.lazy(() => import('./Pages/Home/Home'))
const Cart = React.lazy(() => import('./Pages/Cart/Cart'))
const Orders = React.lazy(() => import('./Pages/Orders/Orders'))
const ProductPage = React.lazy(() => import('./Pages/Product/ProductDetails'))
const OrderDetails = React.lazy(() => import('./Pages/Orders/OrderDetails'))
import Header from './Components/Navbar/Header'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/loader'
import Category from './Pages/Category/Category'

const App = () => {
  return (
   <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductPage/>} />
        <Route path='/orders' element={<Orders/>} />
          <Route path='/orders/:id' element={<OrderDetails/>} />
          <Route path='/category/:slug' element={<Category/>} />
      </Routes>
      <Footer/>
   </Suspense>
  )
}

export default App