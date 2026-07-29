import { Headphones, Bluetooth, BatteryFull } from 'lucide-react';
import headphonesHero from '../assets/images/headphones-hero.png';
import './Hero.css';

const FEATURES = [
  { icon: Headphones, label: 'High Quality Sound' },
  { icon: Bluetooth, label: 'Wireless Freedom' },
  { icon: BatteryFull, label: 'Long Battery Life' },
];

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__heading">
            Elevate Your <span className="hero__heading-accent">Audio</span> Experience
          </h1>
          <p className="hero__subtext">
            Premium sound. Modern design. Ultimate comfort.
            <br />
            Discover the perfect audio gear for your lifestyle.
          </p>

          <div className="hero__cta-group">
            <button type="button" className="btn btn--primary">
              Shop Now
            </button>
            <button type="button" className="btn btn--outline">
              Explore More
            </button>
          </div>

          <ul className="hero__features">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li key={label} className="hero__feature">
                <Icon size={20} strokeWidth={1.8} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__pedestal" aria-hidden="true" />
          <img
            src={headphonesHero}
            alt="Premium wireless headphones"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
