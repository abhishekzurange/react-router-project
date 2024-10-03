import React from "react";
import './Contact.css'

const Contact=()=>{
    return(
        <>
         <section className="mt-5 ab">
            <div className="d-flex flex-column  ab-1 ">
                <h1 className="know">get in touch</h1>
                <h3 className="us">Contact Us</h3>
            </div>
        </section>
        <section className="container">
            <h2 className="text-center qui">Quick Assist</h2>
            <div className="row  fw-bold mt-5">
                  <div className=" col-md-6 col-lg-7 qui1">
                    <p> <i class="bi bi-plus me-3"></i>Sed non mauris vitae erat consequat?</p>
                    <p><i class="bi bi-plus me-3"></i>Nam nec tellus a odio tincidunt auctor?</p>
                    <p><i class="bi bi-plus me-3"></i>Class aptent taciti sociosqu ad litora?</p>
                    <p><i class="bi bi-plus me-3"></i>Odio tincidunt auctor a ornare odio?</p>
                  </div>
                  <div className=" col-md-6 col-lg-4">
                  <p> <i class="bi bi-plus me-3"></i>Sed non mauris vitae erat consequat?</p>
                    <p><i class="bi bi-plus me-3"></i>Nam nec tellus a odio tincidunt auctor?</p>
                    <p><i class="bi bi-plus me-3"></i>Class aptent taciti sociosqu ad litora?</p>
                    <p><i class="bi bi-plus me-3"></i>Odio tincidunt auctor a ornare odio?</p>
                  </div>
            </div>
        </section>
        <section className="container cart ">
            <div className="row">
               <div className="col-md-4 col-lg-4 text-center">
                <p className="m-0 fw-bold text-primary fs-1"><i class="bi bi-credit-card"></i></p>
                <p  className="m-0 fw-bold fs-3">1800 755 60 20</p>
                <p  className="m-0">Payment Queries</p>
               </div>
               <div className="col-md-4 col-lg-4 text-center">
               
                <p className="m-0 fw-bold text-primary fs-1"><i class="bi bi-truck"></i></p>
                <p  className="m-0 fw-bold fs-3">1800 755 60 20</p>
                <p  className="m-0">Payment Queries</p>
               
               </div>
               <div className="col-md-4 col-lg-4 text-center">
              
                <p className="m-0 fw-bold text-primary fs-1"><i class="bi bi-life-preserver"></i></p>
                <p  className="m-0 fw-bold fs-3">1800 755 60 20</p>
                <p  className="m-0">Payment Queries</p>
               
               </div>
            </div>
        </section>
        <section className="container con text-center ">
              <h2 className="fw-bold fs-1">Contact Details</h2>
              <div className="row text-center mt-5 ">
              <div className="col-md-4 col-lg-4 con1">
              <p className="m-0 fw-bold  fs-2">Our Hours</p>
                <p  className="m-0 fw-bold fs-5">10:00 AM – 22.00 PM</p>
                <p  className="m-0  fw-bold fs-5 ">Phone: 1800 755 60 20</p>
              </div>
              <div className="col-md-4 col-lg-4 con1">
              <p className="m-0 fw-bold  fs-2">Location</p>
                <p  className="m-0 fw-bold fs-5 con1">212 7th St SE, Washington, DC 20003, USA</p> 
              </div>
              <div className="col-md-4 col-lg-4 con1">
              <p className="m-0 fw-bold  fs-2">Contact Us</p>
                <p  className="m-0 fw-bold fs-5">Phone: 1800 755 60 20</p>
                <p  className="m-0 fw-bold fs-5 con1">Email: contact@company.com</p>
              </div>
              </div>
        </section>
        </>
    )
}

export default Contact