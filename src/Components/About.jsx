import React from "react";
import './About.css'

const About=()=>{
    return(
        <>
        <section className="mt-5 ab">
            <div className="d-flex flex-column  ab-1 ">
                <h1 className="know1">know us more</h1>
                <h3 className="us1">About Us</h3>
            </div>
        </section>
        <section>
            <div className="bl ">
                <div className="d-flex flex-column justify-content-end bl1">
                <h2 className="fw-bold text-white he">Helping you keep fit</h2>
                <h3 className="fw-bold text-white">Since 1978</h3>
                </div>
            </div>
        </section>
        <section>
        <div className="container sale text-center">
    <div className="row">
        <div className=" col-md-6 col-lg-3 ">
            <h4 className="fw-bold">Research</h4>
            <p className="mt-4">Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
        </div>
        <div className=" col-md-6 col-lg-3 ">
            <h4 className="fw-bold">Idea & Concept</h4>
            <p className="mt-4">Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
        </div>
        <div className=" col-md-6 col-lg-3 ">
            <h4 className="fw-bold">Design & Production</h4>
            <p className="mt-4">Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
        </div>
        <div className=" col-md-6 col-lg-3 ">
            <h4 className="fw-bold">Sales & Support​</h4>
            <p className="mt-4">Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
        </div>
    </div>
</div>
        </section>

        <section className="container-fluid img-4">
            <div className="row">
               <div className=" col-md-4 col-lg-4 ">
                <img src="images/illustration/speed.jpg" alt="" className="w-100 " />
               </div>
               <div className=" col-md-4 col-lg-4 ">
                <img src="images/illustration/comfort.jpg" alt=""  className="w-100 "/>
               </div>
               <div className=" col-md-4 col-lg-4 ">
                <img src="images/illustration/quality.jpg" alt=""  className="w-100 "/>
               </div>
            </div>
        </section>
        </>
    )
}

export default About;