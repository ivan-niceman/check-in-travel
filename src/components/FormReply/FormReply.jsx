import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function FormReply({ formSubmitted, setFormSubmitted }) {
  useEffect(() => {
    const contactsBlock = document.querySelector('.form-reply');
    if (formSubmitted) {
      contactsBlock.classList.add('form-reply__visible');

      setTimeout(() => {
        contactsBlock.classList.remove('form-reply__visible');
        setFormSubmitted(false);
      }, 2000);
    }
  }, [formSubmitted, setFormSubmitted]);

  return (
    <div className="form-reply">
      <p className="form-reply__text">
        Спасибо за обращение! Наш менеджер свяжется с Вами в ближайшее время!
      </p>
    </div>
  );
}

FormReply.propTypes = {
  formSubmitted: PropTypes.bool.isRequired,
  setFormSubmitted: PropTypes.func.isRequired,
};
