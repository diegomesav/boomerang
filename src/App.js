import Product from './components/Product';
import Products from './components/Products';
import './App.css';
import NavBar from './components/NavBar';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Products/>
      {/*<Product/>*/}
    </div>
  );
}

export default App;
