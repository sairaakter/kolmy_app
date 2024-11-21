import p_img from "../assets/p_img.png";
export default function Proleft() {
  return (
    <>
      <div className="col-lg-6 col-12">
        <div className="pro_lft">
          <div className="pro_img">
            <img className="img-fluid" src={p_img} />
            {/* <!-- content --> */}
            <div className="pro_con">
              <h1>
                Find works and <br />
                create your
                <br />
                own profile
              </h1>
              <button className="botom p_tu botam" type="button">
                Register as a KOL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
