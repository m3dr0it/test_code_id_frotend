import logo from './logo.svg';
import './App.css';
import {Login} from './components/Login'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Home} from './components/Home'
import {MyTransaction} from './components/MyTransaction'
import {AddUser} from './components/AddUser'
import {AddProduct} from './components/AddProduct'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path="/my-transaction">
        <MyTransaction/>
      </Route>
      <Route path="/register">
        <AddUser/>
      </Route>
      <Route path="/add-product">
        <AddProduct/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
