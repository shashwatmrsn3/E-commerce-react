import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart,placeOrder} from '../Actions/Order';
import {useHistory} from 'react-router';

const Cart = (props) => {

    const onRemoveClick = (e) => {
        e.preventDefault();
        props.removeFromCart(e.target.id);
    }
    const history = useHistory();
    const placeOrder = (e) => {
        e.preventDefault();
        if(props.isAuthenticated == false) {
            console.log("inside for loop");
            history.push({pathname:"/login",source:"cart"});
        }else{
            const productArray = Object.entries(props.products).map(value=>value[0]);
            const quantityArray = Object.entries(props.products).map(value=>value[1].quantity);
            
            history.push({pathname:"/shipping",productArray:productArray,quantityArray:quantityArray});
        }
        
    }
    return(
        <div className="container">
            <br/>
            <h2>Cart</h2>
            <table border="1" className="cart-table">
                <tr><th colSpan="2"> Product </th><th> Quantity </th><th> Price </th><th> Remove </th></tr>
                {Object.entries(props.products).map((value)=>
                    <tr><td><img className="edit-image" src={"http://localhost:8080/getImage/"+value[0]}/></td><td>{value[1].name}</td><td >{value[1].quantity}</td><td>{value[1].price}</td><td><div className="btn btn-danger" id={value[0]} onClick={onRemoveClick}>Remove</div></td></tr>
                )}
                {/* {Object.keys(props.products).map((key,index) => <tr><td><img className="edit-image" src={"http://localhost:8080/getImage/"+key}/></td><td>{props.products[key]}</td><td>{props.products[key].quantity}</td></tr>)} */}
            </table>
                <br/>
                <p>Total order value: {props.cartValue}</p>
                <p>Total Items: {props.cartQuantity}</p>
                <br/>
                <div className="btn btn-primary" onClick={placeOrder}>Place order</div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        products:state.orderReducer.products,
        cartValue:state.orderReducer.cartvalue,
        cartQuantity:state.orderReducer.cartQuantity,
        isAuthenticated:state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps,{removeFromCart,placeOrder})(Cart);