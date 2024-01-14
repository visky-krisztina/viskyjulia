import "../css/Contact.css";
import TwoTitleEmbedded from "../components/TwoTitleEmbedded";
//import { AiFillPhone } from "/react-icons/ai";
//import { AiFillFacebook } from "/react-icons/ai";
//import { AiFillYoutube } from "/react-icons/ai";
//import { BsInstagram } from "/react-icons/bs";
//import { MdAlternateEmail } from "/react-icons/Md";

const Contact = () => {
  return (
    <div id="contact" className="container">
      <TwoTitleEmbedded
        firstTitleClass="text-light"
        secondTitleClass="text-p"
        spanLineClass="heading-separator-line"
        firstTitle="kapcsolat"
        secondTitle="Hogyan érhetsz el?"
      />
      <div className="contact-wrapper">
        <div className="contact-section">
          <div className="contact-info">
            <h3>Telefonszámom:</h3>
            <h4> +4072215451</h4>
          </div>
          <div className="contact-info">
            <h3>E-mail cimem:</h3>
            <h4> viskyjulia@yahoo.com</h4>
          </div>

          <div className="contact-info social-href">
            <p className="small-p">
              Elérhető vagyok még a következő média platformokon keresztül is:
            </p>
            <a
              href="https://www.youtube.com/channel/UCtnAa5sBmRm5nru4IxrBqpg"
              target="_blank"
              rel="noopener noreferrer"
              className="social-href"
            ></a>

            <a
              href="https://www.facebook.com/BulgariaTelep/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-href"
            ></a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="social-href"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
        <div className="legalStuff">
          <p>
            <strong>Jogi nyilatkozat:</strong> A Belső Utazás nem hivatott
            diagnosztizálni, vagy gyógyítani semmilyen egészségügyi állapotot,
            vagy megbetegedést. Ilyen tekintetben tudományosan sem igazolták.
            Ennek megfelelően nem áll módunkban semmilyen ígéretet tenni, vagy
            garanciát vállalni a hatásáért, illetve kérjük, hogy szakképzett
            orvosának tanácsait mindig kövesse. Mindazonáltal azt bizton
            állíthatjuk, hogy növekszik a tudományos kutatások száma, melyek
            alátámasztják, hogy létezik a sejtszintű gyógyulás. Ezen túlmenően
            tudjuk azt is, hogy az elmúlt több, mint 20 évben több ezer ember
            használta a Belső Utazás módszerét, akik a saját elmondásuk szerint
            rendkívüli és tartós eredményeket értek el. Amennyiben Ön is
            szeretné felfedezni saját testének gyógyulási képességét és
            felszabadítani az Önben rejlő végtelen potenciált -úgy nincs
            kétségünk afelől, hogy Ön is a módszerünk lelkes hívévé válik majd.
          </p>
        </div>
      </div>
      <h5>Copyright © 2023 Visky Júlia hivatalos oldala</h5>
    </div>
  );
};

export default Contact;
