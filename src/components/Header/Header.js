import React from 'react';

import './Header.css';
import Logo from '../../assets/img/logo-white.png';
import Button from '../UI/Button/Button';

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
            <Button target="#section-tours" color="white" animated>Discover our tours</Button>
        </div>
    </header>
);

export default header;