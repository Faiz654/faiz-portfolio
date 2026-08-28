import React, { useState } from "react";
import "../scss/Testimonial.scss";

// ==================== IMAGES ====================

import haseeb from "../assets/haseeb.jpg";
import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      image: haseeb,
      name: "Haseeb",
      role: "Web Developer",
      comment:
        "Faiz is a dedicated developer who understands requirements quickly and delivers clean, responsive and user-friendly web solutions.",
    },

    {
      image: testimonial1,
      name: "Emily Carter",
      role: "UI/UX Designer",
      comment:
        "Working with Faiz was a great experience. He is creative, professional and focused on building clean and user-friendly web experiences.",
    },

    {
      image: testimonial2,
      name: "Daniel Wilson",
      role: "Project Manager",
      comment:
        "Faiz has strong problem-solving skills and a good understanding of modern web development. He consistently delivers quality work.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonial section" id="testimonial">

      {/* ==================== HEADING ==================== */}

      <h2 className="section__title">Testimonial</h2>

      <span className="section__subtitle">
        My client saying
      </span>

      <div className="testimonial__container container">

        {/* ==================== TESTIMONIAL CARD ==================== */}

        <div className="testimonial__content">

          {/* PERSON */}

          <div className="testimonial__data">

            <div className="testimonial__image-wrapper">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="testimonial__img"
              />
            </div>

            <div>
              <h3 className="testimonial__name">
                {testimonials[activeIndex].name}
              </h3>

              <span className="testimonial__role">
                {testimonials[activeIndex].role}
              </span>
            </div>

          </div>

          {/* COMMENT */}

          <p className="testimonial__description">
            "{testimonials[activeIndex].comment}"
          </p>

          {/* STARS */}

          <div className="testimonial__stars">
            ★ ★ ★ ★ ★
          </div>

        </div>

        {/* ==================== ARROWS ==================== */}

        <div className="testimonial__buttons">

          {/* PREVIOUS */}

          <button
            type="button"
            className="testimonial__button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* NEXT */}

          <button
            type="button"
            className="testimonial__button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

        {/* ==================== DOTS ==================== */}

        <div className="testimonial__pagination">

          {testimonials.map((_, index) => (
            <span
              key={index}
              className={
                activeIndex === index
                  ? "testimonial__dot testimonial__dot-active"
                  : "testimonial__dot"
              }
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonial;