import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Seller = ({isSellerLoggedIn}) => {
    
    if(!isSellerLoggedIn){
        return <div>You have to be logged in as a vendor to continue </div>
    }
    
    return(
        <div className="container">
            <br/>
            <br/>
            <h1>Seller center</h1>
            <h2>Welcome seller</h2>
        </div>
    );
}


const mapStateToProps = state => {
    return{
        isSellerLoggedIn: state.sellerReducer.isSellerLoggedIn
    }
}
export default connect(mapStateToProps)(Seller);