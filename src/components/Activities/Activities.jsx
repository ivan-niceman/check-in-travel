import act_1_1 from '../../images/activities/photo-1.webp';
import act_1_2 from '../../images/activities/photo-2.webp';
import act_1_3 from '../../images/activities/photo-3.webp';
import act_2_1 from '../../images/activities/photo-2.1.webp';
import act_2_2 from '../../images/activities/photo-2.2.webp';
import act_2_3 from '../../images/activities/photo-2.3.webp';

export default function Activities() {
  return (
    <section className="activities container">
      <h2 className="title">мероприятия</h2>
      <div className="activities__wrapper">
        <div className="activities__header">
          <p>
            <b>
              <span>Когда:</span>&nbsp;15 марта 2025 в 10:00
            </b>
          </p>
          <p>
            <b>
              <span>Где:</span>&nbsp;ПЦ Жара
            </b>
          </p>
        </div>
        <div className="activities__content">
          <div className="activities__info">
            <p className="activities__text">
              Друзья, всем привет!
              <br />
              <br />
              Спешим поделиться отличной новостью - 15 марта в 10.00 в ПЦ Жара
              пройдет первый{' '}
              <b>Юридический турнир по пляжному волейболу LEGAL VOLLEY</b>,
              подпитанный общей любовью к этому виду спорта юристов и
              невероятной энергией журналиста и продюсера Анны Львовой. На
              мероприятие уже заявлено 16 команд, присоединяйтесь в качестве
              участников и группы поддрежки – будет жарко!
              <br />
              <br />
              Наше турагентство CHECK-IN-TRAVEL выступает одним из спонсоров
              мероприятия: тот случай, когда это не только почетно, но и
              чертовски приятно! Каждый из 6 победителей (по 1 команде из 3
              человек от каждой лиги) получит денежный сертификат на 10,000
              рублей на приобретение тура у нашего агентства!
              <br />
              <br />
              Всем спорта и позитива!
            </p>
            <a
              href="https://wa.me/+79645502094"
              className="activities__link"
              target="_blank"
              rel="noreferrer"
            >
              Записаться
            </a>
            <div className="activities__photos">
              <img src={act_1_1} alt="сертификат" />
              <img src={act_1_2} alt="волейбольный мяч" />
            </div>
          </div>
          <img src={act_1_3} alt="организатор" className="activities__img" />
        </div>
      </div>
      <div className="activities__wrapper">
        <div className="activities__header">
          <p>
            <b>
              <span>Когда:</span>&nbsp;15 декабря 2024
            </b>
          </p>
        </div>
        <div className="activities__content">
          <div className="activities__info">
            <p className="activities__text">
              15 декабря 2024 года прошла премия вручения наград Лидерам Продаж
              туроператора Panteon. Турагенты приняли участие в интеллектуальной
              игре «Что? Где? Куда»? Замечательное мероприятие прошло в очень
              теплой, дружеской и веселой атмосфере.
              <br />
              <br />
              Напомню, что туроператор Panteon является одним из наших надежных
              и любимых партнеров по работе с Мальдивами и Маврикием. Любим их
              за гибкость и профессиональный подход к своей работе.
            </p>
            <div className="activities__photos">
              <img
                src={act_2_1}
                className="activities__small-photo"
                alt="участники"
              />
              <img src={act_2_2} alt="участники" />
            </div>
          </div>
          <img src={act_2_3} alt="участники" className="activities__img" />
        </div>
      </div>
    </section>
  );
}
