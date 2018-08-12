import React from 'react';

import './About.css';
import Button from '../UI/Button/Button';

const about = () => (
    <section className="section-about">
        <div className="u-center-text u-margin-bottom-8">
            <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                Text content
            </div>
            <div className="col-1-of-2">
                Image composition
            </div>
        </div>
    </section>
);

export default about;