import React from 'react';

import './About.css';
import Button from '../UI/Button/Button';
import Composition from './Composition/Composition';

const about = () => (
    <section className="section-about">
        <div className="u-center-text u-margin-bottom-large">
            <h2 className="heading-secondary">Exciting tours for adventurous people</h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                <p className="paragraph">
                    Etiam cursus lectus id dignissim lobortis. Nullam condimentum dolor ac nulla iaculis, tempus blandit massa maximus. Integer mattis diam suscipit, luctus ex vel, dignissim velit. Curabitur elementum bibendum auctor.
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                <p className="paragraph">
                    Nullam tincidunt gravida ex, sit amet commodo eros mattis semper. Nullam condimentum dolor ac nulla iaculis, tempus blandit massa maximus.
                </p>
                <Button text>Learn more &rarr;</Button>
            </div>
            <div className="col-1-of-2">
                <Composition />
            </div>
        </div>
    </section>
);

export default about;