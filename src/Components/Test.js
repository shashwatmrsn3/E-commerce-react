import React from 'react';
import {connect} from 'react-redux';

const Test = ({image}) =>{
    return(<div>
        <img src={"data:image/jpg;base64,"+image.bytes}/>
    </div>)

}

const mapStateToProps = state =>{
    return{
        image:state.sellerReducer.products[31].customImageFile
    }
}

export default connect(mapStateToProps)(Test);