import aply from "../assets/aply.png";
import discount from "../assets/discount.png";
import dream from "../assets/dream.png";
import hot from "../assets/hot.png";
import location from "../assets/location.png";
import search from "../assets/search.png";
import Reusehp from "./reus_help";
export default function Cushelp() {
  return (
    <div className="help_margn">
      <div className="container">
        <div className="row">
          <Reusehp
            src={search}
            htex="Search KOLs"
            ptex="Fish a needle from the sea? Need to find KOLs for
                    advertising? Want to find KOLs to publish post, video,
                    live,interview？"
          />
          <Reusehp
            src={aply}
            htex="Apply Advertising JOBs"
            ptex="Want to be a KOL / A professional KOL who would like to get
                    advertising JOBs? Say goodbye to passive."
          />
          <Reusehp
            src={location}
            htex="The First in Hong Kong"
            ptex="Analyse KOLs' performance, convert to data, provide fruitful
                    KOLs' market information and matching to vendor!"
          />
          <Reusehp
            src={dream}
            htex="Match Dream KOL"
            ptex="There is no best KOL, only better KOL for your company!
                    Centralised platform converges all energetic KOLs."
          />
          <Reusehp
            src={hot}
            htex="Hot KOLs"
            ptex=" Sort by search rate and like counter, Daily update KOLs
                    list. To be KOL's most effective advertising platform!"
          />
          <Reusehp
            src={discount}
            htex="Free pricing"
            ptex="KOL can set your own price base on FB, IG, YouTube number of
                    fans and advertising performance! To build a KOL open
                    market！"
          />
        </div>
      </div>
    </div>
  );
}
