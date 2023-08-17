import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">SCR Designs</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About me</a>
                </li>

                <li>
                    <a href="#work" className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">

                <a href="https://www.linkedin.com/in/sebastian-cruz-r/" className="footer__social-icon">
                    <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/SCR08" className="footer__social-icon">
                    <i class="uil uil-github"></i>
                </a>

                <a href="https://www.behance.net/sebastiancruz18" className="footer__social-icon">
                    <i class="uil uil-behance"></i>
                </a>
            </div>

            <span className="footer__copy"></span>
        </div>
    </footer>
  )
}

export default Footer