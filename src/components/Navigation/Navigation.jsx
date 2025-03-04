import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import nav from '../Nav/Nav';

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {nav.map((item, index) => (
          <li key={index} className="nav__item">
            {item.link.startsWith('/#') ? (
              <HashLink to={item.link} className="nav__link" smooth>
                {item.name}
              </HashLink>
            ) : (
              <Link to={item.link} className="nav__link">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
