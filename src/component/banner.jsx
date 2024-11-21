import Left from "./left";
import Right from "./right";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row formd">
          <Left />
          <div className="col-lg-1 col-md-0"></div>
          <Right />
        </div>
      </div>
    </div>
  );
}
