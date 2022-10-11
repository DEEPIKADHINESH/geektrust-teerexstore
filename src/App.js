
import './App.css';
import {Switch,Route} from "react-router-dom";
import Cart from './component/Cart';
import Product from './component/Product';
function App() {
  return (
    <div >
    <Switch>
    <Route path="/product" component={Product}></Route>
    <Route path="/cart" component={Cart}></Route>
    </Switch>
       
      <h1>page</h1>
      
       
    </div>
  );
}

export default App;
