import React from 'react';

import './Footer.css';
import Logo1x from '../../assets/img/logo-green-1x.png';
import Logo2x from '../../assets/img/logo-green-2x.png';

const footer = () => (
    <footer className="footer">
        <div className="footer__logo-box">
            <img srcSet={`${Logo1x} 1x, ${Logo2x} 2x`} alt="Footer Logo" className="footer__logo"/>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">Company</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Contact Us</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Careers</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Privacy policy</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Terms</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Designed by Jonas Schmedtmann for his online course "Advanced CSS and SASS", on Udemy. Built by Koreh Andrei.
                </p>
            </div>
        </div>
    </footer>
);

export default footer;