import React from 'react';

import './Tours.css';
import Tour from './Tour/Tour';
import Button from '../UI/Button/Button';

const tours = () => {
    const tours = [
        {
            title: 'The sea explorer',
            price: 267,
            details: [
                '3 day tour',
                'Up to 30 people',
                '2 tour guides',
                'Sleep in cozy hostels',
                'Difficulty: very easy'
            ]
        },
        {
            title: 'The forest hiker',
            price: 454,
            details: [
                '7 day tour',
                'Up to 40 people',
                '6 tour guides',
                'Sleep in provided tents',
                'Difficulty: medium'
            ]
        },
        {
            title: 'The snow adventurer',
            price: 786,
            details: [
                '5 day tour',
                'Up to 15 people',
                '3 tour guides',
                'Sleep in provided tents',
                'Difficulty: hard'
            ]
        }
    ]


    return (
        <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary">Most Popular Tours</h2>
            </div>
            <div className="row">
                    {
                        tours.map((tour, index) => (
                            <div className="col-1-of-3" key={tour.title}>
                                <Tour {...tour}  index={index}/>
                            </div>
                        ))
                    }
            </div>

            <div className="u-center-text u-margin-top-huge">
                <Button color="green">Discover all tours</Button>
            </div>
        </section>
    );
}

export default tours;