import React from 'react';
import {Link} from 'react-router-dom';

const ProductItem = ({product}) =>  {
    return (
      
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td><Link className="primary" to={{pathname:"/editProduct",params:product}} >Edit</Link></td>
        </tr>
        
    );

}

export default ProductItem;