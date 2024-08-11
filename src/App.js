import React from "react";
import Product from './components/Product';
import Products from './components/Products';
import './App.css';
import NavBar from './components/NavBar';
import { Typography } from '@mui/material'
import CheckoutPage from './components/CheckoutPage';
import {Navigate, Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';
import Checkout from "./components/checkoutForm/Checkout";


import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

function App() {
/*"homepage": "https://boomerangfotografia.000webhostapp.com/",*/
  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      
    <ThemeProvider theme={theme}>
            <NavBar />
          </ThemeProvider>
      <Routes>
        <Route path='/signup' element={<SignUp/>}>  
        </Route>

        <Route path='/signin' element={<SignIn/>}>  
        </Route>

        <Route path='/checkout-page' element={
          <ThemeProvider theme={theme}>
            <CheckoutPage />
          </ThemeProvider>}>  
        </Route>

        <Route path='/checkout' element={
          <ThemeProvider theme={theme}>
            <Checkout />
          </ThemeProvider>}>  
        </Route>

        <Route path='/' element={
          <ThemeProvider theme={theme}>
            <Products />
          </ThemeProvider>}> 
        </Route>

        <Route render={() => <Navigate to='/' />} />
      </Routes>
      
      
    </div>
    </Router>
    
  );
}

export default App;
