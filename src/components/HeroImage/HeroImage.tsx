import heroDesktop from "../../assets/images/hero-desktop.jpg";
import heroMobile from "../../assets/images/hero-mobile.jpg";

import "./heroImage.css";

const HeroImage = () => {
  return (
    <picture className="hero">
      <source media="(min-width: 768px)" srcSet={heroDesktop} />

      <img src={heroMobile} className="hero__image" />
    </picture>
  );
};

export default HeroImage;
