import React,{useState} from 'react';
import {connect} from 'react-redux';


const EditProduct = (props) => {
    
    const {name,description,stock,price,customImageFile} = props.location.params;
    return(
    <div className="container">
        <br/>
        <br/>
        <h2>Edit product</h2>
        <br/>
        <form>
            <table>
                <tr> <td>Name</td> <td><input type="text" placeholder="name" value={name}/><br/></td> </tr>
                <tr> <td>Description</td><td><input type="text" placeholder="description" value={description}/><br/></td></tr>
                <tr><td>Stock</td><td><input type="text" placeholder="stock" value={stock}/><br/></td></tr>
                <tr><td>Price</td><td><input type="text" placeholder="price" value={price}/><br/></td></tr>
                <tr><td>Image</td><td><img className="edit-image" src={"data:image/"+customImageFile.fileType+";base64,"+customImageFile.bytes}/></td></tr>
                
            </table>
        </form>
    </div>
    );
}


export default EditProduct;