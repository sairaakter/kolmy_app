import Seebtn from "./seebtn";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row full-height">
          <div className="col-lg-12 bg-image justify-content-center">
            <div className="foot_con">
              <h1>You Have Questions?</h1>
              <p>
                For scouting agents, this platform represnts the shortest path
                you could have in order to find the
              </p>
              <Seebtn className="foot_se foot_btn" text="Whatsapp Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
