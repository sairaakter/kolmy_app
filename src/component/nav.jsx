import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import logo from "../assets/kologo.png";
import togle from "../assets/togle.png";

export default function Nav() {
  return (
    <>
      <header className="">
        <div className="container cntr">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-0">
              {/* logo */}
              <Link className="navbar-brand" to="/">
                <img className="logo img-fluid" src={logo} />
              </Link>
              {/* <!-- Buttons next to the toggle for medium screens and smaller --> */}
              <div className="d-lg-none d-col-none ms-auto d-flex align-items-center">
                <button className="buton btn cas me-2" type="button">
                  Login
                </button>
                <button className="buton cus_b btn" type="button">
                  Register Now
                </button>
              </div>
              {/* <!-- toggle --> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#c_nav"
                aria-controls="c_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img
                  src={togle}
                  alt="Toggle navigation"
                  className="img-fluid custom-toggler-icon"
                />
              </button>
              {/* <!-- nav --> */}
              <div className="collapse navbar-collapse nav" id="c_nav">
                <ul className="ul navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="li nav-item dropdown">
                    <Link
                      className="nav-link  active"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/">
                          I am KOL
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          I am Brand
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="li nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Find KOL
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/">
                          I am KOL
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          I am Brand
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="li nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      How It Works
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item " to="/">
                          {" "}
                          I am KOL
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          I am Brand
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="li nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Us
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          I am KOL
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          I am Brand
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="li nav-item dropdown">
                    <Link
                      className="nav-link"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Contact
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/">
                          I am KOL
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          {" "}
                          I am Brand
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-flex d_nav" role="search">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 m-md-auto">
                    <li className="nav-item dropdown li">
                      <Link
                        className="active nav-link dropdown-toggle nncls"
                        to="/"
                        id="languageDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        ENG{" "}
                        <ExpandMoreIcon
                          style={{ fontSize: "16px", marginLeft: "4px" }}
                        />
                      </Link>

                      <ul className="dropdown-menu">
                        <li>
                          <Link className=" dropdown-item" to="/">
                            I am KOL
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/">
                            {" "}
                            I am Brand
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="/">
                            {" "}
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* <!-- Buttons for larger screens --> */}
                  <div
                    className="d-none d-col-flex d-lg-flex d_nav"
                    role="search"
                  >
                    <button className="buton btn cas" type="button">
                      Login
                    </button>
                    <button className="buton cus_b btn" type="button">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
