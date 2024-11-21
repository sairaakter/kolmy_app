import alex from "../assets/alex.png";
import alexfor from "../assets/alexfor.png";
import alexthre from "../assets/alexthre.png";
import alexto from "../assets/alexto.png";
import Comtitle from "./commonTitle";
import Fulcard from "./fulcard";
export default function Platform() {
  return (
    <>
      <div className="platform">
        <div className="container">
          <Comtitle
            firttl="The Hottest KOLs Picked by Us"
            secondttl="The world's modeling platform, where diverse talent of all
              levels can <br />
              safely connect and collaborate with professionals."
          />
          <div className="row">
            <Fulcard src={alex} />
            <Fulcard src={alexto} />
            <Fulcard src={alexthre} />
            <Fulcard src={alexfor} />
          </div>
        </div>
      </div>
    </>
  );
}
