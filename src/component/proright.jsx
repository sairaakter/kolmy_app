import p_right from "../assets/p_right.png";

export default function Proright() {
  return (
    <>
      <div className="col-lg-6">
        <div className="pro_rght col-12">
          <div className="pro_img">
            <img className="img-fluid" src={p_right} />
            {/* <!-- content --> */}
            <div className="pro_con cus_pro">
              <h1>
                Find Influencers <br />
                and post Jobs
              </h1>
              <button className="botom p_tu" type="button">
                Register as a KOL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
