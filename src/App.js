import Product from './components/Product';
import Products from './components/Products';
import './App.css';
import NavBar from './components/NavBar';
import { Typography } from '@material-ui/core';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CheckoutPage/>
      {/*<Products/>*/}
      {/*<Product/>*/}
    </div>
  );
}

export default App;
