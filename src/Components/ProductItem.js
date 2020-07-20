import React from 'react';

const ProductItem = ({product}) =>  {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
        </tr>
    );

}

export default ProductItem;