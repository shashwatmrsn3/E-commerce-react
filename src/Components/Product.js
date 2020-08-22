import React from 'react';
import noimg from '../../src/static/img/noimage.png';
import {Link} from 'react-router-dom';


const Product =({product}) => {

    return(
        <div className="card">
            {     product.customImageFile === null? <img src = {noimg} className="ïmg-fluid"/> : <img src={"http://localhost:8080/getImage/"+product.id}/>}

            <div className="card-body">
            </div>
            <Link   to={{pathname:"/productDetails",product:product}}><h5 className="card-title">{product.name}</h5></Link>           
        </div>


);
}

export default Product;