import heroDesktop from "../../assets/images/hero-desktop.jpg";
import heroMobile from "../../assets/images/hero-mobile.jpg";

const HeroImage = () => {
  return (
    <picture className="hero">
      <source media="(min-width: 768px)" srcSet={heroDesktop} />

      <img src={heroMobile} />
    </picture>
  );
};

export default HeroImage;
