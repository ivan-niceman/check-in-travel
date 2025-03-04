import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

export default function Header({ toggleFormVisibility, togglePageHidden }) {
  const location = useLocation();

  return (
    <header
      className={`${location.pathname === '/' ? 'header-home' : 'header'}`}
    >
      <div className="container">
        <Link to="/" className="logo" />
        <Navigation />
        <button
          className="header-button"
          onClick={() => {
            toggleFormVisibility();
            togglePageHidden();
          }}
        >
          Обратный&nbsp;звонок
        </button>
        <MobileNavigation togglePageHidden={togglePageHidden} />
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  togglePageHidden: PropTypes.func.isRequired,
};
