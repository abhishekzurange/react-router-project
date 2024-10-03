import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


const Home = () => {
  return (
    <>
      <div>


        <h1 className="air text-primary">AirPro X3</h1>
        <div className="d-flex justify-content-center text-center align-items-center ">
          <div className="img-1">
            <img src="images/illustration/sports-shoe4.png" alt="" className="img w-100" />
          </div>
        </div>
        <div className="d-flex justify-content-center bt-1">
          <button className="btn btn-outline-danger  text-uppercase "> <i class="bi bi-arrow-right-circle-fill me-3 "></i>shop collection</button>
        </div>
      </div>
      <div className="container">
        <div className="text-center mt-5">
          <h1 className="un2 fst-italic ">unbelievable</h1>
          <h2 className="un3">Speed. Comfort.</h2>
        </div>
        <section>
          <div class="container mb-5 mt-5 ">
            <div class="row">
              <div class="col-12">

              </div>
            </div>

            <div class="carousel slide" id="carousel-2" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row ms-lg-5 me-lg-5">
                    <div class="col-12 col-md-4 col-lg-3">
                      <div class="border pb-3">
                        <div class="s6-img">
                          <img
                            src="images/illustration/sports-shoe4.png"
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="text-center">
                          <p className="mt-2 fw-bold">Running Shoes</p>
                          <p className="text-success fw-bold">
                            Air Pro X3 Bleu
                          </p>
                          <p className="text-success fw-bold">
                            $98.00 <del className="text-secondary ">$120.00</del>
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <Link to={"/checkout"}>
                              <i class="bi bi-heart fs-2 text-black"></i>
                            </Link>
                            <Link to={"/checkout"}>
                              <i class="bi fs-2 bi-cart3  div-2"></i>
                            </Link>

                            <i class="bi fs-2 bi-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3 d-none d-lg-block">
                      <div class="border pb-3">
                        <div class="s6-img">
                          <img
                            src="images/illustration/sports-shoe2.jpg"
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="text-center">
                          <p className="mt-2 fw-bold">Running Shoes</p>
                          <p className="text-success fw-bold">
                            Air Pro X3 red
                          </p>
                          <p className="text-success fw-bold">
                            $98.00 <del className="text-secondary ">$120.00</del>
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <Link to={"/checkout"}>
                              <i class="bi bi-heart fs-2 text-black"></i>
                            </Link>
                            <Link to={"/checkout"}>
                              <i class="bi fs-2 bi-cart3  div-2"></i>
                            </Link>

                            <i class="bi fs-2 bi-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=" col-12 col-md-4 col-lg-3 d-none d-md-block">
                      <div class="border pb-3">
                        <div class="s6-img">
                          <img
                            src="images/illustration/sports-shoe3.jpg"
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="text-center">
                          <p className="mt-2 fw-bold">Running Shoes</p>
                          <p className="text-success fw-bold">
                            Air Pro X3 orange
                          </p>
                          <p className="text-success fw-bold">
                            $98.00 <del className="text-secondary ">$120.00</del>
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <Link to={"/checkout"}>
                              <i class="bi bi-heart fs-2 text-black"></i>
                            </Link>
                            <Link to={"/checkout"}>
                              <i class="bi fs-2 bi-cart3  div-2"></i>
                            </Link>

                            <i class="bi fs-2 bi-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=" col-12 col-md-4 col-lg-3 d-none d-md-block">
                      <div class="border pb-3">
                        <div class="s6-img">
                          <img
                            src="images/illustration/sports-shoe2.jpg"
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="text-center">
                          <p className="mt-2 fw-bold">Running Shoes</p>
                          <p className="text-success fw-bold">
                            Air Pro X3 red
                          </p>
                          <p className="text-success fw-bold">
                            $98.00 <del className="text-secondary ">$120.00</del>
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <Link to={"/checkout"}>
                              <i class="bi bi-heart fs-2 text-black"></i>
                            </Link>
                            <Link to={"/checkout"}>
                              <i class="bi fs-2 bi-cart3  div-2"></i>
                            </Link>

                            <i class="bi fs-2 bi-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item active">
                  <div class="row ms-lg-5 me-lg-5">
                    <div class=" col-12 col-md-4 col-lg-3 d-none d-md-block">
                      <div class="border pb-3">
                        <div class="s6-img">
                          <img
                            src="images/illustration/sports-shoe3.jpg"
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="text-center">
                          <p className="mt-2 fw-bold">Running Shoes</p>
                          <p className="text-success fw-bold">
                            Air Pro X3 orange
                          </p>
                          <p className="text-success fw-bold">
                            $98.00 <del className="text-secondary ">$120.00</del>
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <Link to={"/checkout"}>
                              <i class="bi bi-heart fs-2 text-black"></i>
                            </Link>
                            <Link to={"/checkout"}>
                              <i class="bi fs-2 bi-cart3  div-2"></i>
                            </Link>

                            <i class="bi fs-2 bi-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=" col-12 col-md-4 col-lg-3 ">
                      <div class="border pb-3">
                        <div class="s6-img">
                          <img
                            src="images/illustration/sports-shoe6.jpg"
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="text-center">
                          <p className="mt-2 fw-bold">Running Shoes</p>
                          <p className="text-success fw-bold">
                            Air Pro X3 Green
                          </p>
                          <p className="text-success fw-bold">
                            $98.00 <del className="text-secondary ">$120.00</del>
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <Link to={"/checkout"}>
                              <i class="bi bi-heart fs-2 text-black"></i>
                            </Link>
                            <Link to={"/checkout"}>
                              <i class="bi fs-2 bi-cart3  div-2"></i>
                            </Link>

                            <i class="bi fs-2 bi-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=" col-12 col-md-4 col-lg-3 d-none d-md-block">
                      <div class="border pb-3">
                        <div class="">
                          <img
                            src="images/illustration/sports-shoe5.jpg"
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="text-center">
                          <p className="mt-2 fw-bold">Running Shoes</p>
                          <p className="text-success fw-bold">
                            Air Pro X3 blue
                          </p>
                          <p className="text-success fw-bold">
                            $98.00 <del className="text-secondary ">$120.00</del>
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <Link to={"/checkout"}>
                              <i class="bi bi-heart fs-2 text-black"></i>
                            </Link>
                            <Link to={"/checkout"}>
                              <i class="bi fs-2 bi-cart3  div-2"></i>
                            </Link>

                            <i class="bi fs-2 bi-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=" col-12 col-md-4 col-lg-3 d-none d-lg-block">
                      <div class="border pb-3">
                        <div class="s6-img">
                          <img
                            src="images/illustration/sports-shoe3.jpg"
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="text-center">
                          <p className="mt-2 fw-bold">Running Shoes</p>
                          <p className="text-success fw-bold">
                            Air Pro X3 orange
                          </p>
                          <p className="text-success fw-bold">
                            $98.00 <del className="text-secondary ">$120.00</del>
                          </p>
                          <div className="d-flex justify-content-evenly">
                            <Link to={"/checkout"}>
                              <i class="bi bi-heart fs-2 text-black"></i>
                            </Link>
                            <Link to={"/checkout"}>
                              <i class="bi fs-2 bi-cart3  div-2"></i>
                            </Link>

                            <i class="bi fs-2 bi-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="carousel-control-prev"
                data-bs-target="#carousel-2"
                data-bs-slide="prev"
              >
                <span class="fs-3 text-warning">
                  <i class="bi bi-arrow-left-circle-fill"></i>{" "}
                </span>
              </button>
              <button
                type="button"
                class="carousel-control-next"
                data-bs-target="#carousel-2"
                data-bs-slide="next"
              >
                <span class="fs-3 text-warning">
                  <i class="bi bi-arrow-right-circle-fill"></i>
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="container li">
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-6 ">
            <div id=" example" className="carousel carousel-slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item ">
                  <img src="images/illustration/sports-shoe2.jpg" alt="" className="w-100" />
                </div>
                <div className="carousel-item active">
                  <img src="images/illustration/sports-shoe3.jpg" alt="" className="w-100" />
                </div>
                <div className="carousel-item ">
                  <img src="images/illustration/sports-shoe5.jpg" alt="" className="w-100" />
                </div>
                <div className="carousel-item">
                  <img src="images/illustration/sports-shoe6.jpg" alt="" className="w-100" />
                </div>
              </div>
              <button className="carousel-control-prev btn " data-bs-target="#example" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button type="button" className="carousel-control-next " data-bs-target="#example" data-bs-slide="prev">
                <span className="carousel-control-next-icon text-primary"></span>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 li4">
            <div className="d-lg-flex flex-column align-items-center li1">
              <h4 className="fw-bold li5">Limited Stock Available!</h4>
              <h3 className="fw-bold li6">AirPro X2</h3>
              <p className="text-center mt-3">Consectetur adipiscing elit elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <button className="li3 btn btn-outline-primary">
              <Link to="/shop" className="li-9"><i class="bi bi-arrow-right-short"></i>Shop Now
              </Link></button>
          </div>
        </div>
      </div>
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
      <div className="bg ">
        <div className="bg1">
          <div className=" text-center text-white bg-2">

            <p className="fw-bold p1">Limited Stock Available!</p>

            <h2 className="fw-bold p-1">AirPro X3. Turbocharged.</h2>

            <p className=" p mt-3">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>

            <button className="bt-3 btn btn-outline-danger text-black bg-white pt-2 pb-2 ps-5 pe-5"><i class="bi bi-arrow-right-short"></i>Shop Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;