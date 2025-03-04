import { Link } from 'react-router-dom';

import Social from '../Social/Social';
import Navigation from '../Navigation/Navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <Link to="/" className="logo" onClick={scrollToTop} />
            <Social />
          </div>
          <Navigation />
          <div className="footer__schedule">
            <b>График работы:</b>
            <p>
              Пн-птн: с 10:00 до 21:00
              <br />
              Сб: с 12:00 до 16:00
              <br />
              Вск: выходной
              <br />
              Номер в реестре:
              <br />
              РТА 0019424
            </p>
          </div>
        </div>
        <div className="footer__policy">
          <div>
            <Link to="/privacy" className="footer__policy-link">
              Положение об обработке персональных данных
            </Link>
            <p>
              Информация на сайте не является публичной офертой и носит
              исключительно информационный характер.
              <br />
              ИНН 504790090549 ОГРНИП 317502900029305
            </p>
          </div>
          <a
            href="https://nice-dev.ru/"
            className="footer__policy-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            (С) Nice-Dev Web-Studio 2020-{currentYear}
          </a>
        </div>
      </div>
    </footer>
  );
}
