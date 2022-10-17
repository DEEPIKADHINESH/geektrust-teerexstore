
import './App.css';
import {Switch,Route} from "react-router-dom";
import Cart from './component/Cart';
import Product from './component/Product';
import {CartProvider} from "react-use-cart";
function App() {
  return (
    <div >
    <CartProvider>
    <Switch>
      
    <Route path="/product" component={Product}></Route>
    <Route path="/cart" component={Cart}></Route>
    <Route path="/" component={Product}></Route>
  </Switch>
   
    </CartProvider>
      
       
    </div>
  );
}

export default App;
