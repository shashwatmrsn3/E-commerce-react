import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {addProduct} from '../Actions/Product';
import {useHistory} from 'react-router';

const AddProducts = ({isSellerLoggedIn,addProduct}) =>{
    
    const history = useHistory();
    const [ formData,setFormData] = useState({
        name:'',
        description:'',
        price:'',
        stock:''
    });

    const {name,description,price,stock} = formData;

    const onChange = e =>{
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const onSubmit=e=>{
        e.preventDefault();
        addProduct(formData,history);
    }
    const addProductForm = (<div className="card text-">
    <div className="card-body">
        <div className="card-title">
            <h1>Add Products</h1>
        </div>
        <form action=""  onSubmit={e=>onSubmit(e)}>
            <input type="text" name="name" placeholder="name" value={name} onChange={onChange}/> <br/>
            <input className="" type="text" name="description" value={description} placeholder="description" onChange={onChange} /> <br/>
            <input type="text" name="price" placeholder="price" value={price} onChange={onChange} /> <br/>
            <input type="text" name="stock" placeholder="stock" value={stock} onChange={onChange} /> <br/>
            <input type="submit" value="submit" placeholder="login" className="btn btn-primary"/>
        </form>
    </div>
    </div>);

    if(!isSellerLoggedIn){
        return (<Redirect to="/login"/>);
    }

    return addProductForm;

}

const mapStateToProps = state =>{
    return{
        isSellerLoggedIn:state.sellerReducer.isSellerLoggedIn
    }
}
export default connect(mapStateToProps,{addProduct})( AddProducts);