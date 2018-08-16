import React from 'react';

import './Tour.css';
import Button from '../../UI/Button/Button';

const tour = (props) => {
    return (
        <div className="card">
            <div className="card__side card__side--front">
                <div className={`card__image card__image--${props.index+1}`}/>
                <h4 className="card__heading">
                    <span className={`card__heading-span card__heading-span--${props.index+1}`}>
                        {props.title}
                    </span>
                </h4>
                <div className="card__details">
                    <ul>
                        {
                            props.details.map(detail => (
                                <li key={detail}>{detail}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={`card__side card__side--back card__side--back-${props.index+1}`}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">${props.price}</p>
                    </div>
                    <Button target="#modal" color="white">Book now!</Button>
                </div>
            </div>
        </div>
    );
}

export default tour;