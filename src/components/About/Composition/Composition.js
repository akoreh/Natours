import React from 'react';

import './Composition.css';
import Photo1 from '../../../assets/img/nat-1-large.jpg';
import Photo1Small from '../../../assets/img/nat-1.jpg';
import Photo2 from '../../../assets/img/nat-2-large.jpg';
import Photo2Small from '../../../assets/img/nat-2.jpg';
import Photo3 from '../../../assets/img/nat-3-large.jpg';
import Photo3Small from '../../../assets/img/nat-3.jpg';

const composition = () => (
    <div className="composition">
        <img
            srcSet={`${Photo1} 1000w, ${Photo1Small} 300w`}
            src={Photo1}
            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
            alt="Composition"
            className="composition__photo composition__photo--p1"
        />
        <img
            srcSet={`${Photo2} 1000w, ${Photo2Small} 300w`}
            src={Photo2}
            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
            alt="Composition"
            className="composition__photo composition__photo--p2"
        />
        <img
            srcSet={`${Photo3} 1000w, ${Photo3Small} 300w`}
            src={Photo3}
            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
            alt="Composition"
            className="composition__photo composition__photo--p3"
        />
    </div>
);

export default composition;