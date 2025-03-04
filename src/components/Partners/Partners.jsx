import PropTypes from 'prop-types';
import Form from '../Form/Form';

import partner_1 from '../../images/partners/partner-1.svg';
import partner_2 from '../../images/partners/partner-2.svg';
import partner_3 from '../../images/partners/partner-3.svg';
import partner_4 from '../../images/partners/partner-4.svg';
import partner_5 from '../../images/partners/partner-5.svg';
import partner_6 from '../../images/partners/partner-6.svg';
import partner_7 from '../../images/partners/partner-7.svg';
import partner_8 from '../../images/partners/partner-8.svg';
import partner_9 from '../../images/partners/partner-9.svg';
import partner_10 from '../../images/partners/partner-10.svg';
import partner_11 from '../../images/partners/partner-11.svg';
import partner_12 from '../../images/partners/partner-12.svg';
import partner_13 from '../../images/partners/partner-13.svg';
import partner_14 from '../../images/partners/partner-14.svg';

const partners = [
  {
    img: partner_1,
    alt: 'Lux',
  },
  {
    img: partner_2,
    alt: 'JW Marriott',
  },
  {
    img: partner_3,
    alt: 'Hilton',
  },
  {
    img: partner_4,
    alt: 'Gloria',
  },
  {
    img: partner_5,
    alt: 'Emerald',
  },
  {
    img: partner_6,
    alt: 'Sheraton',
  },
  {
    img: partner_7,
    alt: 'Rixos',
  },
  {
    img: partner_8,
    alt: 'Le Meridien',
  },
  {
    img: partner_9,
    alt: 'Mövenpick',
  },
  {
    img: partner_10,
    alt: 'Robinson',
  },
  {
    img: partner_11,
    alt: 'Canareef',
  },
  {
    img: partner_12,
    alt: 'Lujo',
  },
  {
    img: partner_13,
    alt: 'Cullinan',
  },
  {
    img: partner_14,
    alt: 'Four Seasons',
  },
];

export default function Partners({ setFormSubmitted }) {
  return (
    <section className="partners container">
      <h2 className="title">ПАРТНЕРЫ:</h2>
      <Form id="partners-form" setFormSubmitted={setFormSubmitted} />
      <ul className="partners__list">
        <li>
          <h2 className="title">ПАРТНЕРЫ:</h2>
        </li>
        {partners.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt={item.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Partners.propTypes = {
  setFormSubmitted: PropTypes.func.isRequired,
};
