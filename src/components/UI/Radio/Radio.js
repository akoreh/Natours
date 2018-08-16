import React from 'react';

import './Radio.css';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

const radio = (props) => {
    return (
        <Wrapper>
            <input name={props.name} type="radio" id={props.value} className="radio__input" />
            <label htmlFor={props.value} className="radio__label">
                <span className="radio__button" />
                {props.label}
            </label>
        </Wrapper>
    );
}

export default radio;