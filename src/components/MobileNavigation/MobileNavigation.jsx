import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import nav from '../Nav/Nav';

export default function MobileNavigation({ togglePageHidden }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    togglePageHidden();
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    togglePageHidden();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <button
        className="burger-button"
        type="button"
        onClick={toggleMobileMenu}
      >
        <span className="burger"></span>
      </button>
      <div
        className={`mobile-menu${
          isMobileMenuOpen ? ' mobile-menu_visible' : ''
        }`}
        onClick={closeMobileMenu}
      >
        <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="btn-close" onClick={closeMobileMenu}>
            <span></span>
            <span></span>
          </button>
          <ul className="mobile-nav__list">
            {nav.map((item, index) => (
              <li key={index} className="mobile-nav__item">
                {item.link.startsWith('/#') ? (
                  <HashLink
                    to={item.link}
                    className="mobile-nav__link"
                    onClick={closeMobileMenu}
                    smooth
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <Link
                    to={item.link}
                    className="mobile-nav__link"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

MobileNavigation.propTypes = {
  togglePageHidden: PropTypes.func.isRequired,
};
