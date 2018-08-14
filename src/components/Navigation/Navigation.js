import React from 'react';

import './Navigation.css';

const navigation = () => (
    <div className="navigation">
        <input type="checkbox" id="nav-toggle" className="navigation__checkbox"/>
        <label htmlFor="nav-toggle" className="navigation__button"><span className="navigation__icon"> &nbsp;</span></label>
        <div className="navigation__background">
            &nbsp;
        </div>
        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a href="#" className="navigation__link">About Natours</a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">Your Benefits</a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">Popular Tours</a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">Stories</a>
                </li>
                <li className="navigation__item">
                    <a href="#" className="navigation__link">Book Now</a>
                </li>
            </ul>
        </nav>
    </div>
);

export default navigation;