import Proleft from "./proleft";
import Proright from "./proright";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="row">
            <Proleft />
            <Proright />
          </div>
        </div>
      </div>
    </>
  );
}
