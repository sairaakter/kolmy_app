import intro from "../assets/intro_i.png";

export default function Cright() {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="c_conten ms-0 for_xl">
        <h2>
          For scouting agents, this platform represnts the shortest path you
          could have in order to find the perfect influemcer for your brand.
        </h2>
        <div className="intro">
          <div className="intro_img">
            <img className="img-fluid" src={intro} />
          </div>
          <div className="intro_con">
            <h3>Liviu Loncus</h3>
            <p>CEO, 100% Vegan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
