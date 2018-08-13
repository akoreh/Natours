import React from 'react';

import './Composition.css';
import Photo1 from '../../../assets/img/nat-1-large.jpg';
import Photo2 from '../../../assets/img/nat-2-large.jpg';
import Photo3 from '../../../assets/img/nat-3-large.jpg';

const composition = () => (
    <div className="composition">
        <img className="composition__photo composition__photo--p1" src={Photo1} alt="Composition p1"/>
        <img className="composition__photo composition__photo--p2" src={Photo2} alt="Composition p2"/>
        <img className="composition__photo composition__photo--p3" src={Photo3} alt="Composition p3"/>
    </div>
);

export default composition;