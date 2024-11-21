// eslint-disable-next-line react/prop-types
export default function Reusehp({ src, htex, ptex }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="hep_content">
        <img className="img-fluid" src={src} />
        <h2>{htex}</h2>
        <p>{ptex}</p>
      </div>
    </div>
  );
}
