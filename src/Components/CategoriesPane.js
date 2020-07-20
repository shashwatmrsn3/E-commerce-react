import React from 'react';
import banner from '../static/img/banner.png'; 

const CategoriesPane  = () => {
    return(
        <div className="container border">
            <div className="row">
              <div className="col-2 bg-light mx-auto">
                <br/>
                <h5 className="mx-auto">Categories</h5>
                <br/>
                <ul >
                  <li className="nav-link">Groceries</li>
                  <li className="nav-link">Electronics</li>
                  <li className="nav-link"> Apparels</li>
                  <li className="nav-link">Accessories</li>
                  <li className="nav-link">Home and living</li>
                  <li className="nav-link">Automotive</li>
                </ul>
              </div>
              <div className="col-10">
                <img className="img-fluid" src={banner}/>
              </div>
            </div>	
          </div>
    );
} 

export default CategoriesPane;