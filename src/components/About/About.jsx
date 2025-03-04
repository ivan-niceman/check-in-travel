import { useEffect, useRef } from 'react';
import aboutPhoto from '../../images/ARS_9162.webp';

const list = [
  {
    subtitle: 'Глубокая экспертиза по направлениям',
    text: 'Мы всегда знаем, куда Вас отправляем. Лично побывали на множестве курортов, отсмотрели более 1000 отелей',
  },
  {
    subtitle: 'Любовь к своему делу',
    text: 'Наша команда - настоящие фанаты туризма. Мы обожаем то, чем занимаемся, именно поэтому всегда стремимся пополнять багаж знаний для Вас!',
  },
  {
    subtitle: 'Поддержка',
    text: 'На протяжении всего Вашего отдыха мы находимся на связи, помогая в решении любых вопросов. С нашей поддержкой Вы никогда не останетесь один на один в трудной ситуации на отдыхе',
  },
  {
    subtitle: 'Конкурентные цены и работа с проверенными партнерами',
    text: 'Наша фирма всегда работает согласно законодательства, без завышения цен, строго по прайсам проверенных Туроператоров.',
  },
];

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const listElement = aboutRef.current.querySelector('.about__list');
      const items = listElement.querySelectorAll('.about__item');

      const rect = listElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('about__item_visible');
          }, index * 500);
        });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <h2 className="title">О нас</h2>
      <div className="about__wrapper">
        <div className="about__photo">
          <img src={aboutPhoto} alt="Кристина Кулик" />
        </div>
        <div className="about__info">
          <p className="about__text">
            <span>Check-In-Travel - </span>туристическое агентство, работающее
            онлайн для туристов из любой точки мира, которое с 2017 года успешно
            организует бесшовный отдых премиум-уровня для частных и
            корпоративных клиентов. Соучредители: Кристина Кулик и Ксения
            Бакулина.
          </p>
          <p className="about__text">
            <span>Наши сильные стороны:</span>
          </p>
          <ul className="about__list">
            {list.map((item, index) => (
              <li className="about__item" key={index}>
                <h3 className="about__item-subtitle">{item.subtitle}</h3>
                <p className="about__item-text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
