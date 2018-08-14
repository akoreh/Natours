import React, {Component} from 'react';

import './Booking.css';
import Form from '../UI/Form/Form';

class Booking extends Component {

    render(){
        return (
            <section className="section-booking" id="section-booking">
                <div className="row">
                    <div className="booking">
                        <div className="booking__form">
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Booking;