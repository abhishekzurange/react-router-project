
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <>
            <div className="nav">
                <div>
                    <h2 className="text-uppercase border border-2 border-dark bs fw-bold fs-1">basik<i class="bi bi-caret-left-fill text-primary"></i>fit</h2>
                </div>
                <div className="d-none d-lg-flex ul-1">
                    <ul className="ul">

                        <li >
                            <Link to="/" className="ul1">Home</Link>
                        </li>


                        <li>
                            <Link to="/shop" className="ul1">Shop</Link>
                        </li>


                        <li>
                            <Link to="/about" className="ul1">About</Link>
                        </li>


                        <li>
                            <Link to="/contact" className="ul1">Contact</Link>
                        </li>

                    </ul>
                </div>

                <div class="d-lg-none">
            {/* <!-- offcanvas --> */}
            <button
              type="button"
              class="btn btn-outline-primary  "
              data-bs-toggle="offcanvas"
              data-bs-target="#menu"
            >
              <i class="bi bi-list fs-5"></i>
            </button>
            <div class="offcanvas offcanvas-end w-75" id="menu">
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div class="offcanvas-body ">
                <ul className="d-flex flex-column gap-3 ">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/shop"}>Shop</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            </div>

        </>
    )
}

export default Nav;
