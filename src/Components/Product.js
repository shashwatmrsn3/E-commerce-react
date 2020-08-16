import React from 'react';
import noimg from '../../src/static/img/noimage.png';


const Product =({product}) => {

    return(
        <div className="card">
            {     product.customImageFile === null? <img src = {noimg} className="ïmg-fluid"/> : <img src={"data:image/"+product.customImageFile.fileType+";base64,"+product.customImageFile.bytes} className="img-fluid"/>}

            <div className="card-body">
            </div>
            <h5 className="card-title">{product.name}</h5>           
        </div>


);
}

export default Product;