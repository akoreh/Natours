import React from 'react';

import './Modal.css';
import Photo1 from '../../assets/img/nat-8.jpg';
import Photo2 from '../../assets/img/nat-9.jpg';
import Button from '../UI/Button/Button';

const modal = (props) => (
    <div className="modal" id="modal">
        <div className="modal__content">
            <div className="modal__left">
                <img src={Photo1} alt="Tour Photo" className="modal__img"/>
                <img src={Photo2} alt="Tour Photo" className="modal__img"/>
            </div>
            <div className="modal__right">
                <a href="#section-tours" className="modal__close">&times;</a>
                <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
                <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                <h3 className="modal__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem. Sagittis vitae et leo duis. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Justo nec ultrices dui sapien. Ultrices tincidunt arcu non sodales neque sodales. Vel pretium lectus quam id leo in. Lobortis mattis aliquam faucibus purus in. Tellus elementum sagittis vitae et leo. Venenatis lectus magna fringilla urna porttitor rhoncus. Morbi leo urna molestie at elementum eu facilisis sed odio. Egestas integer eget aliquet nibh. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
                </h3>
                <Button color="green">Book now</Button>
            </div>
        </div>
    </div>
);

export default modal;