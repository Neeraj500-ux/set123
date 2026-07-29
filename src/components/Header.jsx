import { ShoppingCart } from 'lucide-react';
import logoIcon from '../assets/images/logo-icon.png';
import './Header.css';

const NAV_LINKS = ['Home', 'Products', 'About', 'Find us', 'Pages'];

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          <img src={logoIcon} alt="Crescendo logo" className="header__logo-icon" />
          <span>Crescendo</span>
        </a>

        <nav className="header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="header__nav-link">
              {link}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__cart" aria-label="View cart">
            <ShoppingCart size={20} strokeWidth={1.8} />
          </button>
          <button type="button" className="btn btn--primary btn--sm">
            Buy Template
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
