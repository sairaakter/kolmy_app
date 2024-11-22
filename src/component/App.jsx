// import { faEnvelope, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, HashRouter as Router, Routes } from "react-router-dom"; // Change here
import "../style/app.css";
import "../style/media.css";
import Layout from "./layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
// import {
//   Button,
//   Container,
//   Form,
//   Nav,
//   Navbar,
//   NavDropdown,
// } from "react-bootstrap";

function App() {
  return (
    <>
      {/* <Layout>
        <Home />
      </Layout> */}
      <Router>
        {" "}
        {/* Change BrowserRouter to HashRouter */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
