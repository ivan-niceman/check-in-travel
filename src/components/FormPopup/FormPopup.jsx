import PropTypes from 'prop-types';
import { useState } from 'react';
import Preloader from '../Preloader/Preloader';
import { Link } from 'react-router-dom';

export default function FormPopup({
  isVisible,
  toggleFormVisibility,
  togglePageHidden,
}) {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
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
          setFormData({ name: '', tel: '' });
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

  const handleClosePopup = () => {
    toggleFormVisibility();
    togglePageHidden();
    setFormSubmitted(false);
    // setFormData({ name: '', tel: '' });
  };

  return (
    <div
      className={`form-wrapper${isVisible ? ' form-wrapper_visible' : ''}`}
      onClick={handleClosePopup}
    >
      <div className="form-popup-block" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup-close"
          type="button"
          onClick={handleClosePopup}
        >
          <span></span>
        </button>
        {formSubmitted ? (
          <h3 className="form-popup-answer">
            Спасибо!
            <br />
            Мы обязательно скоро с вами
            <br />
            свяжемся
          </h3>
        ) : (
          <form
            className="form form-popup"
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
            <h2 className="form-popup-title">Заявка на обратный звонок</h2>
            <div className="form-popup-inputs">
              <label>
                <input
                  type="text"
                  name="name"
                  className="form-popup-contacts"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <span className="form-error">{formErrors.name}</span>
              </label>
              <label>
                <input
                  type="tel"
                  name="tel"
                  className="form-popup-contacts"
                  placeholder="Номер телефона"
                  value={formData.tel}
                  onChange={handleInputChange}
                />
                <span className="form-error">{formErrors.tel}</span>
              </label>
            </div>
            <div className="form-popup-submit">
              <button
                type="submit"
                aria-label="отправить"
                className="form-popup-btn"
              >
                {loading ? <Preloader /> : `Отправить`}
              </button>
              <p className="form-popup-paragraph">
                Нажимая на кнопку, вы даете согласие, что ознакомлены с&nbsp;
                <Link to="/privacy" className="privacy">
                  политикой конфиденциальности
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

FormPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleFormVisibility: PropTypes.func.isRequired,
  togglePageHidden: PropTypes.func.isRequired,
};
