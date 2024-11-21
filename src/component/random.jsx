import CountUp from "react-countup";

export default function Random({ text, src, start, end, point }) {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <div className="rndom">
          <p>
            <span className="icn">
              <img src={src} />
            </span>
            {text}
          </p>
          <h2>
            <CountUp start={start} end={end} duration={5} />
            <span>{point}</span>
          </h2>
        </div>
      </div>
    </>
  );
}
