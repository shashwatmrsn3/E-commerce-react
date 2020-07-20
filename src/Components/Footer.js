import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <div>
            <section className="container-fluid  bg-dark" id="footer">
            <div className="container">
              <br/>
              <br/>
            <div className="row mt-20 footer-row">
              <br/>
              <br/>
              <div className="col-3 text-white">

                <h2>Customer care</h2>
                <p>24*7 customer care support</p>
                <p>Live support</p>
                <p>Email support</p>
                <h2>Refund </h2>
                <p>Refundable items</p>
                <p>Refund policy</p>
                
              </div>
              <div className="col-3 text-white">
                <h2>Delivery </h2>
                <p>Free standard delivery</p>
                <p>Express delivery</p>
                <p>International delivery</p>
                <h2>Partner</h2>
                <p> <Link to="/registervendor">Register Vebdor</Link></p>
                <p className="text-white"> <Link to="/seller">Seller Center</Link></p>
              </div>
              <div className="col-3 text-white">
                <h2>Payment options</h2>
                <p>Cash on delivery</p>
                <p>Paypal</p>
                <p>Esewa</p>
              </div>
            </div>
            <br/>
            <br/>
          </div>
          </section>
        </div>
    );
}

export default Footer;