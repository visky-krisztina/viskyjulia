import TwoTitleEmbedded from "../components/TwoTitleEmbedded";
import data from "../data";
import SecondContainer from "../components/SecondContainer";
import name from "../data";
const About = () => {
  const aboutItems = data.filter((item) => item.urlPathName === "About");

  return (
    <div id="about" className="container">
      <TwoTitleEmbedded
        firstTitleClass="text-light"
        secondTitleClass="text-p"
        spanLineClass="heading-separator-line"
        firstTitle="Magamról"
        secondTitle="Ismerj Meg Jobban"
      />

      <SecondContainer
        name={name}
        style="img-right"
        p1={aboutItems[0].p1}
        p2={aboutItems[0].p2}
        p3={aboutItems[0].p3}
        imageAlt={aboutItems[0].imageAlt}
        img={aboutItems[0].img}
      />
    </div>
  );
};

export default About;
