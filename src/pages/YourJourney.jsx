import TwoTitleEmbedded from "../components/TwoTitleEmbedded";
import Card from "../components/Card";
import emotions from "../assets/emotions.jpg";
import body from "../assets/body.jpg";
import measure from "../assets/measure.jpg";

const YourJourney = () => {
  return (
    <div id="yourJourney" className="container">
      <TwoTitleEmbedded
        firstTitleClass="text-light"
        secondTitleClass="text-p"
        spanLineClass="heading-separator-line"
        firstTitle="A TE Utazásod"
        secondTitle="Hogyan működik?"
      />
      <div className="cards-wrapper">
        <Card
          imgCard={emotions}
          cardTitle="Érzelmi utazás"
          cardText="Első alkalommal majdnem mindig érzelmi utazást 
teszünk. Ebben a típusú utazásban teljes mélységében átéljük Forrásunkat
 - a mélyen bennünk élő szeretet, szabadság, béke erejét -, mely maradandó
 viszonyítási ponttá válik a mindennapokban is."
        />
        <Card
          imgCard={body}
          cardTitle="Testi utazás"
          cardText="Általában legalább egy érzelmi utazás megelőzi. Ennek során képzeletben az
      adott problémát tároló sejtbe utazunk, hogy itt célzottan a gyógyítással
      foglalkozzunk. Az érintett helyen 'őrzött' emléket hívjuk elő. Ahogy
      feldolgozzuk ehhez a korábbi eseményhez fűződő érzéseinket, úgy
      válik testünk képessé a gyógyulásra."
        />

        <Card
          imgCard={measure}
          cardTitle="Testre szabott utazás"
          cardText="Voltaképpen minden utazás testre szabott. Hiszen nem mi, hanem egy 
belsőbb bölcsesség irányítja. Pontosan az történik, ami akkor és ott 
neked a legjobb. Amekkora nyitottsággal és amilyen erős szándékkal 
veszel részt benne, olyan mélyreható lesz a változás."
        />
      </div>
    </div>
  );
};

export default YourJourney;
