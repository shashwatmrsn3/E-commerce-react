import React,{useState} from 'react';
import {editProduct} from '../Actions/Product';
import {connect} from 'react-redux';
import {useHistory} from 'react-router';
 
const EditProduct = ({location,editProduct}) =>{
    const {name,description,price,stock,customImageFile,id} = location.params;
    const [formData,setFormData] = useState({
        productName:name,
        productDescription:description,
        productPrice:price,
        productStock:stock,
        productImage:customImageFile,
        id:id
    });
    const history = useHistory();
    const {productName,productDescription,productPrice,productStock,productImage} = formData;
    const data  = new FormData();
    const onChange = e =>{
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const onImageChange = e =>{
        e.preventDefault();
        console.log(e.target.files[0]);
        data.append('image',e.target.files[0]);
    }

    const onSubmit = e => {
        e.preventDefault();
        data.append('name',productName);
        data.append('description',productDescription);
        data.append('price',productPrice);
        data.append('stock',productStock);
        data.append("id",id);
        editProduct(data,history);
    }
    
    return(
        <div className="container">
            <br/>
            <br/>
            <h2>Edit product form</h2>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="productName" value={productName} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td><input type = "text" name="productDescription" value = {productDescription} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><input type = "text" name="productPrice" value={productPrice} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td><input type = "text" name="productStock" value={productStock} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td>Image</td>
    <td>{productImage === null? <p>No image</p> : <img src={"data:image/"+productImage.fileType+";base64,"+productImage.bytes} className="edit-image"/>}</td>
                    </tr>
                    <tr>
                        <td>New image</td>
                        <td><input type="file" onChange={onImageChange}/></td>
                    </tr>
                    <tr>
                        <td>Submit</td>
                        <td><input type="submit" value="submit" placeholder="Edit product"/></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default connect(null,{editProduct})(EditProduct);