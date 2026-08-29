import { useState, useEffect } from "react";
import "../../scss/Header.scss";

function Header() {
    const [activeNav, setActiveNav] = useState("#home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? "scroll-header" : ""}`}>
            <nav className="navbar navbar-expand-lg py-3 custom-nav">
                <div className="container">
                    
                    {/* Logo */}
                 <a href="#home" className="nav__logo d-inline-block bg-dark text-white rounded-pill px-4 py-2 fw-bold fs-4 shadow-sm text-decoration-none">
    Faiz Rasool
</a>

                    {/* Mobile Toggle Button */}
                    <button 
                        className="navbar-toggler border-0 shadow-none nav__toggle" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#portfolioNavbar" 
                        aria-controls="portfolioNavbar" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-grid-3x3-gap-fill fs-3"></i>
                    </button>

                    {/* Manual Navigation Links List */}
                    <div className="collapse navbar-collapse" id="portfolioNavbar">
                        <ul className="navbar-nav ms-auto gap-2 gap-lg-4 text-center mt-3 mt-lg-0 nav__list">
                            
                            {/* Home */}
                            <li className="nav-item">
                                <a 
                                    href="#home" 
                                    onClick={() => setActiveNav("#home")}
                                    className={`nav__link ${activeNav === "#home" ? "active-link" : ""}`}
                                    data-bs-dismiss="collapse"
                                    data-bs-target="#portfolioNavbar"
                                >
                                    <i className="bi bi-house-door d-lg-none fs-5 nav__icon"></i>
                                    <span>Home</span>
                                </a>
                            </li>

                            {/* About */}
                            <li className="nav-item">
                                <a 
                                    href="#about" 
                                    onClick={() => setActiveNav("#about")}
                                    className={`nav__link ${activeNav === "#about" ? "active-link" : ""}`}
                                    data-bs-dismiss="collapse"
                                    data-bs-target="#portfolioNavbar"
                                >
                                    <i className="bi bi-person d-lg-none fs-5 nav__icon"></i>
                                    <span>About</span>
                                </a>
                            </li>

                            {/* Skills */}
                            <li className="nav-item">
                                <a 
                                    href="#skills" 
                                    onClick={() => setActiveNav("#skills")}
                                    className={`nav__link ${activeNav === "#skills" ? "active-link" : ""}`}
                                    data-bs-dismiss="collapse"
                                    data-bs-target="#portfolioNavbar"
                                >
                                    <i className="bi bi-file-earmark-code d-lg-none fs-5 nav__icon"></i>
                                    <span>Skills</span>
                                </a>
                            </li>

                            {/* Services */}
                            <li className="nav-item">
                                <a 
                                    href="#services" 
                                    onClick={() => setActiveNav("#services")}
                                    className={`nav__link ${activeNav === "#services" ? "active-link" : ""}`}
                                    data-bs-dismiss="collapse"
                                    data-bs-target="#portfolioNavbar"
                                >
                                    <i className="bi bi-briefcase d-lg-none fs-5 nav__icon"></i>
                                    <span>Services</span>
                                </a>
                            </li>

                            {/* Portfolio */}
                           

                            {/* Contact */}
                            <li className="nav-item">
                                <a 
                                    href="#contact" 
                                    onClick={() => setActiveNav("#contact")}
                                    className={`nav__link ${activeNav === "#contact" ? "active-link" : ""}`}
                                    data-bs-dismiss="collapse"
                                    data-bs-target="#portfolioNavbar"
                                >
                                    <i className="bi bi-envelope d-lg-none fs-5 nav__icon"></i>
                                    <span>Contact</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
