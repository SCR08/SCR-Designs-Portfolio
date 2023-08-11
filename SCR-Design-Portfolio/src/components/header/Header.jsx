import React from 'react'
import './header.css';

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">SCR Designs
            </a>

            <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link active-link">
                            <i className="uil uil-user nav__icon"></i>About Me
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#work" className="nav__link active-link">
                            <i className="uil uil-file-info-alt nav__icon"></i>Work
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#studies" className="nav__link active-link">
                            <i className="uil uil-graduation-cap nav__icon"></i>Studies
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link active-link">
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link active-link">
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close"></i>
            </div>

            <div className="nav__toggle">
            <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header