import ip_blckverien from "../assets/ip_blckverien.png";
import ipsuntwo from "../assets/ipsuntwo.png";
import power from "../assets/power.png";
import winne from "../assets/winne.png";
import Cmnlogos from "./cmnlogos";
export default function Logos() {
  return (
    <div className="logooo">
      <div className="container">
        <div className="justify-content-center">
          <div className="log_con">
            <p>Brands trust us to grow their sales</p>
          </div>
          <div className="row justify-content-center">
            <div className="blck_ipsum">
              <Cmnlogos src={ip_blckverien} />
              <Cmnlogos src={power} />
              <Cmnlogos src={winne} />
              <Cmnlogos src={ipsuntwo} className="last" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
