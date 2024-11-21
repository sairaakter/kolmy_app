import ipsumtwo from "../assets/ipsumtwo.png";
import logipsum from "../assets/logipsum.png";
import shish from "../assets/shish.png";

export default function B_left() {
  return (
    <div className="col-lg-6 col-md-7 col-sm-7 col-6 for-pos">
      <div className="pro_tct">
        <h1>We are helping brands to grow & Promot</h1>
        <div className="d-flex align-items-end bars-section">
          <div className="bar purple">
            <p>51%</p>
            <img src={logipsum} alt="Logo 1" className="logo" />
          </div>
          <div className="bar orange">
            <p>130%</p>
            <img src={shish} alt="Logo 2" className="logo" />
          </div>
          <div className="bar pink">
            <p>20%</p>
            <img src={ipsumtwo} alt="Logo 3" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
