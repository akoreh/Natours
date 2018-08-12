import React from 'react';

import './Header.css';
import Logo from '../../assets/img/logo-white.png';

const header = () => (
    <header className="header">
        <div className="header__logo-box">
            <img src={Logo} alt="header__logo"/>
        </div>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">outdoors</span>
                <span className="heading-primary--sub">is where life happens</span>
            </h1>
            <a href="#" className="btn ">Discover Our Tours</a>
        </div>
    </header>
);

export default header;