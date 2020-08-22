import React from 'react';
import {connect} from 'react-redux';

const Cart = (props) => {


    return(
        <div className="container">
            <br/>
            <h2>Cart</h2>
            <table border="1">
                <tr><th>Image</th><th>Name</th><th>Quantity</th></tr>
                {props.products.map((product,index) => <tr><td><img className="edit-image" src={"http://localhost:8080/getImage/"+product.id}/></td><td>{product.name}</td><td>{props.quantities[index]}</td></tr>)}
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        products:state.orderReducer.products,
        quantities: state.orderReducer.quantity
    }
}
export default connect(mapStateToProps)(Cart);