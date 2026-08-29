
import '../../scss/Footer.scss';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Title / Name */}
        <h1 className="footer__title d-inline-block bg-dark text-white rounded-pill px-4 py-2 fw-bold fs-4 shadow-sm">
  Faiz Rasool
</h1>

        {/* Navigation Links */}
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          
          <li>
            <a href="#services" className="footer__link">Services</a>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="footer__social">
          <a href="https://facebook.com" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://instagram.com" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://twitter.com" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        {/* Copyright Text */}
        <span className="footer__copy">
          &#169; FaizRasool. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
