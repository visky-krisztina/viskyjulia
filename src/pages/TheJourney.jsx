import "../css/TheJourney.css";
import YoutubeEmbed from "../components/YoutubeEmbed";
import TwoTitleEmbedded from "../components/TwoTitleEmbedded";
import data from "../data";
import SecondContainer from "../components/SecondContainer";

const TheJourney = () => {
  const theJourneyItems = data.filter(
    (item) => item.urlPathName === "TheJourney"
  );
  return (
    <div id="aboutTheJourney" className="container">
      <TwoTitleEmbedded
        firstTitleClass="text-light"
        secondTitleClass="text-p"
        spanLineClass="heading-separator-line"
        firstTitle="Az Utazásról"
        secondTitle="Mi is a belső utazás?"
      />

      <SecondContainer
        style="img-left"
        p1={theJourneyItems[0].p1}
        p2={theJourneyItems[0].p2}
        p3={theJourneyItems[0].p3}
        imageAlt={theJourneyItems[0].imageAlt}
        img={theJourneyItems[0].img}
      />

      <div className="third-container">
        <TwoTitleEmbedded
          secondTitleClass="title italic"
          spanLineClass="heading-separator-line-left"
          firstTitle=""
          secondTitle="Mi történik egy belső utazás során?"
        />
        <div className="youtube-wrapper">
          <YoutubeEmbed />
        </div>
        <TwoTitleEmbedded
          secondTitleClass="title italic"
          spanLineClass="heading-separator-line-left"
          secondTitle=" Minden változás Veled kezdődik"
        />

        <SecondContainer
          style="quote"
          p1={theJourneyItems[1].p1}
          p2={theJourneyItems[1].p2}
        />
      </div>
    </div>
  );
};

export default TheJourney;
