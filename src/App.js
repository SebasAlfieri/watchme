import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Products/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemTopContainer from './components/ItemTop/ItemTopContainer';
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import CartView from "./components/Cart/CartView"
import Checkout from "./components/Checkout/Checkout"
import UserContextProvider from "./context/userContext"
import CartContextProvider from "./context/cartContext"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <CartContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <NavBar/>
        <div className='separador'></div>
        <Routes>
          <Route path="/" element={
              <Login/>
            }/>
          <Route path="/inicio" element={
            <div>
              <ItemTopContainer/>
              <ItemListContainer/>
            </div>
          }/>
            <Route path="/category/:cat" element={
            <ItemListContainer/>
          }/>
          <Route path="/watch/:id" element={
            <ItemDetailContainer/>
          }/>
          <Route path="/contact" element={
            <Contact/>
          }/>
          <Route path="/cart" element={
            <CartView/>
          }/>
          <Route path="/checkout/:id" element={
            <Checkout/>
          }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserContextProvider>
    </CartContextProvider>
  );
}

export default App;
