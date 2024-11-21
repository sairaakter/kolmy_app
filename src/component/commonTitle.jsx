// eslint-disable-next-line react/prop-types
export default function Comtitle({ firttl, secondttl, className = "" }) {
  const classes = className.split(" ");
  return (
    <>
      <div className={`row ${classes[0] || ""}`}>
        <div className={`col-lg-12 ${classes[1] || ""} ${classes[2] || ""}`}>
          <div
            className={`com_h1 cus_stl ${classes[3] || ""} ${
              classes.includes("ques") ? "ques" : ""
            } ${classes.includes("for_ceo") ? "for_ceo" : ""}`}
          >
            <h1
              className={classes[4] || ""}
              dangerouslySetInnerHTML={{
                __html: firttl,
              }}
            />
            <p
              className={classes[5] || ""}
              dangerouslySetInnerHTML={{
                __html: secondttl,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
