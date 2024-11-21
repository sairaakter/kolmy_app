export default function Faqitem({
  // eslint-disable-next-line react/prop-types
  src,
  // eslint-disable-next-line react/prop-types
  id,
  // eslint-disable-next-line react/prop-types
  labelText,
  // eslint-disable-next-line react/prop-types
  inputType,
  // eslint-disable-next-line react/prop-types
  defaultChecked,
}) {
  return (
    <div className="faq-item">
      <input type="checkbox" id={id} defaultChecked={defaultChecked} />
      <label className="faq-question" htmlFor={id}>
        <span className="main_ques">{labelText}</span>
        <span className="toggle-icon ro_bagn">
          <img className="img-fluid to_img" src={src} />
        </span>
      </label>
      <div className="faq-answer">
        <p>{inputType}</p>
      </div>
      <div className="faq-divider"></div>
    </div>
  );
}
