import React,{useState} from 'react';
import {placeOrder} from '../Actions/Order';
import {connect} from 'react-redux';

const Shipping = (props) => {
    
    const [formData,setFormData] = useState({
        province:"",
        city:'',
        street:''
    });
    const { province,city,street} = formData;

    const onSubmit = (e) =>{
        e.preventDefault();
        const shippingString = province+","+city+","+street;
        props.placeOrder(props.location.productArray,props.location.quantityArray,shippingString);
    }
    const onChange = (e) => {
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    return(
        <div className="container">
            <br/>
            <br/>
            <h2>Shipping Information</h2>
            <br/>
            <form onSubmit={onSubmit}>
            <table>
               
                    <tr><td>Province</td><td><input type="text" name="province" value ={province} onChange={onChange}/></td></tr>
                    <tr><td>City</td><td><input name="city"  type = "text" value ={city} onChange={onChange}/></td></tr>
                    <tr><td>Street</td><td><input name="street" type = "text" value ={street} onChange={onChange}/></td></tr>
                    <br/>
                    <input type="submit"/>
            </table>
            </form>
        </div>
    );
}

export default connect(null,{placeOrder})(Shipping);