import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import {loadAllProduct} from "../Actions/Product";

const TrendingPane = ({products,loading,loadAllProduct}) => {
    React.useEffect(()=>{loadAllProduct()},[])
    
    return loading? <div className="container"><h2>Loading</h2></div> : (
        <div className="container product-section " id="">
            <h3>Just for you</h3>
            <div className="row mx-auto">
            
                {products.slice(20,24).map(product => <div className="col-3"><Product product={product}/></div> )}
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