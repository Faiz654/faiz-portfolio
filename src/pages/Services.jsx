import { useState } from "react";
import "../scss/Services.scss";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      {/* ==================== SERVICE CARDS ==================== */}
      <div className="services__container container grid">

        {/* FRONTEND DEVELOPER */}
        <div className="services__content">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="services__icon-main"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>

            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => toggleTab(1)}
          >
            View More

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="services__button-icon"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>

        {/* BACKEND DEVELOPER */}
        <div className="services__content">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="services__icon-main"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>

            <h3 className="services__title">
              Backend <br /> Developer
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => toggleTab(2)}
          >
            View More

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="services__button-icon"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>

      </div>

      {/* ==================== FRONTEND MODAL ==================== */}
      <div
        className={
          toggleState === 1
            ? "services__modal active-modal"
            : "services__modal"
        }
      >
        <div className="services__modal-content">

          <button
            className="services__modal-close"
            onClick={() => toggleTab(0)}
          >
            ×
          </button>

          <h3 className="services__modal-title">
            Frontend Developer
          </h3>

          <p className="services__modal-description">
            I create modern, responsive and user-friendly web
            interfaces using React.js and modern frontend technologies.
          </p>

          <ul className="services__modal-services grid">

            <li className="services__modal-service">
              <span className="services__modal-check">✓</span>
              <p className="services__modal-info">
                Responsive and mobile-friendly website development.
              </p>
            </li>

            <li className="services__modal-service">
              <span className="services__modal-check">✓</span>
              <p className="services__modal-info">
                React.js component development and reusable UI.
              </p>
            </li>

            <li className="services__modal-service">
              <span className="services__modal-check">✓</span>
              <p className="services__modal-info">
                Interactive web applications with clean and
                maintainable code.
              </p>
            </li>

            <li className="services__modal-service">
              <span className="services__modal-check">✓</span>
              <p className="services__modal-info">
                Modern UI implementation with optimized performance.
              </p>
            </li>

          </ul>
        </div>
      </div>

      {/* ==================== BACKEND MODAL ==================== */}
      <div
        className={
          toggleState === 2
            ? "services__modal active-modal"
            : "services__modal"
        }
      >
        <div className="services__modal-content">

          <button
            className="services__modal-close"
            onClick={() => toggleTab(0)}
          >
            ×
          </button>

          <h3 className="services__modal-title">
            Backend Developer
          </h3>

          <p className="services__modal-description">
            I develop secure and scalable backend systems using
            Node.js, Express.js and MongoDB with RESTful APIs and
            authentication.
          </p>

          <ul className="services__modal-services grid">

            <li className="services__modal-service">
              <span className="services__modal-check">✓</span>
              <p className="services__modal-info">
                RESTful API development using Node.js and Express.js.
              </p>
            </li>

            <li className="services__modal-service">
              <span className="services__modal-check">✓</span>
              <p className="services__modal-info">
                MongoDB database design and Mongoose integration.
              </p>
            </li>

            <li className="services__modal-service">
              <span className="services__modal-check">✓</span>
              <p className="services__modal-info">
                Authentication and authorization with secure APIs.
              </p>
            </li>

            <li className="services__modal-service">
              <span className="services__modal-check">✓</span>
              <p className="services__modal-info">
                Frontend and backend integration for full-stack
                applications.
              </p>
            </li>

          </ul>
        </div>
      </div>

    </section>
  );
};

export default Services;