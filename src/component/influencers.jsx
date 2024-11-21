import alex from "../assets/alex.png";
import alexfor from "../assets/alexfor.png";
import alexthre from "../assets/alexthre.png";
import alexto from "../assets/alexto.png";
import infu_insta from "../assets/infu_insta.png";
import insfu_fac from "../assets/insfu_fac.png";
import insfu_tub from "../assets/insfu_tub.png";
import Fulcard from "./fulcard";
import Seebtn from "./seebtn";
import Socialbtn from "./socialbtn";

import Comtitle from "./commonTitle";
export default function Influencers() {
  return (
    <>
      <div className="influencers">
        <div className="container">
          <Comtitle
            firttl="Discover Our Top Influencers"
            secondttl="The world's modeling platform, where diverse talent of all
              levels can <br />
              safely connect and collaborate with professionals."
          />
          <div className="influ_b">
            <Socialbtn src={infu_insta} ctext="Instagram" />
            <Socialbtn src={insfu_fac} ctext="Facebook" />
            <Socialbtn src={insfu_tub} ctext="Youtube" />
          </div>
          <div className="row m_infu">
            <Fulcard src={alex} />
            <Fulcard src={alexto} />
            <Fulcard src={alexthre} />
            <Fulcard src={alexfor} />
          </div>
          <div className="row">
            <Fulcard src={alex} />
            <Fulcard src={alexto} />
            <Fulcard src={alexthre} />
            <Fulcard src={alexfor} />
          </div>
          <Seebtn text="See more KOL" />
        </div>
      </div>
    </>
  );
}
