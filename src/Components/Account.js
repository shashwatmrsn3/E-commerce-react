import React,{useEffect,Fragment} from 'react';
import {getUserDetails} from '../Actions/Login';
import {connect } from 'react-redux';
const Account = (props) =>{
    useEffect(()=>{props.getUserDetails(props.id)},[])
    
    const jsx = (<div>
     
        Name:{props.account.name}<br/>
        Email:{props.account.email}<br/><br/><br/>
        
            <h3>Orders</h3>
            
            {props.account.orders.map(order => {
                return <Fragment><div className="rounded-top bg-light w-50 mt-10">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Order #{order.id}</h3>
                            <p>Placed date: {order.date}</p>
                            <p>Status: {order.status}</p>
                            <div className="btn btn-primary">Details</div>

                        </div>
                        
                    </div>
                </div>
                <br/>
                </Fragment>
            })}
        
    </div>);
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