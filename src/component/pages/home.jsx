import Banner from "../banner";
import Brand from "../Brand";
import Ceo from "../ceo";
import Footer from "../footer";
import Help from "../help";
import Influencers from "../influencers";
import Logos from "../logos";
import MainFooter from "../mainfoter";
import Platform from "../platform";
import Profile from "../profile";
import Question from "../question";
export default function Home() {
  return (
    <>
      <Banner />
      <Platform />
      <Profile />
      <Influencers />
      <Brand />
      <Help />
      <Question />
      <Logos />
      <Ceo />
      <Footer />
      <MainFooter />
    </>
  );
}
