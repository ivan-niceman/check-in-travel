import PropTypes from 'prop-types';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { Link } from 'react-router-dom';

export default function Form({ id, setFormSubmitted }) {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;
    if (name === 'tel') {
      updatedValue = value.replace(/[^\d]/g, '');
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
    if (isSubmitted) {
      validateField(name, updatedValue);
    }
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          errors[name] = 'Введите имя';
        } else {
          delete errors[name];
        }
        break;
      case 'tel':
        if (!value.trim()) {
          errors[name] = 'Введите номер телефона';
        } else {
          delete errors[name];
        }
        break;
      case 'message':
        if (!value.trim()) {
          errors[name] = 'Введите текст';
        } else {
          delete errors[name];
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Введите имя';
    }
    if (!formData.tel.trim()) {
      errors.tel = 'Введите номер телефона';
    } else if (!/^\d{10,}$/.test(formData.tel)) {
      errors.tel = 'Номер телефона минимум 10 цифр';
    }
    if (!formData.message.trim()) {
      errors.message = 'Введите текст';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch('./php/form.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData).toString(),
        });
        if (response.ok) {
          setFormSubmitted(true);
          setFormData({ name: '', tel: '', email: '', message: '' });
        } else {
          console.error('Ошибка отправки данных');
        }
      } catch (error) {
        console.error('Ошибка:', error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="form-block">
      <h2 className="form-title">
        Оставьте заявку прямо сейчас и получите бесплатную консультацию по
        отдыху
      </h2>
      <form
        className="form"
        id={id}
        onSubmit={(e) =>
          handleFormSubmit(
            e,
            formData,
            setFormErrors,
            setLoading,
            setFormData,
            setFormSubmitted,
          )
        }
        noValidate
      >
        <div className="form-inputs">
          <label className="form-label">
            <input
              type="text"
              name="name"
              className="form-contacts"
              placeholder="Имя"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="form-error">{formErrors.name}</span>
          </label>
          <label className="form-label">
            <input
              type="tel"
              name="tel"
              className="form-contacts"
              placeholder="Номер телефона"
              value={formData.tel}
              onChange={handleInputChange}
            />
            <span className="form-error">{formErrors.tel}</span>
          </label>
          <label className="form-label">
            <input
              type="email"
              name="email"
              className="form-contacts"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-label">
            <textarea
              name="message"
              className="send-text"
              placeholder="Удобное время для связи"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <span className="form-error">{formErrors.message}</span>
          </label>
        </div>
        <div className="form-submit">
          <button type="submit" aria-label="отправить" className="form-btn">
            {loading ? <Preloader /> : `Подобрать тур`}
          </button>
          <p className="form-paragraph">
            Нажимая на кнопку, вы даете согласие, что ознакомлены с&nbsp;
            <Link to="/privacy" className="privacy">
              политикой конфиденциальности
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  id: PropTypes.func.isRequired,
  setFormSubmitted: PropTypes.func.isRequired,
};
