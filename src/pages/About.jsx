

import "../scss/About.scss";
import AboutImg from "../assets/profile.jpg";

import {
  FaAward,
  FaCode,
  FaHeadset,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about section" id="about">

      <h2 className="section__title">
        About Me
      </h2>

      <span className="section__subtitle">
        My introduction
      </span>

      <div className="about__container container grid">

        {/* ================= IMAGE ================= */}

        <img
          src={AboutImg}
          alt="Faiz Rasool"
          className="about__img"
        />


        {/* ================= DATA ================= */}

        <div className="about__data">


          {/* ================= INFO BOXES ================= */}

          <div className="about__info grid">


            {/* EXPERIENCE */}

            <div className="about__box">

              <FaAward className="about__icon" />

              <h3 className="about__title">
                Experience
              </h3>

              <span className="about__subtitle">
                1+ Year
              </span>

            </div>


            {/* MERN PROJECTS */}

            <div className="about__box">

              <FaCode className="about__icon" />

              <h3 className="about__title">
                MERN Projects
              </h3>

              <span className="about__subtitle">
                Completed
              </span>

            </div>


            {/* SUPPORT */}

            <div className="about__box">

              <FaHeadset className="about__icon" />

              <h3 className="about__title">
                Support
              </h3>

              <span className="about__subtitle">
                Online
              </span>

            </div>

          </div>


          {/* ================= DESCRIPTION ================= */}

          <p className="about__description">
            I am Faiz Rasool, a MERN Stack Developer with a
            BSCS background and practical experience in
            developing modern, responsive and user-friendly
            web applications.
          </p>

          <p className="about__description">
            I specialize in React.js, JavaScript, Next.js,
            Node.js, Express.js and MongoDB. I have also
            worked as a Web Developer and MERN Stack
            Instructor.
          </p>


          {/* ================= DOWNLOAD CV ================= */}

          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="button button--flex"
          >
            Download CV

            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </a>

        </div>

      </div>

    </section>
  );
};

export default About;

