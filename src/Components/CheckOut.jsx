import React from "react";
import { Link } from "react-router-dom";
import './CheckOut.css'


const CheckOut=()=>{
    return(
        <>
        <section className="container che">
            <div className="row">
              <div className=" col-md-6 col-lg-6">
                <div>
                    <img src="images/illustration/sports-shoe2.jpg" alt="" className="w-100" />
                </div>
              </div>
              <div className=" col-md-6 col-lg-6 ">
                <p className="sh text-primary fw-bold">Running Shoes</p>
                <h3 className="fw-bold">Air Pro X3 Red</h3>
                <p> <span className="fw-bold fs-3 text-danger">$62.00</span> + Free Shipping</p>
                <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
                <div>
                    <a href="" className="a-1">10</a>
                    <a href="" className="a-1">7</a>
                    <a href="" className="a-1">8</a>
                    <a href="" className="a-1">9</a>
                </div>
                <div className="mt-4">
                <a href="" className="a-1 ">black</a>
                <a href="" className="a-1 ">white</a>
                </div>
                <div className="mt-5">
                <a href="" className="a-2 ">+</a>
                    <a href="" className="a-2 a-3">7</a>
                    <a href="" className="a-2">-</a>
                </div>
                    <Link to="/bill" className="bu1">
                    <button className="btn btn-outline-primary mt-5 bu2">Buy Now</button></Link>
              </div>
            </div>
        </section>
        <section className="container-fluid">
            <h2 className="fw-bold mt-5 ms-5 fs-1">Related Items</h2>
        <div className="row mt-5">
                <div className=" col-12 col-md-6 col-lg-3">
                    <div>
                    <img src="images/illustration/sports-shoe2.jpg" alt="" className="w-100" />
                    </div>
                    <div className="ru">
                    <p className="ru1">Running Shoes</p>
                    <h3 className="fw-bold">Air Pro X3 Red</h3>
                    <span className="text-center ru1 ru3 ru4">$60.00</span>
                    <span className="text-center ms-3 ru3">$58.00</span>
                    </div>
                    <button type="button" className="bu ru6">
                    <Link to="/shop" className="ru6"><i class="bi bi-cart4"></i></Link>
                    </button>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div>
                    <img src="images/illustration/sports-shoe3.jpg" alt="" className="w-100"/>
                    </div>
                    <div className="ru ">
                    <p className="ru1">Running Shoes</p>
                    <h3 className="fw-bold">Air Pro X3 Grey</h3>
                    <span className="ru2 ru3">$58.00</span>
                    </div>
                    <button type="button" className="bu ru5 ru6">
                    <Link to="/shop" className="ru6"><i class="bi bi-cart4"></i></Link>
                    </button>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div>
                    <img src="images/illustration/sports-shoe5.jpg" alt="" className="w-100"/>
                    </div>
                    <div className="ru ">
                    <p className="ru1">Running Shoes</p>
                    <h3 className="fw-bold">Air Pro X3 Bleu</h3>
                    <span className="ru1 ru3 ru4">$60.00</span>
                    <span className="ms-3 ru3">$58.00</span>
                    </div>
                    <button type="button" className="bu ru6">
                    <Link to="/shop" className="ru6"><i class="bi bi-cart4"></i></Link>
                    </button>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div>
                    <img src="images/illustration/sports-shoe6.jpg" alt="" className="w-100"/>
                    </div>
                    <div className="ru ">
                    <p className="ru1">Running Shoes</p>
                    <h3 className="fw-bold">Air Pro X3 Green</h3>
                    <span className="ru2">$60.00</span>
                    </div>
                    <button type="button" className="bu ru5 ru6">
                    <Link to="/shop" className="ru6"><i class="bi bi-cart4"></i></Link>
                    </button>
                </div>
               </div>
        </section>
        </>
    )
}

export default CheckOut