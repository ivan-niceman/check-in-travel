import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import InfoTop from '../InfoTop/InfoTop';
import About from '../About/About';
import AboutWork from '../AboutWork/AboutWork';
import Feedback from '../Feedback/Feedback';
import Partners from '../Partners/Partners';
import Blog from '../Blog/Blog';
import Activities from '../Activities/Activities';
import Privacy from '../Privacy/Privacy';
import Social from '../Social/Social';
import FormPopup from '../FormPopup/FormPopup';
import FormReply from '../FormReply/FormReply';

export default function App() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isPageHidden, setPageHidden] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const togglePageHidden = () => {
    document.body.classList.toggle('page-hidden');
    setPageHidden(!isPageHidden);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="app">
      <Header
        toggleFormVisibility={toggleFormVisibility}
        togglePageHidden={togglePageHidden}
      />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <InfoTop setFormSubmitted={setFormSubmitted} />
                <About />
                <AboutWork />
                <Feedback />
                <Partners setFormSubmitted={setFormSubmitted} />
                <FormReply
                  formSubmitted={formSubmitted}
                  setFormSubmitted={setFormSubmitted}
                />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <Social />
      <FormPopup
        isVisible={isFormVisible}
        toggleFormVisibility={toggleFormVisibility}
        togglePageHidden={togglePageHidden}
      />
    </div>
  );
}
