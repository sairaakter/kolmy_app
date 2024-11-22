import { useState } from "react";
import { Link } from "react-router-dom";
import bookmark from "../assets/bookmark.png";
import Chart from "../assets/Chart.png";
import doller from "../assets/doller.png";
import facbok from "../assets/facbok.png";
import heart from "../assets/heart.png";
import insta from "../assets/insta.png";
import redh from "../assets/redh.png";
import shear from "../assets/shear.png";
import tea from "../assets/tea.png";
import user from "../assets/user.png";
import youtube from "../assets/youtube.png";

// eslint-disable-next-line react/prop-types
export default function Fulcard({ src }) {
  const [imageSrc, setImageSrc] = useState(heart);
  // Function to toggle the image
  const changeImage = () => {
    setImageSrc((prevSrc) => (prevSrc === heart ? redh : heart));
  };

  return (
    <>
      {/* <!-- full crd --> */}
      <div className="pad col-lg-3 col-md-6 col-sm-6 col-6">
        <div className="card p-3 custom-card">
          {/* <!-- Image Section --> */}
          <div className="position-relative image-container">
            <img src={src} className="card-img-top" alt="Profile Image" />
            {/* <!-- Hover Items --> */}
            <div className="hover-items">
              {/* <!-- Follower Badge --> */}
              <div className="follower-badge">
                <img
                  src={user}
                  alt="Icon"
                  className="me-1 img-fluid"
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                />
                2.12M Followers
              </div>
              {/* <!-- Top Star --> */}
              <div className="star-badge">1</div>
              {/* <!-- Heart Icon --> */}
              <div className="heart-icon">
                <img
                  src={imageSrc}
                  onClick={changeImage}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body">
            <h5 className="card-title mb-0">
              Zyria Alexandra <small className="crd_p text-muted">USA</small>
            </h5>
            {/* <!-- Social Media Icons --> */}
            <div className="social-media-icons">
              <Link to="https://instagram.com" className="social-icon">
                <img src={insta} alt="Facebook" />
              </Link>
              <Link to="https://facebook.com" className="social-icon">
                <img src={facbok} alt="Twitter" />
              </Link>
              <Link to="https://twitter.com" className="social-icon">
                <img src={tea} alt="Instagram" />
              </Link>
              <Link to="https://youtube.com" className="social-icon">
                <img src={youtube} alt="Instagram" />
              </Link>
            </div>

            {/* <!-- Categories --> */}
            <p className="card-text cus_crd text-muted mb-2">
              <img src={bookmark} style={{ width: "18px", height: "18px" }} />
              <span className="life">
                Beauty, Cooking, Lifestyle, Pet,
                <br />
                Restaurant, Sport
              </span>
            </p>
            {/* <!-- Pricing --> */}
            <p className="card-text price text-primary">
              <img
                src={doller}
                style={{ width: "20px", height: "20px" }}
                className="img-fluid"
              />
              <span className="heigs">$220 - $2000</span>
            </p>
            {/* <!-- Action Buttons --> */}
            <div className="hold d-flex justify-content-between mt-3">
              <button className="vew v_cu media1">View KOL</button>
              <button className="vewto v_tu media2">
                <img className="shr" src={shear} />
              </button>
              <button className="vewth v_tu media3">
                <img className="chrt" src={Chart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
