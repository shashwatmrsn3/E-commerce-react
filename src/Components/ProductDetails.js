import React,{useState} from 'react';
import Homepage from './Homepage';
import {Redirect, useHistory} from 'react-router-dom';
import { connect} from "react-redux";
import {addToCartAsGuest,addToCartAsUser} from '../Actions/Order';

const ProductDetails =(props ) => {
    const [data,setData] = useState({
        quantity:1
    });
    if(typeof props.location.product === 'undefined') return <Redirect to="/"/>;
    const {id,name,description,price,stock,customImageFile} = props.location.product;
    
    const {quantity} = data;
    const onSubmit = e =>{
        e.preventDefault();
         props.addToCartAsGuest(id,quantity,props.location.product);
        
        
    }
   const onChange = e =>{
       e.preventDefault();
       setData({...data,[e.target.name]:e.target.value});
       
   }
    return (
        <div className="container product-container bg-light">
        <br/>
        <h1 mt-10>Product details</h1>
        <br/>
        <br/>
        
        <div className="row">
            <div className="col-4">
                <img src={"http://localhost:8080/getImage/"+id} className="img-fluid"/>
            </div>
            <div className="col-6">
                <h2>{name}</h2>
                <h4>Rs {price}</h4>
                <p>Rating: 4.5</p>
                <form onSubmit={onSubmit}> 
                
                
                Quantity: <select onChange={onChange} name="quantity" value={quantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br/>
                <br/>
                <input type="submit" value="Add to cart" className="btn btn-primary"/>
                </form>
                <br/>
                <br/>
                <p>{description}</p>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-6">
                <h2>Questions </h2>
                <div className="questions">
                    <p>Q. How long delivery? </p>
                    <p>A. Depends on location</p>
                </div>
                <div className="questions">
                    <p>Q. Material ? </p>
                    <p>A. Pure leather</p>
                </div>
            </div>
            <div className="col-6">
                <h2>Reviews</h2>
                <div className="questions">
                    <p>Rating: 5</p>
                    <p>Loved the product</p>
                </div>
                <div className="questions">
                    <p>Rating: 2</p>
                    <p>Quality is not very nice</p>
                </div>
            </div>
        </div>
    </div>
    );
}

const mapStateToProps = state => {
    return{
        loggedIn : state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps,{addToCartAsGuest,addToCartAsUser})(ProductDetails);