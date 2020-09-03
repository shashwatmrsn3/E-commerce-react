import React,{useState} from 'react';
import './static/css/style.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Login from "./Components/Login";
import store from './store';
import Register from './Components/Register';
import Alert from './Components/Alert';
import setAuthToken from './Utils/setAuthToken';
import RegisterVendor from './Components/RegisterVendor';
import Footer from './Components/Footer';
import Seller from './Components/Seller';
import VendorLogIn from './Components/VendorLogIn';
import AddProducts from './Components/AddProducts';
import EditProduct from './Components/EditProduct';
import Test from './Components/Test';
import ProductDetail from './Components/ProductDetails';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import  Shipping  from './Components/Shipping';
import Account from './Components/Account';



function App() {
  
  if(localStorage.token){
    setAuthToken(localStorage.token);
  }
  if (typeof window !== 'undefined') {
    window.React = React;
}
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          
          <Navbar/>
          <Alert/>
          <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/registerVendor" component={RegisterVendor}/>
          <Route exact path="/seller" component={Seller}/>
          <Route exact path="/vendorlogin" component={VendorLogIn}/>
          <Route exact path="/addProducts" component={AddProducts}/>
          <Route exact path="/editProduct" component = {EditProduct}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path = "/productDetails" component={ProductDetails}/>
          <Route exact path = "/cart" component = {Cart}/>
          <Route exact path = "/shipping" component={Shipping}/>
          <Route exact path="/account" component={Account}/>
          </Switch>
          <Footer/>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
