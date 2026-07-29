import logoIcon from '../assets/images/logo-icon.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__logo">
          <img src={logoIcon} alt="Crescendo logo" className="footer__logo-icon" />
          <span>Crescendo</span>
        </a>
        <p className="footer__copy">
          © {new Date().getFullYear()} Crescendo Audio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
