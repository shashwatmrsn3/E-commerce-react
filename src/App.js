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



function App() {
  
  if(localStorage.token){
    setAuthToken(localStorage.token);
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
          </Switch>
          <Footer/>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
