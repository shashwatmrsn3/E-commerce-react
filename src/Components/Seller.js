import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import ProductItem from './ProductItem';
import {loadProducts} from '../Actions/Product';

const Seller = ({loadProducts,isSellerLoggedIn,products}) => {
    useEffect(()=>{
        
    },[products]);
    if(!isSellerLoggedIn){
        return <div className="container">You have to be logged in as a vendor to continue </div>
    }
    const jsx = <div><h2>Welcome seller</h2><br/>
    <h3>Products</h3>
    <div><Link to="/addProducts">Add products</Link></div>
    </div>
    if(products === undefined) {
        return jsx
    }else{
    return(
        <div className="container">
            <br/>
            <br/>
            
            <h2>Welcome seller</h2><br/>
            <h3>Products</h3>
            <div><Link to="/addProducts">Add products</Link></div>

            <div>
                <table className="table">
                   <tr>
                       <th>id</th>
                       <th>name</th>
                       <th>description</th>
                       <th>price</th>
                       <th>stock</th>
                       <th>edit</th>
                   </tr>
                   
                   { products.map(product => <ProductItem key={product.id} product={product}/>)}
                </table>
            </div>

        </div>
        
    );}
}


const mapStateToProps = state => {
    return{
        isSellerLoggedIn: state.sellerReducer.isSellerLoggedIn,
        products:state.sellerReducer.products
    }
}
export default connect(mapStateToProps,{loadProducts})(Seller);