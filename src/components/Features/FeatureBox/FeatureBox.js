import React from 'react';

import './FeatureBox.css';

const featureBox = (props) => {
    return (
        <div className="feature-box">
            <i className={`feature-box__icon icon-${props.icon}`}/>
            <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
            <p className="feature-box__text">
                {props.children}
            </p>
        </div>
    );
}

export default featureBox;