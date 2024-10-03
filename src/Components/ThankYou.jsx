import React from "react";
import { Link } from "react-router-dom";
import './ThankYou.css'

const ThankYou=(props)=>{
    const data = props.data;
    return(
        <>
        <section className="thanky">
            <div className="thank">
                <h1 className="t-1">Thank You !!</h1>
                <h3 className="t-2">Your Order Place</h3>
                    <Link to="/" className="t-3">
                    <button className="t-4">Continue Shopping</button></Link>
            </div>
        </section>
          <section className="container">
        <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>Field</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{data.fname}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{data.lname}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{data.address}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data.city}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data.code}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data.phone}</td>
              </tr>
              <tr>
                <td>Product Name</td>
                <td>The Rage of Dragons</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>$50.00</td>
              </tr>
              <tr>
                <td>Payment Method</td>
                <td>Cash on Delivery</td>
              </tr>
            </tbody>
          </table>
        
    </section>
        </>
    )
}
export default ThankYou;