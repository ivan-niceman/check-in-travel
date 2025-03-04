import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Form from '../Form/Form';

export default function InfoTop({ setFormSubmitted }) {
  const fullText = 'Чтобы изменить мир, его нужно сначала увидеть!';

  useEffect(() => {
    setTimeout(() => {
      const spans = document.querySelectorAll('.info-top__text span');
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('fade-in');
        }, 50 * index);
      });
    }, 500);
  }, []);

  return (
    <section className="info-top">
      <div className="container">
        <div className="info-top__wrapper">
          <div className="info-top__info">
            <h1 className="info-top__title">
              Check-In-Travel - эксперты в организации премиум отдыха
            </h1>
            <p className="info-top__description">
              Туры на Мальдивы, Сейшелы, Маврикий, в Индонезию, Таиланд, ОАЭ,
              Турцию и Египет. Безупречный отдых, куда бы Вы ни поехали!
            </p>
          </div>
          <Form setFormSubmitted={setFormSubmitted} />
        </div>
        <p className="info-top__text">
          {fullText.split('').map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </p>
      </div>
    </section>
  );
}

InfoTop.propTypes = {
  setFormSubmitted: PropTypes.func.isRequired,
};
