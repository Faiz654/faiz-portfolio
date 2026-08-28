
import React from "react";
import "../scss/Home.scss";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">

        <div className="home__content grid">

          {/* SOCIAL ICONS */}
          <div className="home__social">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/faiz-rasool-57a659320/"
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Faiz654"
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            {/* Dribbble */}
            <a
              href="https://dribbble.com"
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
              </svg>
            </a>

          </div>

          {/* PROFILE IMAGE */}
          <div
            className="home__img"
            style={{ backgroundImage: `url(${profileImg})` }}
          ></div>

          {/* INTRODUCTION */}
          <div className="home__data">

            <h1 className="home__title">
              Faiz Rasool 👋
            </h1>

            <h3 className="home__subtitle">
              Web Developer
            </h3>

            <p className="home__description">
              I'm a creative Mern Stack developer based in Pakistan,
              and I'm very passionate and dedicated to my work.
            </p>

            <a
              href="#contact"
              className="button button--flex"
            >
              Say Hello

              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

          </div>

        </div>

        {/* SCROLL DOWN */}
        <div className="home__scroll">

          <a
            href="#about"
            className="home__scroll-button button--flex"
          >

            <svg
              width="32px"
              height="32px"
              className="home__scroll-mouse"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d="M12 5V9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <span className="home__scroll-name">
              Scroll Down
            </span>

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
              className="home__scroll-arrow"
            >
              <line
                x1="12"
                y1="5"
                x2="12"
                y2="19"
              />

              <polyline points="19 12 12 19 5 12" />
            </svg>

          </a>

        </div>

      </div>
    </section>
  );
};

export default Home;

