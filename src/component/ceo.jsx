import Cleft from "./ceo_lft";
import Cright from "./ceoright";
import Comtitle from "./commonTitle";

export default function Ceo() {
  return (
    <div className="ceo">
      <div className="container">
        <Comtitle
          firttl="Are We Helping? <br />See What Brands Say"
          className="ques for_ceo"
        />
        <div className="row">
          <Cleft />
          <Cright />
        </div>
      </div>
    </div>
  );
}
