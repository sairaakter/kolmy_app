import rotatwo from "../assets/rotatwo.png";
import Comtitle from "./commonTitle";
import Faqitem from "./faqitm";
export default function Question() {
  return (
    <div className="question">
      <div className="container">
        <Comtitle
          firttl="You have questions.<br />We have answers."
          className="ques"
        />
        <div id="faqAccordion">
          <Faqitem
            defaultChecked={true}
            src={rotatwo}
            id="faq1-toggle"
            labelText="1. Can I find the right influencers (KOLs) for brands faster?"
            inputType="It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',"
          />
          <Faqitem
            src={rotatwo}
            id="faq2-toggle"
            labelText="1. Can I find the right influencers (KOLs) for brands faster?"
            inputType="It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',"
          />
          <Faqitem
            src={rotatwo}
            id="faq3-toggle"
            labelText="1. Can I find the right influencers (KOLs) for brands faster?"
            inputType="It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',"
          />
          <Faqitem
            src={rotatwo}
            id="faq4-toggle"
            labelText="1. Can I find the right influencers (KOLs) for brands faster?"
            inputType="It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',"
          />
        </div>
      </div>
    </div>
  );
}
