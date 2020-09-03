import React,{useEffect} from 'react';
import {getUserDetails} from '../Actions/Login';
import {connect } from 'react-redux';
const Account = (props) =>{
    useEffect(()=>{props.getUserDetails(props.id)},[])
    
    const jsx = <div>
        Name:{props.account.name}<br/>
        Email:{props.account.email}<br/>
        <table className="table">
            <h3>Orders</h3>
            <tr><th>Id</th><th>Date</th><th>Amount</th><th>Status</th></tr>
            {props.account.orders.map(order=> <tr><td>{order.id}</td><td>{order.date}</td><td>{order.amount}</td><td>{order.status}</td></tr>)}
        </table>
    </div>;
    return(
        <div className="container">
            <br/>
            <h2>Account Information</h2>
            {props.account.loading === true? <h2>Loading</h2> :jsx }
        </div>
    );
}
const mapStateToProps = (state) =>{
    return{
        id:state.auth.id,
        account:state.accountReducer
    }
}
export default connect(mapStateToProps,{getUserDetails})(Account);