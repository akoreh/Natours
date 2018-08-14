import React from 'react';

import './Story.css';


const story = (props) => {
    return (
        <div className="story">
            <figure className="story__shape">
                <img src={props.image} alt="Person on a tour" className="story__img"/>
                <figcaption className="story__caption">
                    {props.caption}
                </figcaption>
            </figure>
            <div className="story__text">
                <h3 className="heading__tertiary u-margin-bottom-small">
                    {props.title}

                </h3>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default story;