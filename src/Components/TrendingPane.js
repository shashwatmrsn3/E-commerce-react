import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import {loadAllProduct} from "../Actions/Product";

const TrendingPane = ({products,loading,loadAllProduct}) => {
    React.useEffect(()=>{loadAllProduct()},[])
    
    return loading? <div className="container"><h2>Loading</h2></div> : (
        <div><div className="container product-section " id="">
            <h3>Groceries</h3>
            <div className="row mx-auto">
            
            {products.filter((product)=>product.category==="Grocery").slice(0,4).map(product =>  <div className="col-3"><Product product={product}/></div>  )}
            </div>
        </div>

    <div className="container product-section " id="">
    <h3>Apparels</h3>
    <div className="row mx-auto">

        {products.filter((product)=>product.category==="Apparels").slice(0,4).map(product =>  <div className="col-3"><Product product={product}/></div>  )}
    </div>
    </div>
    </div>
    )
}

const mapStateToProps = state => {
    return{
        products:state.productReducer.products,
        loading:state.productReducer.loading
    }
}
export default connect(mapStateToProps,{loadAllProduct})( TrendingPane);