import React,{useState} from 'react';
import Homepage from './Homepage';
import {Redirect, useHistory} from 'react-router-dom';
import { connect} from "react-redux";
import {addToCartAsGuest,addToCartAsUser} from '../Actions/Order';
import {rateProduct} from '../Actions/Product';

const ProductDetails =(props ) => {
    const history = useHistory();
    const [data,setData] = useState({
        quantity:1
    });
    const [ratingData,setRatingData] = useState({
        ratingNumber:1,
        review:''
    });
    const {ratingNumber,review} = ratingData;
    
    if(typeof props.location.product === 'undefined') return <Redirect to="/"/>;
    const {id,name,description,price,stock,customImageFile,rating} = props.location.product;
    var totalRating=0;
    rating.map(rate=> totalRating = totalRating+rate.rating);
    const avgrating = totalRating/rating.length;
    const {quantity} = data;
    const onSubmit = e =>{
        e.preventDefault();
         props.addToCartAsGuest(id,quantity,props.location.product);
        
        
    }
    const onChangeRatingData = (e) =>{
        e.preventDefault();
        setRatingData({...ratingData,[e.target.name]:e.target.value});
        
    } 
   const onChange = e =>{
       e.preventDefault();
       setData({...data,[e.target.name]:e.target.value});
       
   }
   
   const onSubmitRating =e =>{
        e.preventDefault();
        props.rateProduct({rating:ratingNumber,review:review},id,history);
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
                <p>Rating: {rating.length===0? <span>No ratings</span> : avgrating}</p>
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
                    <h3>Rate</h3>
                    <form onSubmit={onSubmitRating}>
                    Rating: <select name="ratingNumber" value={ratingNumber} onChange={onChangeRatingData}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br/>
                    Review: <input type="text-box" name="review" value={review} onChange={onChangeRatingData}/>
                    <br/><input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
                
                   {rating.map(rate=>{
                       return(
                        <div className="questions">
                       <div><p>Rating: {rate.rating}</p>
                       <p>Review: {rate.review}</p>
                       </div>
                       </div>);
                   })}
                
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
export default connect(mapStateToProps,{addToCartAsGuest,addToCartAsUser,rateProduct})(ProductDetails);