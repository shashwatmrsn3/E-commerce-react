import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Navbar = ({isAuthenticated}) =>{
  
  const authLinks=( <div className="d-flex justify-content-right">
  <span><Link to="/cart" className="m-2 text-dark"  href="">Cart</Link></span> 
  <span><Link to="/account" className="m-2 text-dark"  href="">Account</Link></span> 
  <span><Link to="/logout" className="m-2 text-dark"  href="">Logout</Link></span> 
  </div>);

  const guestLinks = ( <div className="d-flex justify-content-right">
  <span><Link to="/cart" className="m-2 text-dark"  href="">Cart</Link></span> 
  <span><Link to="/login" className="m-2 text-dark"  href="">Login</Link></span>
  <span><Link to ="/register" className="m-2 text-dark"  href="">Register</Link></span>
  
  </div>);

  return(
        <div className="navbar navbar-dark default-color justify-content-between">
      <div className="container">
        <Link to="/" className="navbar-brand text-dark" href="#">Ecommerce </Link>
    
        <div className="d-flex justify-content-right">
        <form className="form-inline my-1 d-flex justify-content-right">
          <div className="md-form form-sm my-0">
          <input className="form-control form-control-sm mr-sm-2 mb-0" type="text" placeholder="Search"
            aria-label="Search"/>
          </div>
      <button className="btn btn-outline-white btn-sm my-0" type="submit">Search</button>
    </form>
  </div>
    {isAuthenticated? authLinks:guestLinks}
  </div>
</div>
    );
}

const mapStateToProps = state =>{
  return{
    isAuthenticated:state.auth.isAuthenticated
  }
}
export default connect(mapStateToProps)(Navbar);