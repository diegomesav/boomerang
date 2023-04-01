import React from "react";
import Product from './components/Product';
import Products from './components/Products';
import './App.css';
import NavBar from './components/NavBar';
import { Typography } from '@material-ui/core';
import CheckoutPage from './components/CheckoutPage';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
    <div className="App">
      
      <NavBar/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}>  
        </Route>

        <Route path='/signin' element={<SignIn/>}>  
        </Route>

        <Route path='/checkout-page' element={<CheckoutPage/>}>  
        </Route>

        <Route path='/' element={<Products/>}> 
        </Route>
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
