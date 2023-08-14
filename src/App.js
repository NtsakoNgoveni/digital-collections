import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';
import Cart from './Cart';
import Categories from './categories';
import StateProvider from './Context';
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Main()
{
  return(
  <StateProvider>
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
            <Route exact path='/' element={<Shop/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Categories' element={<Categories/>}/>
        </Routes>
        <Footer/> 
      </div>
    </BrowserRouter>
    </StateProvider>
  )
}

export default Main
