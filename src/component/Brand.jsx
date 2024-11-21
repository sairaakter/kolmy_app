import B_left from "./b_left";
import B_right from "./b_right";
export default function Brand() {
  return (
    <div className="brand">
      <div className="container">
        <div className="row band_pad">
          <B_left />
          <B_right />
        </div>
      </div>
    </div>
  );
}
