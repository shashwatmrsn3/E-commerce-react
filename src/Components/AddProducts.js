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
        stock:'',
        category : 'Grocery'
        
    });
    const[image,setImage] = useState(null);

    const {name,description,price,stock,category} = formData;

    const data = new FormData();

    const onChange = e =>{
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value});
    }
        
    const onfileChange = e => {
        e.preventDefault();
        data.append('image',e.target.files[0]);
    }
    const onSubmit=e=>{
        e.preventDefault();
        
        data.append('name',name);
        data.append('description',description);
        data.append('price',price);
        data.append('stock',stock);
        data.append('category',category);
        addProduct(data,history);
    }
    const addProductForm = (<div className="card container">
    <div className="card-body">
        <div className="card-title">
            <h1>Add Products</h1>
        </div>
        <form action=""  onSubmit={e=>onSubmit(e)} enctype="multipart/form-data">
            <input type="text" name="name" placeholder="name" value={name} onChange={onChange}/> <br/>
            <input className="" type="text" name="description" value={description} placeholder="description" onChange={onChange} /> <br/>
            <input type="text" name="price" placeholder="price" value={price} onChange={onChange} /> <br/>
            <input type="text" name="stock" placeholder="stock" value={stock} onChange={onChange} /> <br/>
            <select name="category" onChange={onChange} value={category}>
                <option value="Grocery">Grocery</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparels">Apparels</option>
                <option value="Accessories">Accessories</option>
                <option value="Home and living">Home and living</option>
                <option value="Automotive">Automotive</option>
            </select>   <br/>
            <input type="file" name="image" placeholder="image"  onChange={onfileChange} /> <br/>
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