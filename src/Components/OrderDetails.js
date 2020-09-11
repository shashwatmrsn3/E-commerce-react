import React, { Fragment } from 'react';
import order from '../Reducer/order';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';


const OrderDetails = (props) => {
    if(props.auth ===false) return (<Redirect to="/"/>)
    
    return(<div className="container">
        <br/>
        <h2>Order Details</h2><br/>
        Order Id: {props.location.order.id}<br/>
        Ordered Date : {props.location.order.date}<br/>
        Order Status: {props.location.order.status}<br/>

        Order Items:
        <table className="table">
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            {props.location.order.orderItems.map(item=>{
                                return(
                                    <tr>
                                        <td>{item.product.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.product.price}</td>
                                    </tr>
                                );
                            })}
                           
        
        </table> 
        Amount:{props.location.order.amount}
    </div>);
}

const mapStateToProps = state => {
    return{
        auth : state.auth.isAuthenticated
    }
}
export default connect()(OrderDetails);