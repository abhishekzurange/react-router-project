import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="container ft">
                <div className="row">
                    <div className=" col-md-2 col-lg-2">
                        <h4>Categories</h4>
                        <p className="m-0">Running Shoes</p>
                           <p className="m-0"> Yoga Shoes</p>
                            <p className="m-0">Sports Shoes</p>
                            <p className="m-0">Casual Shoes</p>
                    </div>
                    <div className=" col-md-2 col-lg-2">
                        <h4>Business</h4>
                        <p className="m-0">Company Profile</p>
                           <p className="m-0"> Social Responsibility</p>
                            <p className="m-0">Brand Kit</p>
                            <p className="m-0">Media</p>
                    </div>
                    <div className=" col-md-2 col-lg-2">
                        <h4>About</h4>
                        <p className="m-0">Board of Directors</p>
                           <p className="m-0"> Company Profile</p>
                            <p className="m-0">Careers </p>
                            <p className="m-0">Numbers Speak</p>
                    </div>
                    <div className=" col-md-3 col-lg-3">
                        <h4>Useful Links</h4>
                        <p className="m-0">Return Policies</p>
                           <p className="m-0"> Announcements</p>
                            <p className="m-0">Have issues? </p>
                            <p className="m-0">Media Kit</p>
                    </div>
                    <div className=" col-md-3 col-lg-3 ft-2">
                        <h4>Follow Us</h4>
                        <div className="fs-4 mt-4">
                            <a href="" className="me-4 text-dark"><i class="bi bi-instagram"></i></a>
                            <a href="" className="me-4 text-dark"><i class="bi bi-twitter"></i></a>
                            <a href="" className="me-4 text-dark"><i class="bi bi-linkedin"></i></a>
                            <a href="" className="me-4 text-dark"><i class="bi bi-facebook"></i></a>
                            <a href="" className="me-4 text-dark"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="d-md-flex d-lg-flex justify-content-between">
                <p className="copy ">Copyright © 2024 Shoe Store | <span className="text-primary">Credits</span> </p>'
                <span className="copy ">Powered by Shoe Store</span>

                </div>
            </div>
        </>
    )
}

export default Footer;