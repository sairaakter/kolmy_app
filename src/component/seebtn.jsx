// eslint-disable-next-line react/prop-types
export default function Seebtn({ text, className = "" }) {
  const classes = className.split(" ");
  return (
    <div className={`see ${classes[0] || ""}`}>
      <button className={`infu_btn infu_see ${classes[1] || ""}`} type="button">
        {text}
      </button>
    </div>
  );
}
