import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Plane from '../Icon/Plane';

import workPhoto from '../../images/work-1.webp';

import staff_1 from '../../images/staff/staff-1.webp';
import staff_2 from '../../images/staff/staff-2.webp';
import staff_3 from '../../images/staff/staff-3.webp';
import staff_4 from '../../images/staff/staff-4.webp';

const listOne = [
  {
    subtitle: 'Онлайн с туристами из любых городов',
    text: 'Через нас бронируют не только пакетные туры с вылетом из Москвы, но и отдельно трансферы, отели, экскурсии и т.д. Нет необходимости приезжать в офис и в условиях ограниченного времени выбирать отдых Вашей мечты',
  },
  {
    subtitle: 'Заявка на подбор тура',
    text: (
      <>
        Заявку Вы можете оставить{' '}
        <HashLink to="/#partners-form" smooth>
          здесь
        </HashLink>{' '}
        или через личное сообщение в социальных сетях
      </>
    ),
  },
  {
    subtitle: 'Подбор тура',
    text: 'С учетом Ваших пожеланий мы формируем подборку и направляем в мессенджер или на указанную Вами почту',
  },
  {
    subtitle: 'Оформление договора',
    text: 'После выбора тура мы подписываем с Вами договор (возможен обмен сканированными копиями договора с последующим обязательным обменом оригиналами). Наш курьер привезет вам его в согласованные место и время',
  },
];

const listTwo = [
  {
    subtitle: 'Оплата',
    text: (
      <>
        Есть несколько способов оплаты:
        <br />
        1. По QR коду или ссылке с помощью СПБ на р/c Агентства (эквайринг 0,7%,
        но не более 1500 руб)
        <br />
        2. По реквизитам на р/c Агентства
        <br />
        По результатам оплаты Вам на почту приходит фискальный чек
      </>
    ),
  },
  {
    subtitle: 'Бронирование',
    text: 'Заводим заявку и ждем подтверждения. За 1-2 дня до вылета мы Вам отправим пакет документов на почту',
  },
  {
    subtitle: 'Поддержка',
    text: 'На протяжении всего Вашего отдыха мы находимся на связи, помогая в решении любых вопросов. Одна из причин, по которой нас выбирают туристы снова и снова',
  },
  {
    subtitle: 'Обратная связь',
    text: 'Наша любимая часть: подробные отзывы, атмосферные фото и видео Вашего отдыха, таги в соц.сетях, рекомендации друзьям – все это наполняет нас и мотивирует на дальнейшую работу!',
  },
];

const staffFirstGroup = [
  {
    name: 'Кристина Кулик - ',
    position: 'соучредитель и руководитель',
    link: 'https://wa.me/+79645502094',
    text: (
      <>
        Путешествия - моя страсть. Я была более чем в 35 странах и
        проинспектировала в рамках личных поездок или рекламных туров более 200
        отелей и резортов. Те, кто летает от меня давно, знают мою глубокую
        личную экспертизу и индивидуальный подход к каждому запросу. Более
        подробно о моих поездках вы можете узнать в разделе{' '}
        <Link to="/blog">Блог эксперта</Link>
        <br />
        <br />
        У меня 10-летний юридический бэкграунд и зарубежный MASTER DEGREE в
        сфере туристического бизнеса (GBSB Business School в Барселоне), поэтому
        можете быть уверенны в грамотном сопровождении Вашего отдыха на каждом
        этапе.
        <br />
        <br />
        Премиальные направление (Мальдивы, Сейшелы, Маврикий) веду лично, так же
        как и работу с VIP-клиентами агентства.
        <br />
        <br />
        По таким направлениям, как Индонезия, Таиланд, Турция и Египет мне
        помогает моя <b>замечательная команда:</b>
      </>
    ),
    image: staff_1,
  },
  {
    name: 'Кристина Хухарева - ',
    position: 'партнер, руководитель отдела MICE',
    link: 'https://wa.me/+79645502094',
    text: (
      <>
        Опыт работы с корпоративным сегментом более 15 лет. Посетитель и
        участник международных отраслевых туристических выставок: IMEX
        Frankfurt, IBTM World Barcelona, MICE DAY и др. Кристина является
        участником mice community - всегда в курсе последних трендов индустрии.
        <br />
        <br />
        Пул наших поставщиков ежегодно пополняется, обсуждаются новые и выгодные
        условия сотрудничества: прямые контрактные цены от отелей, гибкие
        условия групповых тарифов у а/к, мы мониторим новые деловые
        пространства, сотрудничаем с mice-кластерами, что позволяет делать наши
        мероприятия с акцентом на регион.
        <br />
        <br />
        <b>
          Мы предлагаем персональный сервис деловых мероприятий для вашего
          бизнеса:
        </b>
        <br />
        - travel поддержка командировок ваших сотрудников
        <br />
        - incentive travel – поощрительные поездки для ваших сотрудников
        <br />- организация деловых клиентских мероприятий : круглые столы,
        конференции, презентации
      </>
    ),
    image: staff_2,
  },
];

const staffSecondGroup = [
  {
    name: 'Людмила Собина - ',
    position: 'эксперт по Индонезии',
    text: (
      <>
        Людмила 3 года прожила на Бали, знает все уникальные и самые
        экзотические места на острове.
        <br />
        <br />
        Проинспектировала более 50 отелей и может разработать индивидуальные
        маршруты под любой запрос, включая посещение соседних островов:
        Лембонган, Ломбок, Нуса Пенида и Гили
      </>
    ),
    image: staff_3,
  },
  {
    name: 'Елизавета Анохина - ',
    position: 'менеджер по работе с клиентами',
    text: (
      <>
        Лиза имеет 7-летний опыт работы в туриндустрии, проинспектировала более
        70 отелей Таиланда, Египта и Турции и регулярно обновляет нашу отельную
        базу.
        <br />
        <br />
        Ответственность исполнительность и прекрасные коммуникативные навыки
        позволяют поддерживать высокие стандарты работы с клиентами и
        обеспечивать бесшовный отдых наших туристов
      </>
    ),
    image: staff_4,
  },
];

export default function AboutWork() {
  return (
    <section className="about-work">
      <h2 className="title">как мы работаем:</h2>
      <div className="about-work__wrapper container">
        <div className="about-work__block">
          <ul className="about-work__list">
            {listOne.map((item, index) => (
              <li key={index}>
                <h3 className="about-work__subtitle">
                  <Plane />
                  {item.subtitle}
                </h3>
                <p className="about-work__text">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="about-work__img-wrapper">
            <img
              src={workPhoto}
              alt="самолет на столе"
              className="about-work__img"
            />
          </div>
        </div>
        <div className="about-work__block">
          <h2 className="about-work__name-company">Check in Travel</h2>
          <ul className="about-work__list">
            {listTwo.map((item, index) => (
              <li key={index}>
                <h3 className="about-work__subtitle">
                  <Plane />
                  {item.subtitle}
                </h3>
                <p className="about-work__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="about-work__staff">
        <div className="container">
          <ul className="about-work__staff-list">
            {staffFirstGroup.map((item, index) => (
              <li className="about-work__staff-item" key={index}>
                <div className="about-work__staff-card">
                  <div>
                    <img
                      className="about-work__staff-img-mobile"
                      src={item.image}
                      alt={item.name}
                    />
                    <h3 className="about-work__staff-name">
                      <b>{item.name}</b>
                      {item.position}
                    </h3>
                    <Plane />
                    <a
                      href={item.link}
                      className="about-work__staff-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Связаться
                    </a>
                  </div>
                  <p className="about-work__staff-text">{item.text}</p>
                </div>
                <img
                  className="about-work__staff-img"
                  src={item.image}
                  alt={item.name}
                />
              </li>
            ))}
          </ul>
          <ul className="second-group-list">
            {staffSecondGroup.map((item, index) => (
              <li className="second-group-item" key={index}>
                <div className="second-group-info">
                  <h3 className="second-group-name">
                    <b>{item.name}</b>
                    {item.position}
                  </h3>
                  <p className="second-group-text">{item.text}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="second-group-img"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
