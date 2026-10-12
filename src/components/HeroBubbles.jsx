const bubbles = ["one", "two", "three", "four", "five", "six", "seven"];

const HeroBubbles = () => (
  <div className="hero-bubbles" aria-hidden="true">
    <div className="hero-bubbles__halo" />
    <div className="hero-bubbles__orbit hero-bubbles__orbit--outer" />
    <div className="hero-bubbles__orbit hero-bubbles__orbit--inner" />
    <div className="hero-bubbles__core">
      <span>CTO</span>
      <small>WEB</small>
    </div>
    {bubbles.map((bubble) => (
      <span key={bubble} className={`hero-bubbles__bubble hero-bubbles__bubble--${bubble}`} />
    ))}
    <div className="hero-bubbles__spark hero-bubbles__spark--one" />
    <div className="hero-bubbles__spark hero-bubbles__spark--two" />
  </div>
);

export default HeroBubbles;
