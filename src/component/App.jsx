// import { faEnvelope, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/app.css";
import "../style/media.css";
import Layout from "./layout";
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
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
