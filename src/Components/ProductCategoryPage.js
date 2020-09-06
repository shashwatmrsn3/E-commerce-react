import React from 'react';
import Product from './Product';
import {Redirect } from "react-router-dom";

const ProductCategoryPage = (props) =>{
    if(props.location.products === undefined) { return <Redirect to="/"/>}
    return(
        <div className="container product-section">
            <br/>
            <h2>{props.location.category}</h2>
            <br/>
            <div className="row mx-auto">
            
            {props.location.products.map(product =>  <div className="col-3"><Product product={product}/></div>  )}
            </div>
        </div>
    );
}

export default ProductCategoryPage;