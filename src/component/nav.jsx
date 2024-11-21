import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
              <a className="navbar-brand" href="./kol.html">
                <img className="logo img-fluid" src={logo} />
              </a>
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
                    <a
                      className="nav-link  active"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          I am KOL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          I am Brand
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="li nav-item dropdown">
                    <a
                      className="nav-link "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Find KOL
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          I am KOL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          I am Brand
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="li nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      How It Works
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item " href="#">
                          {" "}
                          I am KOL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          I am Brand
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="li nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About Us
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          I am KOL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          I am Brand
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="li nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Contact
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          I am KOL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {" "}
                          I am Brand
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-flex d_nav" role="search">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 m-md-auto">
                    <li className="nav-item dropdown li">
                      <a
                        className="active nav-link dropdown-toggle nncls"
                        href="#"
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
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className=" dropdown-item" href="#">
                            I am KOL
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            I am Brand
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            FAQ
                          </a>
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
