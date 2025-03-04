import { useEffect, useState } from 'react';

import Telegram from '../../images/Icons/telegram.svg';
import Whatsapp from '../../images/Icons/whatsapp.svg';

export default function Social() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const partnersElement = document.querySelector('.footer');
      if (partnersElement) {
        const { top } = partnersElement.getBoundingClientRect();
        setIsVisible(top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const social = [
    {
      link: 'https://t.me/arcobalenotravel',
      icon: Telegram,
      alt: 'Telegram',
    },
    {
      link: 'https://wa.me/+79645502094',
      icon: Whatsapp,
      alt: 'Whatsapp',
    },
  ];

  return (
    // <div className="social">
    <div className={`social ${isVisible ? '' : 'hidden'}`}>
      {social.map((item, index) => (
        <a
          href={item.link}
          className="social__link"
          key={index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={item.icon} alt={item.alt} />
        </a>
      ))}
    </div>
  );
}
