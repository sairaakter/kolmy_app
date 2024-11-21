import Random from "./random";
// import CountUp from "react-countup";
import follow from "../assets/follow.png";
import influ from "../assets/influ.png";
import post from "../assets/post.png";

export default function Left() {
  return (
    <>
      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="left">
          <h1>
            Quickest Way to
            <br />
            Promote Brands
          </h1>
          <p className="wdt">
            The world&apos;s modeling platform, where diverse talent of all
            levels can safely connect and collaborate with professionals.
          </p>
          <div className="cmn">
            <button className="boton c_cus" type="button">
              Register as a KOL
            </button>
            <button className="boton c_cos" type="button">
              Find a KOL
            </button>
          </div>
          <div className="row">
            <Random
              text="Influencers"
              start={0}
              end={250}
              point="+"
              src={influ}
            ></Random>
            <Random
              text="Followers"
              start={0}
              end={102}
              point="M+"
              src={follow}
            ></Random>
            <Random
              text=" Post View"
              start={0}
              end={250}
              point="M+"
              src={post}
            ></Random>
          </div>
        </div>
      </div>
    </>
  );
}
