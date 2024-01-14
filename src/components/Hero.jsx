import { TypeAnimation } from "react-type-animation";
import "../css/Hero.css";
import heroImg from "../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <img src={heroImg} alt="main image" className="hero-image" />
      <div className="centered-div">
        <h2 className="greeting-text">Üdvözöllek,</h2>

        <TypeAnimation
          sequence={["Visky Júlia vagyok"]}
          cursor={false}
          className="animation-text"
        />
        <p className="greeting-p">belső utazás terápeuta.</p>
      </div>
    </div>
  );
};

export default Hero;
