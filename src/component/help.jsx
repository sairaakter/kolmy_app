import Comtitle from "./commonTitle";
import Cushelp from "./cushelp";

export default function Help() {
  return (
    <div className="help">
      <div className="container-fluid">
        <Comtitle
          firttl="Helping a Wide<br />
                Varity of Brands"
          secondttl="innedKOL is a HK based matching platform. To increase more job
                and<br />
                exposure opportunity for teenagers."
          className="position-relative text-content p-0 curved-lines msc help_p"
        />
        <Cushelp />
      </div>
    </div>
  );
}
