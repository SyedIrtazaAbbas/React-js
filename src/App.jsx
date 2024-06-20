import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Shop from './Shop'
import Blogpage from './Blogpage'
import Aboutus from './Aboutus'
import Cart from './Cart'
import Washlist from './Washlist'
import Checkout from './Checkout'
import Contact from './Contact'
import Singlepage from './Singlepage'
import Account from './Account'

function App() {
  return (
<>
 
 <Header/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/shop' element={<Shop/>}/>
<Route path='/blog' element={<Blogpage/>}/>
<Route path='/about' element={<Aboutus/>} />
<Route path='/wishlish' element={<Washlist/>} />
<Route path='/cart' element={<Cart/>} />
<Route path='/check' element={<Checkout/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/singlepage' element={<Singlepage/>} />
<Route path='/account' element={<Account/>} />








 </Routes>
 <Footer/>

 </>
  )
}


export default App