import React, { useState } from "react";
import "../scss/Qualification.scss";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">

        {/* ==================== TABS ==================== */}

        <div className="qualification__tabs">

          {/* EDUCATION */}
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active"
                : "qualification__button"
            }
            onClick={() => toggleTab(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6" />
              <path d="M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>

            Education
          </div>

          {/* EXPERIENCE */}
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active"
                : "qualification__button"
            }
            onClick={() => toggleTab(2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>

            Experience
          </div>

        </div>


        {/* ==================== CONTENT ==================== */}

        <div className="qualification__sections">

          {/* ==================================================
              EDUCATION
          ================================================== */}

          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >

            {/* 1. BSCS */}
            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  BS Computer Science
                </h3>

                <span className="qualification__subtitle">
                  Government College University Faisalabad (GCUF)
                </span>

                <div className="qualification__calendar">
                  <span>📅</span>
                  2020 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>


            {/* 2. WEB DEVELOPMENT */}
            <div className="qualification__data">

              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Web Development
                </h3>

                <span className="qualification__subtitle">
                  Seerat Institute, Faisalabad
                </span>

                <div className="qualification__calendar">
                  <span>📅</span>
                  2024
                </div>
              </div>

            </div>

          </div>


          {/* ==================================================
              EXPERIENCE
          ================================================== */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >

            {/* 1. BVL */}
            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">
                  Web Development Intern
                </h3>

                <span className="qualification__subtitle">
                  BVL
                </span>

                <div className="qualification__calendar">
                  <span>📅</span>
                  Internship
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>


            {/* 2. IDEYAFIX */}
            <div className="qualification__data">

              <div></div>

              <div>
                <span className="qualification__rounder"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Web Developer & Instructor
                </h3>

                <span className="qualification__subtitle">
                  Ideya Fix (Pvt.) Ltd.
                </span>

                <div className="qualification__calendar">
                  <span>📅</span>
                  Professional Experience
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualification;