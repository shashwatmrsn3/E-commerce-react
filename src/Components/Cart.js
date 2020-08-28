import React from 'react';
import {connect} from 'react-redux';

const Cart = (props) => {


    return(
        <div className="container">
            <br/>
            <h2>Cart</h2>
            <table border="1">
                <tr><th>Image</th><th>Name</th><th>Quantity</th></tr>
                {Object.entries(props.products).map((value)=>
                    <tr><td><img className="edit-image" src={"http://localhost:8080/getImage/"+value[0]}/></td><td>{value[1].name}</td><td>{value[1].quantity}</td></tr>
                )}
                {/* {Object.keys(props.products).map((key,index) => <tr><td><img className="edit-image" src={"http://localhost:8080/getImage/"+key}/></td><td>{props.products[key]}</td><td>{props.products[key].quantity}</td></tr>)} */}
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        products:state.orderReducer.products,
        cartValue:state.orderReducer.cartValue,
        cartQuantity:state.orderReducer.cartQuantity
    }
}
export default connect(mapStateToProps)(Cart);