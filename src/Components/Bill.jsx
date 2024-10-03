import React, { useState } from "react";
// import { Link } from "react-router-dom";
import './Bill.css'
import ThankYou from "./ThankYou";

const Bill=()=>{
   
   const [fname , setfname]=useState(" ");
   const [lname ,setlname]=useState(" ");
   const [adress , setadd]=useState(" ");
   const [city, setcity]=useState(" ");
   const [code ,setcode]=useState(" ");
   const [phone , setphone]=useState(" ");

   const [submited , setsubmitted]=useState(false);
   const [validData ,setvalidData]=useState(null);

   function myname(e){
     setfname(e.target.value);
   }

   function mylastname(e){
      setlname(e.target.value);
    }

    function myadress(e){
      setadd(e.target.value);
    }

    function mycity(e){
      setcity(e.target.value);
    }

    function mycode(e){
      setcode(e.target.value);
    }

    function myphone(e){
      setphone(e.target.value);
    }

    function getdata(){

      if(fname && lname && adress && city && phone && code){
         const data ={fname , lname , adress , city , phone , code};
         setvalidData(data);
         setsubmitted(true);
      }else{
         alert("please fill in all the fields");
      }
    }

    if (submited){
      return <ThankYou data={validData}/>
    }
    return(
        <>
       <section className="container">
        <div className="container">
          {/* <form action=""> */}
        <h2 className="bil">Billing</h2>
        <div className="row ship-1 mt-3">
         <div className="col-6 d-flex ">
            <h2 className="ship2">1</h2>
            <div className="ship2">
                <p className="m-0 ps-2 text-primary fw-bold">shipping</p>
                <p className="m-0 ps-2">Where to ship it</p>
            </div>
         </div>
         <div className="col-6 d-flex ">
            <h2 className="ship2">2</h2>
            <div className="ship2">
                <p className="m-0 ps-2 text-danger fw-bold">Payement</p>
                <p className="m-0 ps-2">Off Your Order</p>
            </div>
         </div>
         <div className="col-12 ">
            <h2 className="fw-bold ship ">Customer information</h2>
         </div>
         <div className="col-12 ">
            <input type="text" placeholder="User Name or Email Adress" className=" ship" />
         </div>
         <div className="col-12 ">
            <h2 className="fw-bold ship">Billing details</h2>
         </div>
         <div className="col-6 ship">
            <input type="text" placeholder="First Name * " className=" ship" onChange={myname} />
         </div>
         <div className="col-6 ship">
            <input type="text" placeholder="Last Name *" className=" ship" onChange={mylastname} />
         </div>
         <div className="col-12 ship">
            <input type="text" placeholder="Company Name" className=" ship" />
         </div>
         <div className="col-12  ship">
            <select name="" id="" className="w-50 ship">
                <option value="" selected>Choose Country or Region</option>
                <option value="">India</option>
                <option value="">Us</option>
                <option value="">Englad</option>
                <option value="">America</option>
            </select>
         </div>
         <div className="col-6 ship">
            <input type="text" placeholder="House Number And Street Name" className=" ship" onChange={myadress}/>
         </div>
         <div className="col-6 ship">
            <input type="text" placeholder="Apartment,Suit,Name etc" className=" ship" />
         </div>
         <div className="col-4 ship">
            <input type="text" placeholder="Town/City" className=" ship" onChange={mycity} />
         </div>
         <div className="col-4 ship ">
            <select name="" id="" className=" ship">
                <option value="" selected>State</option>
                <option value="">Maharastra</option>
                <option value="">Gujrat</option>
                <option value="">Rajstan</option>
                <option value="">Karnatak</option>
            </select>
         </div>
         <div className="col-4 ship">
            <input type="text" placeholder="Pin Code *" className=" ship" onChange={mycode} />
         </div>
         <div className="col-12 ship">
            <input type="text" placeholder="Phone" className=" ship" onChange={myphone} />
         </div>
         <div className="col-12 ship">
            <h2 className="fw-bold ship">Additional information</h2>
         </div>
         <div className="col-12 ship">
            <textarea name="" id="" placeholder="Notes About Your Order" className=" ship"></textarea>
         </div>
         <div className="col-12 ship">
           <p>Have A Coupn ?</p>
         </div>
         <div className="col-12 ship">
            
               {/* <Link to="/thankyou" className="or"> */}
               <button className=" btn btn-outline-danger pt-2 pe-5 pb-2 ps-5 ship3" type="button" onClick={getdata}>Place Order</button>
               {/* </Link> */}
         </div>
        </div>
        {/* </form> */}
        </div>
       </section>
        </>
    )
}

export default Bill