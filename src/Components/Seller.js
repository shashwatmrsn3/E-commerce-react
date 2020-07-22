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
                       <td>id</td>
                       <td>name</td>
                       <td>description</td>
                       <td>price</td>
                       <td>stock</td>
                   </tr>
                   { products.map(product => <ProductItem product={product}/>)}
                </table>
            </div>

        </div>
        
    );
}


const mapStateToProps = state => {
    return{
        isSellerLoggedIn: state.sellerReducer.isSellerLoggedIn,
        products:state.sellerReducer.products
    }
}
export default connect(mapStateToProps,{loadProducts})(Seller);