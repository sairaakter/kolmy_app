// eslint-disable-next-line react/prop-types
export default function Socialbtn({ src, ctext }) {
  return (
    <button className="infu_btn infu_cus" type="button">
      <img className="insfu_ins" src={src} />
      {ctext}
    </button>
  );
}
